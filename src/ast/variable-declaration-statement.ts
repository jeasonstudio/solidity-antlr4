import { BaseNode } from './base';
import { VariableDeclarationStatementContext, SolidityParserVisitor } from '../grammar';
import { VariableDeclaration } from './variable-declaration';
import { Expression } from './expression';

export class VariableDeclarationStatement extends BaseNode {
  type = 'VariableDeclarationStatement';
  variables: VariableDeclaration[] = [];
  expression: Expression | null = null;

  public constructor(
    ctx: VariableDeclarationStatementContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);
    if (ctx.variableDeclaration()) {
      this.variables = [ctx.variableDeclaration()!.accept(visitor)];
    } else if (ctx.variableDeclarationTuple()) {
      this.variables = ctx.variableDeclarationTuple()!.accept(visitor);
    }
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}
