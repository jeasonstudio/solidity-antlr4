import { BaseNode } from './base';
import { StateVariableDeclarationContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class StateVariableDeclaration extends BaseNode {
  type = 'StateVariableDeclaration';
  expression: Expression | null = null;
  public constructor(ctx: StateVariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}
