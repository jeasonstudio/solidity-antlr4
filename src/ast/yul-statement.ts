import { BaseNode } from './base';
import { YulStatementContext, SolidityParserVisitor } from '../grammar';

export class YulStatement extends BaseNode {
  public type = 'YulStatement';
  public constructor(ctx: YulStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
