import { BaseNodeString } from '../base';
import { IdentifierContext, SolidityParserVisitor } from '../../antlr4';

export class Identifier extends BaseNodeString {
  type = 'Identifier' as const;
  constructor(ctx: IdentifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
