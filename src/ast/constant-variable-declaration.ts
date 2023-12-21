import { BaseNode } from './base';
import { ConstantVariableDeclarationContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';
import { Identifier } from './identifier';
import { Expression } from './expression';

export class ConstantVariableDeclaration extends BaseNode {
  type = 'ConstantVariableDeclaration';
  name: Identifier;
  typeName: TypeName;
  expression: Expression;
  public constructor(ctx: ConstantVariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.typeName = ctx.typeName().accept(visitor);
    this.expression = ctx.expression().accept(visitor);
  }
}
