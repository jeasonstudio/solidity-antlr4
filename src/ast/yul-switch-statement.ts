import { BaseNode } from './base';
import { YulSwitchStatementContext, SolidityParserVisitor } from '../grammar';

export class YulSwitchStatement extends BaseNode {
  public type = 'YulSwitchStatement';
  public constructor(ctx: YulSwitchStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
