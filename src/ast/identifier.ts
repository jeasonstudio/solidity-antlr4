import { BaseNode } from './base';
import { IdentifierContext, SolidityParserVisitor } from '../grammar';

export class Identifier extends BaseNode {
  public type = 'Identifier';
  public constructor(ctx: IdentifierContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
