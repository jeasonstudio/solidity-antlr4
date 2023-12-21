import { BaseNode } from './base';
import { IndexRangeAccessContext, SolidityParserVisitor } from '../grammar';

export class IndexRangeAccess extends BaseNode {
  type = 'IndexRangeAccess';
  public constructor(ctx: IndexRangeAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
