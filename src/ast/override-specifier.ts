import { BaseNode } from './base';
import { OverrideSpecifierContext, SolidityParserVisitor } from '../grammar';

export class OverrideSpecifier extends BaseNode {
  public type = 'OverrideSpecifier';
  public constructor(ctx: OverrideSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
