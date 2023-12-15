import { BaseNode } from './base';
import { InheritanceSpecifierContext, SolidityParserVisitor } from '../grammar';
import { IdentifierPath } from './identifier-path';
import { Expression } from './expression';

export class InheritanceSpecifier extends BaseNode {
  type = 'InheritanceSpecifier';
  baseName: IdentifierPath;
  arguments: Expression[] = [];
  public constructor(ctx: InheritanceSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.baseName = ctx.identifierPath().accept(visitor);
    this.arguments = this.visitContextList(ctx.callArgumentList()?.children);
  }
}
