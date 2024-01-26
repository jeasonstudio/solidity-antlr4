import { BaseNode } from '../base';
import {
  ConstructorDefinitionContext,
  FallbackFunctionDefinitionContext,
  FunctionDefinitionContext,
  FunctionTypeNameContext,
  OverrideSpecifierContext,
  ReceiveFunctionDefinitionContext,
  SolidityParserVisitor,
} from '../../antlr4';
import { Identifier } from '../expression';
import { StateMutabilityKind } from './state-mutability';
import { VisibilityKind } from './visibility';
import { ModifierInvocation, OverrideSpecifier, ParameterList } from '../meta';
import { Block } from '../statement';

type FunctionKind = 'function' | 'constructor' | 'receive' | 'fallback';

export class BaseFunctionDefinition extends BaseNode {
  type = 'FunctionDefinition' as any;
  name: Identifier | null = null;
  functionKind: FunctionKind = 'function';
  override: OverrideSpecifier | null = null;
  virtual: boolean = false;
  visibility: VisibilityKind | null = null;
  stateMutability: StateMutabilityKind | null = null;
  modifiers: ModifierInvocation[] | null = null;
  parameters: ParameterList | null = null;
  returnParameters: ParameterList | null = null;
  body: Block | null = null;

  constructor(
    ctx:
      | FunctionDefinitionContext
      | FunctionTypeNameContext
      | ConstructorDefinitionContext
      | FallbackFunctionDefinitionContext
      | ReceiveFunctionDefinitionContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);
    if (ctx instanceof FunctionTypeNameContext) {
      this.functionKind = 'function';
      this.visibility = (ctx.visibility(0)?.getText() as VisibilityKind) ?? null; // ctx.visibility(0)?.accept(visitor) ?? null;
      this.stateMutability = (ctx.stateMutability(0)?.getText() as StateMutabilityKind) ?? null; // ctx.stateMutability(0)?.accept(visitor) ?? null;
      this.parameters = ctx._arguments?.accept(visitor) ?? null;
      this.returnParameters = ctx._returnParameters?.accept(visitor) ?? null;
    } else {
      this.modifiers = ctx.modifierInvocation().map((modifier) => modifier.accept(visitor));
      this.body = ctx.block()?.accept(visitor) ?? null;

      if (ctx instanceof ConstructorDefinitionContext) {
        this.functionKind = 'constructor';
        this.visibility = ctx.Internal(0) ? 'internal' : ctx.Public(0) ? 'public' : null; // new Visibility(ctx as any, visitor);
        this.stateMutability = ctx.Payable(0) ? 'payable' : null; // new StateMutability(ctx as any, visitor);
        this.parameters = ctx._arguments?.accept(visitor) ?? null;
        this.returnParameters = null;
      } else {
        this.virtual = !!ctx.Virtual().length;
        const overrideSpecifier = ctx.overrideSpecifier(0) as OverrideSpecifierContext | null;
        this.override = overrideSpecifier ? overrideSpecifier.accept(visitor) : null;

        if (ctx instanceof FallbackFunctionDefinitionContext) {
          this.functionKind = 'fallback';
          this.visibility = ctx.External(0) ? 'external' : null; // new Visibility(ctx as any, visitor);
          this.stateMutability = (ctx.stateMutability(0)?.getText() as StateMutabilityKind) ?? null;
          this.parameters = ctx
            .parameterList()
            .map((parameterList) => parameterList.accept(visitor));
          this.returnParameters = ctx._returnParameters?.accept(visitor) ?? null;
        } else if (ctx instanceof ReceiveFunctionDefinitionContext) {
          this.functionKind = 'receive';
          this.visibility = ctx.External() ? 'external' : null; // new Visibility(ctx as any, visitor);
          this.stateMutability = ctx.Payable() ? 'payable' : null; // new StateMutability(ctx as any, visitor);
        } else {
          this.functionKind = 'function';
          this.name = ctx.identifier()?.accept(visitor) ?? null;
          this.visibility = (ctx.visibility(0)?.getText() as VisibilityKind) ?? null;
          this.stateMutability = (ctx.stateMutability(0)?.getText() as StateMutabilityKind) ?? null;
          this.parameters = ctx._arguments?.accept(visitor) ?? null;
          this.returnParameters = ctx._returnParameters?.accept(visitor) ?? null;
        }
      }
    }
  }
}

export class FunctionDefinition extends BaseFunctionDefinition {
  type = 'FunctionDefinition' as const;
}

export {
  FunctionDefinition as ConstructorDefinition,
  FunctionDefinition as FallbackFunctionDefinition,
  FunctionDefinition as ReceiveFunctionDefinition,
};
