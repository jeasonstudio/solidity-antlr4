import { BaseNode } from '../base';
import { ImportDirectiveContext, PathContext, SolidityParserVisitor } from '../../antlr4';
import { SymbolAliases } from './symbol-aliases';
import { Identifier } from '../expression';

export class ImportDirective extends BaseNode {
  type = 'ImportDirective' as const;
  path: PathContext;
  unitAlias: Identifier | null = null;
  symbolAliases: SymbolAliases[] = [];
  constructor(ctx: ImportDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.path = ctx.path()!.accept(visitor);
    if (!!ctx.As() && ctx.identifier()) {
      this.unitAlias = ctx.identifier()!.accept(visitor);
    }
    this.symbolAliases = ctx.symbolAliases()?.accept(visitor) || [];
  }
}
