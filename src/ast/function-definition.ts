import { BaseNodeUnion, FunctionKind } from './base';
import {
  ConstructorDefinitionContext,
  FallbackFunctionDefinitionContext,
  FunctionDefinitionContext,
  FunctionTypeNameContext,
  OverrideSpecifierContext,
  ReceiveFunctionDefinitionContext,
  SolidityParserVisitor,
} from '../grammar';
import { Identifier } from './identifier';
import { StateMutability } from './state-mutability';
import { Visibility } from './visibility';
import { OverrideSpecifier } from './override-specifier';
import { ParameterList } from './parameter-list';
import { ModifierInvocation } from './modifier-invocation';
import { Block } from './block';
import type { ConstructorDefinition } from './constructor-definition';
import type { FallbackFunctionDefinition } from './fallback-function-definition';
import type { ReceiveFunctionDefinition } from './receive-function-definition';
import { FunctionTypeName } from './function-type-name';

export class FunctionDefinition extends BaseNodeUnion<
  | FunctionDefinition
  | FunctionTypeName
  | ConstructorDefinition
  | FallbackFunctionDefinition
  | ReceiveFunctionDefinition
> {
  // type = 'FunctionDefinition';
  name: Identifier | null = null;
  functionKind: FunctionKind = 'function';
  override: OverrideSpecifier | null = null;
  virtual: boolean = false;
  visibility: Visibility | null = null;
  stateMutability: StateMutability | null = null;
  modifiers: ModifierInvocation[] = [];
  parameters: ParameterList[] = [];
  returnParameters: ParameterList[] = [];
  body: Block | null = null;

  public constructor(
    ctx:
      | FunctionDefinitionContext
      | FunctionTypeNameContext
      | ConstructorDefinitionContext
      | FallbackFunctionDefinitionContext
      | ReceiveFunctionDefinitionContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, [], visitor);
    if (ctx instanceof FunctionTypeNameContext) {
      this.type = 'FunctionTypeName';
      this.visibility = ctx.visibility(0)?.accept(visitor) ?? null;
      this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? null;
      this.parameters = ctx._arguments?.accept(visitor) ?? [];
      this.returnParameters = ctx._returnParameters?.accept(visitor) ?? [];
    } else {
      this.modifiers = ctx.modifierInvocation().map((modifier) => modifier.accept(visitor));
      this.body = ctx.block()?.accept(visitor) ?? null;

      if (ctx instanceof ConstructorDefinitionContext) {
        this.type = 'ConstructorDefinition';
        this.functionKind = 'constructor';
        this.visibility = new Visibility(ctx as any, visitor);
        this.stateMutability = new StateMutability(ctx as any, visitor);
        this.parameters = ctx.parameterList()?.accept(visitor) ?? [];
      } else {
        this.virtual = !!ctx.Virtual().length;
        const overrideSpecifier = ctx.overrideSpecifier(0) as OverrideSpecifierContext | null;
        this.override = overrideSpecifier ? overrideSpecifier.accept(visitor) : null;

        if (ctx instanceof FallbackFunctionDefinitionContext) {
          this.type = 'FallbackFunctionDefinition';
          this.functionKind = 'fallback';
          this.visibility = new Visibility(ctx as any, visitor);
          this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? this.stateMutability;
          this.parameters = ctx.parameterList(0)?.accept(visitor) ?? [];
          this.returnParameters = ctx.parameterList(1)?.accept(visitor) ?? [];
        } else if (ctx instanceof ReceiveFunctionDefinitionContext) {
          this.type = 'ReceiveFunctionDefinition';
          this.functionKind = 'receive';
          this.visibility = new Visibility(ctx as any, visitor);
          this.stateMutability = new StateMutability(ctx as any, visitor);
        } else {
          this.type = 'FunctionDefinition';
          this.functionKind = 'function';
          this.name = ctx.identifier()?.accept(visitor) ?? null;
          this.visibility = ctx.visibility(0)?.accept(visitor) ?? this.visibility;
          this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? this.stateMutability;
          this.parameters = ctx.parameterList(0)?.accept(visitor) ?? [];
          this.returnParameters = ctx.parameterList(1)?.accept(visitor) ?? [];
        }
      }
    }
  }
}
