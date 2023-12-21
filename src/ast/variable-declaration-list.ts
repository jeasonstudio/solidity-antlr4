import { BaseNodeList } from './base';
import { VariableDeclarationListContext, SolidityParserVisitor } from '../grammar';
import { VariableDeclaration } from './variable-declaration';

export class VariableDeclarationList extends BaseNodeList<VariableDeclaration> {
  public type = 'VariableDeclarationList';
  public constructor(ctx: VariableDeclarationListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.variableDeclaration(), visitor);
  }
}
