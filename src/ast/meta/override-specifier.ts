import { BaseNodeList } from '../base';
import { OverrideSpecifierContext, SolidityParserVisitor } from '../../antlr4';
import { IdentifierPath } from './identifier-path';

export type OverrideSpecifier = IdentifierPath[];

export const OverrideSpecifier = class extends BaseNodeList<IdentifierPath> {
  type = 'OverrideSpecifier' as const;
  constructor(ctx: OverrideSpecifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.identifierPath(), visitor);
  }
};
