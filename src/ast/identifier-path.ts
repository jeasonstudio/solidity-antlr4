import { BaseNode } from './base';
import { IdentifierPathContext, SolidityParserVisitor } from '../grammar';

export class IdentifierPath extends BaseNode {
  public type = 'IdentifierPath';
  public constructor(ctx: IdentifierPathContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
