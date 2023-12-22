import { BaseNodeString } from '../base';
import { ElementaryTypeNameContext, SolidityParserVisitor } from '../../grammar';

export class ElementaryTypeName extends BaseNodeString {
  type = 'ElementaryTypeName';
  constructor(ctx: ElementaryTypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
