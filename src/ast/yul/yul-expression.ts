import { BaseNodeUnion } from '../base';
import { YulExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { YulFunctionCall } from './yul-function-call';
import { YulPath } from './yul-path';
import { YulLiteral } from './yul-literal';

// @ts-expect-error
export type YulExpression = YulFunctionCall | YulPath | YulLiteral;

// @ts-expect-error
export class YulExpression extends BaseNodeUnion<YulFunctionCall | YulPath | YulLiteral> {
  // type = 'YulExpression' as const;
  constructor(ctx: YulExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.yulPath(), ctx.yulFunctionCall(), ctx.yulLiteral()], visitor);
  }
}
