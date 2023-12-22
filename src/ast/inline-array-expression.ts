import { BaseNodeList } from './base';
import { InlineArrayExpressionContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class InlineArrayExpression extends BaseNodeList<Expression> {
  type = 'InlineArrayExpression';
  constructor(ctx: InlineArrayExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.expression(), visitor);
  }
}
