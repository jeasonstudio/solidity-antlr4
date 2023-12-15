import { BaseNode } from './base';
import { YulExpressionContext, SolidityParserVisitor } from '../grammar';

export class YulExpression extends BaseNode {
  public type = 'YulExpression';
  public constructor(ctx: YulExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
