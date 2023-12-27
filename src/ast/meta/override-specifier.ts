import { BaseNodeList } from '../base';
import { OverrideSpecifierContext, SolidityParserVisitor } from '../../antlr4';
import { IdentifierPath } from './identifier-path';

export class OverrideSpecifier extends BaseNodeList<IdentifierPath> {
  type = 'OverrideSpecifier' as const;
  constructor(ctx: OverrideSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.identifierPath(), visitor);
  }
}
