import { BaseNodeList } from '../base';
import { TupleExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';

export class TupleExpression extends BaseNodeList<Expression> {
  type = 'TupleExpression';
  constructor(ctx: TupleExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.expression(), visitor);
  }
}
