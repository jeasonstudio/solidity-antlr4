import { BaseNode } from '../base';
import { ImportAliasesContext, SolidityParserVisitor } from '../../grammar';
import { Identifier } from '../expression';

export class ImportAliases extends BaseNode {
  type = 'ImportAliases';
  foreign: Identifier;
  local: Identifier | null = null;
  constructor(ctx: ImportAliasesContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.foreign = ctx.identifier(0)!.accept(visitor);
    if (!!ctx.As()) {
      this.local = ctx.identifier(1)?.accept(visitor) ?? null;
    }
  }
}
