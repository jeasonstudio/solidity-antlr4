import { BaseNode } from '../base';
import { YulBlockContext, SolidityParserVisitor } from '../../antlr4';
import { YulStatement } from './yul-statement';

export class YulBlock extends BaseNode {
  type = 'YulBlock' as const;
  statements: YulStatement[] = [];
  constructor(ctx: YulBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.statements = ctx.yulStatement().map((s) => s.accept(visitor));
  }
}
