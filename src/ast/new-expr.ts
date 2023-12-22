import { NewExprContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';
import { Expression } from './expression';

export class NewExpr extends Expression {
  type = 'NewExpr';
  typeName: TypeName;
  constructor(ctx: NewExprContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
