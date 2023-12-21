import { BaseNode } from './base';
import { ExpressionStatementContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class ExpressionStatement extends BaseNode {
  type = 'ExpressionStatement';
  expression: Expression;
  public constructor(ctx: ExpressionStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
  }
}
