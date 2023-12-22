import { BaseNodeString } from '../base';
import { IdentifierPathContext, SolidityParserVisitor } from '../../grammar';
import { Identifier } from '../expression';

export class IdentifierPath extends BaseNodeString {
  type = 'IdentifierPath';
  name: string;
  identifiers: Identifier[];
  constructor(ctx: IdentifierPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
    this.identifiers = ctx.identifier().map((identifier) => identifier.accept(visitor));
  }
}
