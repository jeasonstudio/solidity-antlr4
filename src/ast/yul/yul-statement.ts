import { BaseNode } from '../base';
import { YulStatementContext, SolidityParserVisitor } from '../../antlr4';
import { YulBlock } from './yul-block';
import { YulVariableDeclaration } from './yul-variable-declaration';
import { YulAssignment } from './yul-assignment';
import { YulFunctionCall } from './yul-function-call';
import { YulIfStatement } from './yul-if-statement';
import { YulForStatement } from './yul-for-statement';
import { YulSwitchStatement } from './yul-switch-statement';
import { YulFunctionDefinition } from './yul-function-definition';

type YulExpressionStatement =
  | YulBlock
  | YulVariableDeclaration
  | YulAssignment
  | YulFunctionCall
  | YulIfStatement
  | YulForStatement
  | YulSwitchStatement
  | YulFunctionDefinition
  | 'break'
  | 'continue'
  | 'leave';

export class YulStatement extends BaseNode {
  type = 'YulStatement' as const;
  expression: YulExpressionStatement | null = null;
  constructor(ctx: YulStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);

    const target = [
      ctx.yulBlock(),
      ctx.yulVariableDeclaration(),
      ctx.yulAssignment(),
      ctx.yulFunctionCall(),
      ctx.yulIfStatement(),
      ctx.yulForStatement(),
      ctx.yulSwitchStatement(),
      ctx.yulFunctionDefinition(),
    ].find(Boolean);

    if (target) {
      this.expression = target.accept(visitor);
    } else if (ctx.YulBreak() || ctx.YulContinue() || ctx.YulLeave()) {
      this.expression = ctx.getText() as any;
    }
  }
}
