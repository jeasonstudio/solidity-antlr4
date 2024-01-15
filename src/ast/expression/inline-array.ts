import { BaseNodeUnion } from '../base';
import { InlineArrayContext, SolidityParserVisitor } from '../../antlr4';
import { InlineArrayExpression } from './inline-array-expression';

export type InlineArray = InlineArrayExpression;

export const InlineArray = class extends BaseNodeUnion<InlineArrayExpression> {
  // type = 'InlineArray' as const;
  constructor(ctx: InlineArrayContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.inlineArrayExpression()], visitor);
  }
};
