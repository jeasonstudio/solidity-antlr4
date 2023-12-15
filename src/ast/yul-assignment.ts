import { BaseNode } from './base';
import { YulAssignmentContext, SolidityParserVisitor } from '../grammar';

export class YulAssignment extends BaseNode {
  public type = 'YulAssignment';
  public constructor(ctx: YulAssignmentContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
