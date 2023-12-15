import { BaseNode } from './base';
import { VariableDeclarationListContext, SolidityParserVisitor } from '../grammar';

export class VariableDeclarationList extends BaseNode {
  public type = 'VariableDeclarationList';
  public constructor(ctx: VariableDeclarationListContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
