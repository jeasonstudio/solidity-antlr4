import { BaseNode } from '../base';
import { YulSwitchCaseContext, SolidityParserVisitor } from '../../antlr4';
import { YulLiteral } from './yul-literal';
import { YulBlock } from './yul-block';

export class YulSwitchCase extends BaseNode {
  type = 'YulSwitchCase' as const;
  case: YulLiteral;
  body: YulBlock;
  constructor(ctx: YulSwitchCaseContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.case = ctx.yulLiteral().accept(visitor);
    this.body = ctx.yulBlock().accept(visitor);
  }
}
