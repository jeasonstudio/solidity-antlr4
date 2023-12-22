import { BaseNodeUnion } from '../base';
import { TupleContext, SolidityParserVisitor } from '../../grammar';
import { TupleExpression } from './tuple-expression';

export class Tuple extends BaseNodeUnion<TupleExpression> {
  type = 'Tuple';
  constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.tupleExpression()], visitor);
  }
}
