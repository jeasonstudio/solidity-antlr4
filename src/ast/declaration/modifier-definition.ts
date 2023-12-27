import { BaseNode } from '../base';
import { ModifierDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';
import { OverrideSpecifier, ParameterList } from '../meta';
import { Block } from '../statement';

export class ModifierDefinition extends BaseNode {
  type = 'ModifierDefinition';
  name: Identifier;
  parameters: ParameterList | null = null;
  virtual: boolean = false;
  override: OverrideSpecifier | null = null;
  body: Block | null = null;
  constructor(ctx: ModifierDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.parameters = ctx.parameterList()?.accept(visitor) ?? null;
    this.virtual = !!ctx.Virtual().length;
    this.override = ctx.overrideSpecifier(0)?.accept(visitor) ?? null;
    this.body = ctx.block()?.accept(visitor) ?? null;
  }
}
