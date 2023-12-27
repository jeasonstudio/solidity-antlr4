import { BaseNodeList } from '../base';
import { InheritanceSpecifierListContext, SolidityParserVisitor } from '../../antlr4';
import { InheritanceSpecifier } from './inheritance-specifier';

export class InheritanceSpecifierList extends BaseNodeList<InheritanceSpecifier> {
  type = 'InheritanceSpecifierList' as const;
  constructor(ctx: InheritanceSpecifierListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.inheritanceSpecifier(), visitor);
  }
}
