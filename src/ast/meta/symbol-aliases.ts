import { BaseNodeList } from '../base';
import { SymbolAliasesContext, SolidityParserVisitor } from '../../grammar';
import { ImportAliases } from './import-aliases';

export class SymbolAliases extends BaseNodeList<ImportAliases> {
  type = 'SymbolAliases';
  constructor(ctx: SymbolAliasesContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.importAliases(), visitor);
  }
}
