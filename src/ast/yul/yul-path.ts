import { BaseNodeString } from '../base';
import { YulPathContext, SolidityParserVisitor } from '../../grammar';

export class YulPath extends BaseNodeString {
  type = 'YulPath';
  constructor(ctx: YulPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
