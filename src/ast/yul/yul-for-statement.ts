import { BaseNode } from '../base';
import { YulForStatementContext, SolidityParserVisitor } from '../../grammar';
import { YulExpression } from './yul-expression';
import { YulBlock } from './yul-block';

export class YulForStatement extends BaseNode {
  type = 'YulForStatement';
  initializationBlock: YulBlock | null = null;
  conditionExpression: YulExpression | null = null;
  loopBlock: YulBlock | null = null;
  body: YulBlock | null = null;
  constructor(ctx: YulForStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.initializationBlock = ctx._init?.accept(visitor) ?? null;
    this.conditionExpression = ctx._cond?.accept(visitor) ?? null;
    this.loopBlock = ctx._post?.accept(visitor) ?? null;
    this.body = ctx._body?.accept(visitor) ?? null;
  }
}
