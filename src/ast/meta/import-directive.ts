import { BaseNode } from '../base';
import { ImportDirectiveContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';
import { Path } from './path';
import { ImportAliases } from './import-aliases';

export class ImportDirective extends BaseNode {
  type = 'ImportDirective' as const;
  path: Path;
  importAll: boolean = false; // import * as Foo from 'foo';
  unitAlias: Identifier | null = null;
  symbolAliases: ImportAliases[] = [];
  constructor(ctx: ImportDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.path = ctx.path()!.accept(visitor);
    if (!!ctx.As() && ctx.identifier()) {
      this.unitAlias = ctx.identifier()!.accept(visitor);
      this.importAll = !!ctx.Mul();
    }
    this.symbolAliases = ctx.symbolAliases()?.accept(visitor) || [];
  }
}
