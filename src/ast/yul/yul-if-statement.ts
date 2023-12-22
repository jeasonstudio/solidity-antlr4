import { BaseNode } from '../base';
import { YulIfStatementContext, SolidityParserVisitor } from '../../grammar';
import { YulExpression } from './yul-expression';
import { YulBlock } from './yul-block';

export class YulIfStatement extends BaseNode {
  type = 'YulIfStatement';
  condition: YulExpression | null = null;
  body: YulBlock | null = null;
  constructor(ctx: YulIfStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.condition = ctx._cond?.accept(visitor) ?? null;
    this.body = ctx._body?.accept(visitor) ?? null;
  }
}
