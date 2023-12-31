import { IndexAccessContext, SolidityParserVisitor } from '../../antlr4';
import { BaseNode } from '../base';
import { Expression } from './expression';

export class IndexAccess extends BaseNode {
  type = 'IndexAccess' as const;
  baseExpression: Expression;
  indexExpression: Expression | null = null;
  constructor(ctx: IndexAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.baseExpression = ctx.expression(0)!.accept(visitor);
    this.indexExpression = ctx._index?.accept(visitor) ?? null;
  }
}
