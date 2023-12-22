import { BaseNode } from '../base';
import { YulSwitchCaseContext, SolidityParserVisitor } from '../../grammar';
import { YulLiteral } from './yul-literal';
import { YulBlock } from './yul-block';

export class YulSwitchCase extends BaseNode {
  type = 'YulSwitchCase';
  case: YulLiteral;
  body: YulBlock;
  public constructor(ctx: YulSwitchCaseContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.case = ctx.yulLiteral().accept(visitor);
    this.body = ctx.yulBlock().accept(visitor);
  }
}
