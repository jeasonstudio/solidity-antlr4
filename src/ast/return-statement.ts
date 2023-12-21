import { BaseNode } from './base';
import { ReturnStatementContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class ReturnStatement extends BaseNode {
  type = 'ReturnStatement';
  expression: Expression | null = null;
  public constructor(ctx: ReturnStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}
