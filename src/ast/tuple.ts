import { BaseNodeUnion } from './base';
import { TupleContext, SolidityParserVisitor } from '../grammar';

export class Tuple extends BaseNodeUnion {
  type = 'Tuple';
  public constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.tupleExpression()], visitor);
  }
}
