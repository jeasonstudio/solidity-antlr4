import { BaseNode } from './base';
import { ImportDirectiveContext, PathContext, SolidityParserVisitor } from '../grammar';
import { SymbolAliases } from './symbol-aliases';
import { Identifier } from './identifier';

export class ImportDirective extends BaseNode {
  type = 'ImportDirective';
  path: PathContext;
  unitAlias: Identifier | null = null;
  symbolAliases: SymbolAliases[] = [];
  public constructor(ctx: ImportDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.path = ctx.path()!.accept(visitor);
    if (!!ctx.As() && ctx.identifier()) {
      this.unitAlias = ctx.identifier()!.accept(visitor);
    }
    this.symbolAliases = ctx.symbolAliases()?.accept(visitor) || [];
  }
}
