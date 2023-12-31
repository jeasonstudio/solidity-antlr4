import { IndexRangeAccessContext, SolidityParserVisitor } from '../../antlr4';
import { BaseNode } from '../base';
import { Expression } from './expression';

export class IndexRangeAccess extends BaseNode {
  type = 'IndexRangeAccess' as const;
  baseExpression: Expression;
  startExpression: Expression | null = null;
  endExpression: Expression | null = null;
  constructor(ctx: IndexRangeAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.baseExpression = ctx.expression(0)!.accept(visitor);
    this.startExpression = ctx._startIndex?.accept(visitor) ?? null;
    this.endExpression = ctx._endIndex?.accept(visitor) ?? null;
  }
}
