import { BaseNodeString } from '../base';
import { YulPathContext, SolidityParserVisitor } from '../../grammar';

export class YulPath extends BaseNodeString {
  type = 'YulPath';
  public constructor(ctx: YulPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
