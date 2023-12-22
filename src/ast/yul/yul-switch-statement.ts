import { BaseNode } from '../base';
import { YulSwitchStatementContext, SolidityParserVisitor } from '../../grammar';
import { YulExpression } from './yul-expression';
import { YulSwitchCase } from './yul-switch-case';
import { YulBlock } from './yul-block';

export class YulSwitchStatement extends BaseNode {
  type = 'YulSwitchStatement';
  expression: YulExpression;
  switchCases: YulSwitchCase[];
  default: boolean;
  body: YulBlock | null = null;
  constructor(ctx: YulSwitchStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.yulExpression().accept(visitor);
    this.switchCases = ctx.yulSwitchCase().map((sc) => sc.accept(visitor));
    this.default = !!ctx.YulDefault();
    this.body = ctx.yulBlock()?.accept(visitor) ?? null;
  }
}
