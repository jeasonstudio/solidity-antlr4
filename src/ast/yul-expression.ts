import { BaseNodeUnion } from './base';
import { YulExpressionContext, SolidityParserVisitor } from '../grammar';
import { YulFunctionCall } from './yul-function-call';
import { YulPath } from './yul-path';
import { YulLiteral } from './yul-literal';

export class YulExpression extends BaseNodeUnion<YulFunctionCall | YulPath | YulLiteral> {
  // public type = 'YulExpression';
  public constructor(ctx: YulExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.yulPath(), ctx.yulFunctionCall(), ctx.yulLiteral()], visitor);
  }
}
