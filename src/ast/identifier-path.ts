import { BaseNodeString } from './base';
import { IdentifierPathContext, SolidityParserVisitor } from '../grammar';

export class IdentifierPath extends BaseNodeString {
  type = 'IdentifierPath';
  name: string;
  public constructor(ctx: IdentifierPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.getText(), visitor);
  }
}
