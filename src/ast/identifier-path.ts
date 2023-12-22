import { BaseNode } from './base';
import { IdentifierPathContext, SolidityParserVisitor } from '../grammar';
import { Identifier } from './identifier';

export class IdentifierPath extends BaseNode {
  type = 'IdentifierPath';
  name: string;
  identifiers: Identifier[];
  constructor(ctx: IdentifierPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
    this.identifiers = ctx.identifier().map((identifier) => identifier.accept(visitor));
  }
  toJSON = () => this.name;
}
