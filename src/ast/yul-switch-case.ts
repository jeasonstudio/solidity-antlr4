import { BaseNode } from './base';
import { YulSwitchCaseContext, SolidityParserVisitor } from '../grammar';

export class YulSwitchCase extends BaseNode {
  public type = 'YulSwitchCase';
  public constructor(ctx: YulSwitchCaseContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
