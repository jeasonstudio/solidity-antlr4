import { BaseNode } from '../base';
import { YulAssignmentContext, SolidityParserVisitor } from '../../antlr4';
import { YulPath } from './yul-path';
import { YulExpression } from './yul-expression';
import { YulFunctionCall } from './yul-function-call';

export class YulAssignment extends BaseNode {
  type = 'YulAssignment' as const;
  paths: YulPath[] = [];
  expression: YulExpression | YulFunctionCall;
  constructor(ctx: YulAssignmentContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.paths = ctx.yulPath()?.map((p) => p.accept(visitor)) ?? [];
    this.expression = (ctx.yulFunctionCall() || ctx.yulExpression())!.accept(visitor);
  }
}
