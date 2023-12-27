import { BaseNode } from '../base';
import { IfStatementContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';
import { Statement } from './statement';

export class IfStatement extends BaseNode {
  type = 'IfStatement' as const;
  condition: Expression;
  ifStatement: Statement;
  elseStatement: Statement | null = null;
  constructor(ctx: IfStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.condition = ctx.expression().accept(visitor);
    this.ifStatement = ctx.statement(0)!.accept(visitor);
    if (ctx.Else() && ctx.statement(1)) {
      this.elseStatement = ctx.statement(1)!.accept(visitor);
    }
  }
}
