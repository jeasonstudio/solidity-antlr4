import { BaseNode } from './base';
import { YulBlockContext, SolidityParserVisitor } from '../grammar';
import { YulStatement } from './yul-statement';

export class YulBlock extends BaseNode {
  type = 'YulBlock';
  statements: YulStatement[] = [];
  public constructor(ctx: YulBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.statements = ctx.yulStatement().map((s) => s.accept(visitor));
  }
}
