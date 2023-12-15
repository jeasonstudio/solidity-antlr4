import { BaseNode } from './base';
import { YulForStatementContext, SolidityParserVisitor } from '../grammar';

export class YulForStatement extends BaseNode {
  public type = 'YulForStatement';
  public constructor(ctx: YulForStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
