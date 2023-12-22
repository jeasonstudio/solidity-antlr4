import { BaseNodeString } from '../base';
import { IdentifierContext, SolidityParserVisitor } from '../../grammar';

export class Identifier extends BaseNodeString {
  type = 'Identifier';
  constructor(ctx: IdentifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}