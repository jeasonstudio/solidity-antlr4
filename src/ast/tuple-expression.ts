import { BaseNode } from './base';
import { TupleExpressionContext, SolidityParserVisitor } from '../grammar';

export class TupleExpression extends BaseNode {
  public type = 'TupleExpression';
  public constructor(ctx: TupleExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
