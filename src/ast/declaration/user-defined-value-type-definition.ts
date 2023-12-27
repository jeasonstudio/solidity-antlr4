import { BaseNode } from '../base';
import { UserDefinedValueTypeDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { ElementaryTypeName } from '../type';

export class UserDefinedValueTypeDefinition extends BaseNode {
  type = 'UserDefinedValueTypeDefinition';
  name: string;
  typeName: ElementaryTypeName;
  constructor(ctx: UserDefinedValueTypeDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().getText();
    this.typeName = ctx.elementaryTypeName().accept(visitor);
  }
}
