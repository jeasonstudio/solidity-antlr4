import { BaseNode } from './base';
import { TryStatementContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';
import { ParameterList } from './parameter-list';
import { Block } from './block';
import { CatchClause } from './catch-clause';

export class TryStatement extends BaseNode {
  type = 'TryStatement';
  expression: Expression;
  returnParameters: ParameterList | null = null;
  body: Block;
  catchClauses: CatchClause[];
  constructor(ctx: TryStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.returnParameters = ctx.parameterList()?.accept(visitor) ?? null;
    this.body = ctx.block().accept(visitor);
    this.catchClauses = ctx.catchClause().map((x) => x.accept(visitor));
  }
}
