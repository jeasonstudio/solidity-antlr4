import { BaseNode } from './base';
import { NewExprContext, SolidityParserVisitor } from '../grammar';

export class NewExpr extends BaseNode {
  type = 'NewExpr';
  public constructor(ctx: NewExprContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
