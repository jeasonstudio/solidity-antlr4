import { NewExprContext, SolidityParserVisitor } from '../../antlr4';
import { BaseNode } from '../base';
import { TypeName } from '../type';

export class NewExpr extends BaseNode {
  type = 'NewExpr' as const;
  typeName: TypeName;
  constructor(ctx: NewExprContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
