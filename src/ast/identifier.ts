import { BaseNode } from './base';
import { IdentifierContext, SolidityParserVisitor } from '../grammar';

export class Identifier extends BaseNode {
  type = 'Identifier';
  name: string;
  public constructor(ctx: IdentifierContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
  }
  public toJSON = () => this.name;
}
