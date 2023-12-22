import { BaseNodeUnion } from './base';
import { TupleContext, SolidityParserVisitor } from '../grammar';

export class Tuple extends BaseNodeUnion {
  type = 'Tuple';
  constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.tupleExpression()], visitor);
  }
}
