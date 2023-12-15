import { BaseNode } from './base';
import { VariableDeclarationContext, SolidityParserVisitor } from '../grammar';

export class VariableDeclaration extends BaseNode {
  public type = 'VariableDeclaration';
  public constructor(ctx: VariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
