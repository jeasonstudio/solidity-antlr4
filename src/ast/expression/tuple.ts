import { BaseNodeUnion } from '../base';
import { TupleContext, SolidityParserVisitor } from '../../antlr4';
import { TupleExpression } from './tuple-expression';

// @ts-expect-error
export type Tuple = TupleExpression;

// @ts-expect-error
export class Tuple extends BaseNodeUnion<TupleExpression> {
  // type = 'Tuple' as const;
  constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.tupleExpression()], visitor);
  }
}
