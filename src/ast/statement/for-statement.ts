import { BaseNode } from '../base';
import { ForStatementContext, SolidityParserVisitor } from '../../grammar';
import { Expression } from '../expression';
import { ExpressionStatement } from './expression-statement';
import { Statement } from './statement';
import { SimpleStatement } from './simple-statement';

export class ForStatement extends BaseNode {
  type = 'ForStatement';
  initializationExpression: SimpleStatement | null = null;
  conditionExpression: ExpressionStatement | null = null;
  loopExpression: Expression | null = null;
  body: Statement;
  constructor(ctx: ForStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.initializationExpression = ctx.simpleStatement()?.accept(visitor) ?? null;
    this.conditionExpression = ctx.expressionStatement()?.accept(visitor) ?? null;
    this.loopExpression = ctx.expression()?.accept(visitor) ?? null;
    this.body = ctx.statement().accept(visitor);
  }
}