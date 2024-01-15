import { BaseNodeUnion } from '../base';
import { InlineArrayContext, SolidityParserVisitor } from '../../antlr4';
import { InlineArrayExpression } from './inline-array-expression';

// @ts-expect-error
export type InlineArray = InlineArrayExpression;

// @ts-expect-error
export class InlineArray extends BaseNodeUnion<InlineArrayExpression> {
  // type = 'InlineArray' as const;
  constructor(ctx: InlineArrayContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.inlineArrayExpression()], visitor);
  }
}
