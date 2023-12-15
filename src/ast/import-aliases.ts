import { BaseNode } from './base';
import { ImportAliasesContext, SolidityParserVisitor } from '../grammar';

export class ImportAliases extends BaseNode {
  public type = 'ImportAliases';
  public constructor(ctx: ImportAliasesContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
