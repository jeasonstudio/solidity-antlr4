import { BaseNode } from './base';
import { ElementaryTypeNameContext, SolidityParserVisitor } from '../grammar';

export class ElementaryTypeName extends BaseNode {
  public type = 'ElementaryTypeName';
  public constructor(ctx: ElementaryTypeNameContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
