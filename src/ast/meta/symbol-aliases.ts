import { BaseNodeList } from '../base';
import { SymbolAliasesContext, SolidityParserVisitor } from '../../antlr4';
import { ImportAliases } from './import-aliases';

export type SymbolAliases = ImportAliases[];

export const SymbolAliases = class extends BaseNodeList<ImportAliases> {
  type = 'SymbolAliases' as const;
  constructor(ctx: SymbolAliasesContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.importAliases(), visitor);
  }
};
