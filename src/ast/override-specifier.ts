import { BaseNodeList } from './base';
import { OverrideSpecifierContext, SolidityParserVisitor } from '../grammar';
import { IdentifierPath } from './identifier-path';

export class OverrideSpecifier extends BaseNodeList<IdentifierPath> {
  public type = 'OverrideSpecifier';
  public constructor(ctx: OverrideSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.identifierPath(), visitor);
  }
}
