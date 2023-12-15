import { BaseNode } from './base';
import { VariableDeclarationStatementContext, SolidityParserVisitor } from '../grammar';

export class VariableDeclarationStatement extends BaseNode {
  public type = 'VariableDeclarationStatement';
  public constructor(ctx: VariableDeclarationStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
