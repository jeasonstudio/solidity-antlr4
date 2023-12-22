import { BaseNode } from '../base';
import { WhileStatementContext, SolidityParserVisitor } from '../../grammar';
import { Statement } from './statement';
import { Expression } from '../expression';

export class WhileStatement extends BaseNode {
  type = 'WhileStatement';
  condition: Expression;
  body: Statement;
  constructor(ctx: WhileStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.condition = ctx.expression().accept(visitor);
    this.body = ctx.statement().accept(visitor);
  }
}
