import { BaseNode } from './base';
import { IndexRangeAccessContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class IndexRangeAccess extends Expression {
  type = 'IndexRangeAccess';
  baseExpression: Expression;
  startExpression: Expression | null = null;
  endExpression: Expression | null = null;
  public constructor(ctx: IndexRangeAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.baseExpression = ctx.expression(0)!.accept(visitor);
    this.startExpression = ctx._startIndex?.accept(visitor) ?? null;
    this.endExpression = ctx._endIndex?.accept(visitor) ?? null;
  }
}
