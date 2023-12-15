import { BaseNode } from './base';
import { InlineArrayExpressionContext, SolidityParserVisitor } from '../grammar';

export class InlineArrayExpression extends BaseNode {
  public type = 'InlineArrayExpression';
  public constructor(ctx: InlineArrayExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
