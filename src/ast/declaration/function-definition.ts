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
import { StateMutability } from './state-mutability';
import { Visibility } from './visibility';
import { ModifierInvocation, OverrideSpecifier, ParameterList } from '../meta';
import { Block } from '../statement';

type FunctionKind = 'function' | 'constructor' | 'receive' | 'fallback';

export class BaseFunctionDefinition extends BaseNode {
  type = 'FunctionDefinition';
  name: Identifier | null = null;
  functionKind: FunctionKind = 'function';
  override: OverrideSpecifier | null = null;
  virtual: boolean = false;
  visibility: Visibility | null = null;
  stateMutability: StateMutability | null = null;
  modifiers: ModifierInvocation[] = [];
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
      this.visibility = ctx.visibility(0)?.accept(visitor) ?? null;
      this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? null;
      this.parameters = ctx._arguments?.accept(visitor) ?? null;
      this.returnParameters = ctx._returnParameters?.accept(visitor) ?? null;
    } else {
      this.modifiers = ctx.modifierInvocation().map((modifier) => modifier.accept(visitor));
      this.body = ctx.block()?.accept(visitor) ?? null;

      if (ctx instanceof ConstructorDefinitionContext) {
        this.functionKind = 'constructor';
        this.visibility = new Visibility(ctx as any, visitor);
        this.stateMutability = new StateMutability(ctx as any, visitor);
        this.parameters = ctx.parameterList()?.accept(visitor) ?? null;
      } else {
        this.virtual = !!ctx.Virtual().length;
        const overrideSpecifier = ctx.overrideSpecifier(0) as OverrideSpecifierContext | null;
        this.override = overrideSpecifier ? overrideSpecifier.accept(visitor) : null;

        if (ctx instanceof FallbackFunctionDefinitionContext) {
          this.functionKind = 'fallback';
          this.visibility = new Visibility(ctx as any, visitor);
          this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? this.stateMutability;
          this.parameters = ctx.parameterList(0)?.accept(visitor) ?? null;
          this.returnParameters = ctx.parameterList(1)?.accept(visitor) ?? null;
        } else if (ctx instanceof ReceiveFunctionDefinitionContext) {
          this.functionKind = 'receive';
          this.visibility = new Visibility(ctx as any, visitor);
          this.stateMutability = new StateMutability(ctx as any, visitor);
        } else {
          this.functionKind = 'function';
          this.name = ctx.identifier()?.accept(visitor) ?? null;
          this.visibility = ctx.visibility(0)?.accept(visitor) ?? this.visibility;
          this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? this.stateMutability;
          this.parameters = ctx.parameterList(0)?.accept(visitor) ?? null;
          this.returnParameters = ctx.parameterList(1)?.accept(visitor) ?? null;
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
