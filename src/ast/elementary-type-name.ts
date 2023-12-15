import { BaseNode } from './base';
import { ElementaryTypeNameContext, SolidityParserVisitor } from '../grammar';

export class ElementaryTypeName extends BaseNode {
  type = 'ElementaryTypeName';
  name: string;
  public constructor(ctx: ElementaryTypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
    // TODO
  }
}
