import { BaseNodeList } from '../base';
import { InlineArrayExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';

export class InlineArrayExpression extends BaseNodeList<Expression> {
  type = 'InlineArrayExpression';
  constructor(ctx: InlineArrayExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.expression(), visitor);
  }
}
