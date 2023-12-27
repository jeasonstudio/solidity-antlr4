import { BaseNode } from '../base';
import { ExpressionStatementContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';

export class ExpressionStatement extends BaseNode {
  type = 'ExpressionStatement';
  expression: Expression;
  constructor(ctx: ExpressionStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
  }
}
