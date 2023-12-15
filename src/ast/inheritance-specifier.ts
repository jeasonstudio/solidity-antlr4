import { BaseNode } from './base';
import { InheritanceSpecifierContext, SolidityParserVisitor } from '../grammar';

export class InheritanceSpecifier extends BaseNode {
  public type = 'InheritanceSpecifier';
  public constructor(ctx: InheritanceSpecifierContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
