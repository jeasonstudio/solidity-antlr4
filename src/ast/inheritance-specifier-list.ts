import { BaseNode } from './base';
import { InheritanceSpecifierListContext, SolidityParserVisitor } from '../grammar';

export class InheritanceSpecifierList extends BaseNode {
  public type = 'InheritanceSpecifierList';
  public constructor(ctx: InheritanceSpecifierListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
