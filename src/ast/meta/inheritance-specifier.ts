import { BaseNode } from '../base';
import { InheritanceSpecifierContext, SolidityParserVisitor } from '../../antlr4';
import { IdentifierPath } from './identifier-path';
import { CallArgumentList } from '../expression';

export class InheritanceSpecifier extends BaseNode {
  type = 'InheritanceSpecifier' as const;
  baseName: IdentifierPath;
  arguments: CallArgumentList | null = null;
  constructor(ctx: InheritanceSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.baseName = ctx.identifierPath().accept(visitor);
    this.arguments = ctx.callArgumentList()?.accept(visitor) ?? null;
  }
}
