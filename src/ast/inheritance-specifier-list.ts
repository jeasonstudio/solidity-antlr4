import { BaseNodeList } from './base';
import { InheritanceSpecifierListContext, SolidityParserVisitor } from '../grammar';
import { InheritanceSpecifier } from './inheritance-specifier';

export class InheritanceSpecifierList extends BaseNodeList<InheritanceSpecifier> {
  type = 'InheritanceSpecifierList';
  constructor(ctx: InheritanceSpecifierListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.inheritanceSpecifier(), visitor);
  }
}
