import { BaseNode } from '../base';
import { VariableDeclarationStatementContext, SolidityParserVisitor } from '../../antlr4';
import { VariableDeclaration, VariableDeclarationTuple } from '../declaration';
import { Expression } from '../expression';

export class VariableDeclarationStatement extends BaseNode {
  type = 'VariableDeclarationStatement' as const;
  variable: VariableDeclaration | null = null;
  variableTuple: VariableDeclarationTuple | null = null;
  expression: Expression | null = null;

  constructor(ctx: VariableDeclarationStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.variableTuple = ctx.variableDeclarationTuple()?.accept(visitor) ?? null;
    this.variable = ctx.variableDeclaration()?.accept(visitor) ?? null;
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}
