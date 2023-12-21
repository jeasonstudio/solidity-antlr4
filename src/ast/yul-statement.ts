import { BaseNodeString } from './base';
import { YulStatementContext, SolidityParserVisitor } from '../grammar';

export class YulStatement extends BaseNodeString {
  // public type = 'YulStatement';
  public constructor(ctx: YulStatementContext, visitor: SolidityParserVisitor<any>) {
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
      return target.accept(visitor);
    }

    if (ctx.YulBreak() || ctx.YulContinue() || ctx.YulLeave()) {
      this.type = 'YulStatement';
      this.name = ctx.getText();
    }
  }
}
