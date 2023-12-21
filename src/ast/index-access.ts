import { BaseNode } from './base';
import { IndexAccessContext, SolidityParserVisitor } from '../grammar';

export class IndexAccess extends BaseNode {
  type = 'IndexAccess';
  public constructor(ctx: IndexAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
