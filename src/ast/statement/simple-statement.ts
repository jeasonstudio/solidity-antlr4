import { BaseNodeUnion } from '../base';
import { SimpleStatementContext, SolidityParserVisitor } from '../../antlr4';
import { VariableDeclarationStatement } from './variable-declaration-statement';
import { ExpressionStatement } from './expression-statement';

export class SimpleStatement extends BaseNodeUnion<
  VariableDeclarationStatement | ExpressionStatement
> {
  // type = 'SimpleStatement' as const;
  constructor(ctx: SimpleStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.variableDeclarationStatement(), ctx.expressionStatement()], visitor);
  }
}
