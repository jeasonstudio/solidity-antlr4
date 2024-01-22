import { BaseNodeList } from '../base';
import { InheritanceSpecifierListContext, SolidityParserVisitor } from '../../antlr4';
import { InheritanceSpecifier } from './inheritance-specifier';

export type InheritanceSpecifierList = InheritanceSpecifier[];

export const InheritanceSpecifierList = class extends BaseNodeList<InheritanceSpecifier> {
  type = 'InheritanceSpecifierList' as const;
  constructor(ctx: InheritanceSpecifierListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.inheritanceSpecifier(), visitor);
  }
};
