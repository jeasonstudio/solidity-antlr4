import { BaseNodeUnion } from '../base';
import { InlineArrayContext, SolidityParserVisitor } from '../../antlr4';
import { InlineArrayExpression } from './inline-array-expression';

export class InlineArray extends BaseNodeUnion<InlineArrayExpression> {
  // type = 'InlineArray';
  constructor(ctx: InlineArrayContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.inlineArrayExpression()], visitor);
  }
}
