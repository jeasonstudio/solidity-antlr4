import { BaseNode, FunctionKind } from './base';
import {
  ConstructorDefinitionContext,
  FallbackFunctionDefinitionContext,
  FunctionDefinitionContext,
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

export class FunctionDefinition extends BaseNode {
  type = 'FunctionDefinition';
  name: Identifier | null = null;
  functionKind: FunctionKind = 'function';
  override: OverrideSpecifier | null = null;
  virtual: boolean = false;
  visibility: Visibility;
  stateMutability: StateMutability;
  modifiers: ModifierInvocation[] = [];
  parameters: ParameterList[] = [];
  returnParameters: ParameterList[] = [];
  body: Block | null = null;

  public constructor(
    ctx:
      | FunctionDefinitionContext
      | ConstructorDefinitionContext
      | FallbackFunctionDefinitionContext
      | ReceiveFunctionDefinitionContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);
    this.visibility = new Visibility(ctx as any, visitor);
    this.stateMutability = new StateMutability(ctx as any, visitor);
    this.modifiers = ctx.modifierInvocation().map((modifier) => modifier.accept(visitor));
    this.body = ctx.block()?.accept(visitor) ?? null;

    if (ctx instanceof ConstructorDefinitionContext) {
      this.functionKind = 'constructor';
      this.visibility.visibility = this.visibility.getVisibility(ctx as any);
      this.stateMutability.stateMutability = this.stateMutability.getStateMutability(ctx as any);
      this.parameters = ctx.parameterList()?.accept(visitor) ?? [];
    } else {
      this.virtual = !!ctx.Virtual().length;
      const overrideSpecifier = ctx.overrideSpecifier(0) as OverrideSpecifierContext | null;
      this.override = overrideSpecifier ? overrideSpecifier.accept(visitor) : null;

      if (ctx instanceof FallbackFunctionDefinitionContext) {
        this.functionKind = 'fallback';
        this.visibility.visibility = this.visibility.getVisibility(ctx as any);
        this.stateMutability = ctx.stateMutability(0)?.accept(visitor) ?? this.stateMutability;
        this.parameters = ctx.parameterList(0)?.accept(visitor) ?? [];
        this.returnParameters = ctx.parameterList(1)?.accept(visitor) ?? [];
      } else if (ctx instanceof ReceiveFunctionDefinitionContext) {
        this.functionKind = 'receive';
        this.visibility.visibility = this.visibility.getVisibility(ctx as any);
        this.stateMutability.stateMutability = this.stateMutability.getStateMutability(ctx as any);
      } else {
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
