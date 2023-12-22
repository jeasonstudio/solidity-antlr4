import { BaseNode } from './base';
import { UserDefinedValueTypeDefinitionContext, SolidityParserVisitor } from '../grammar';
import { ElementaryTypeName } from './elementary-type-name';

export class UserDefinedValueTypeDefinition extends BaseNode {
  type = 'UserDefinedValueTypeDefinition';
  name: string;
  typeName: ElementaryTypeName;
  constructor(
    ctx: UserDefinedValueTypeDefinitionContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);
    this.name = ctx.identifier().getText();
    this.typeName = ctx.elementaryTypeName().accept(visitor);
  }
}
