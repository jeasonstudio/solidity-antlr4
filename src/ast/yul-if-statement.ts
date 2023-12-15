import { BaseNode } from './base';
import { YulIfStatementContext, SolidityParserVisitor } from '../grammar';

export class YulIfStatement extends BaseNode {
  public type = 'YulIfStatement';
  public constructor(ctx: YulIfStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
