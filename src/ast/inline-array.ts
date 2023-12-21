import { BaseNodeUnion } from './base';
import { InlineArrayContext, SolidityParserVisitor } from '../grammar';

export class InlineArray extends BaseNodeUnion {
  // type = 'InlineArray';
  public constructor(ctx: InlineArrayContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.inlineArrayExpression()], visitor);
  }
}