import { BaseNode } from '../base';
import { DoWhileStatementContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';
import { Statement } from './statement';

export class DoWhileStatement extends BaseNode {
  type = 'DoWhileStatement' as const;
  condition: Expression;
  body: Statement;
  constructor(ctx: DoWhileStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.condition = ctx.expression().accept(visitor);
    this.body = ctx.statement().accept(visitor);
  }
}
