import { BaseNode } from '../base';
import { UserDefinedValueTypeDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { ElementaryTypeName } from '../type';
import { Identifier } from '../expression';

export class UserDefinedValueTypeDefinition extends BaseNode {
  type = 'UserDefinedValueTypeDefinition' as const;
  name: Identifier;
  typeName: ElementaryTypeName;
  constructor(ctx: UserDefinedValueTypeDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.typeName = ctx.elementaryTypeName().accept(visitor);
  }
}
