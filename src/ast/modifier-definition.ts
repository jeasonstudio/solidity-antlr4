import { BaseNode } from './base';
import { ModifierDefinitionContext, SolidityParserVisitor } from '../grammar';
import { Identifier } from './identifier';
import { ParameterList } from './parameter-list';
import { OverrideSpecifier } from './override-specifier';
import { Block } from './block';

export class ModifierDefinition extends BaseNode {
  type = 'ModifierDefinition';
  name: Identifier;
  parameters: ParameterList | null = null;
  virtual: boolean = false;
  override: OverrideSpecifier | null = null;
  body: Block | null = null;
  public constructor(ctx: ModifierDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.parameters = ctx.parameterList()?.accept(visitor) ?? null;
    this.virtual = !!ctx.Virtual().length;
    this.override = ctx.overrideSpecifier(0)?.accept(visitor) ?? null;
    this.body = ctx.block()?.accept(visitor) ?? null;
  }
}
