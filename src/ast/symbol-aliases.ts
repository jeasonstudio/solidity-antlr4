import { BaseNode } from './base';
import { SymbolAliasesContext, SolidityParserVisitor } from '../grammar';

export class SymbolAliases extends BaseNode {
  public type = 'SymbolAliases';
  public constructor(ctx: SymbolAliasesContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
