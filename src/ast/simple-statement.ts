import { BaseNodeUnion } from './base';
import { SimpleStatementContext, SolidityParserVisitor } from '../grammar';
import { VariableDeclarationStatement } from './variable-declaration-statement';
import { ExpressionStatement } from './expression-statement';

export class SimpleStatement extends BaseNodeUnion<
  VariableDeclarationStatement | ExpressionStatement
> {
  // public type = 'SimpleStatement';
  public constructor(ctx: SimpleStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.variableDeclarationStatement(), ctx.expressionStatement()], visitor);
  }
}
