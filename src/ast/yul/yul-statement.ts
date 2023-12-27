import { BaseNodeString } from '../base';
import { YulStatementContext, SolidityParserVisitor } from '../../antlr4';

export class YulStatement extends BaseNodeString {
  type = 'YulStatement' as const;
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
      return target.accept(visitor);
    }

    if (ctx.YulBreak() || ctx.YulContinue() || ctx.YulLeave()) {
      this.type = 'YulStatement' as const;
      this.name = ctx.getText();
    }
  }
}
