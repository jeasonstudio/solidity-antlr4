import { BaseNodeUnion } from '../base';
import { TupleContext, SolidityParserVisitor } from '../../antlr4';
import { TupleExpression } from './tuple-expression';

export type Tuple = TupleExpression;

export const Tuple = class extends BaseNodeUnion<TupleExpression> {
  // type = 'Tuple' as const;
  constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.tupleExpression()], visitor);
  }
};
