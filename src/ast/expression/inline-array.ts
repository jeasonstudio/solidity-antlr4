import { BaseNode } from '../base';
import { InlineArrayContext, SolidityParserVisitor } from '../../antlr4';
import { InlineArrayExpression } from './inline-array-expression';

export class InlineArray extends BaseNode {
  type = 'InlineArray' as const;
  expressions: InlineArrayExpression = [];
  constructor(ctx: InlineArrayContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expressions = ctx.inlineArrayExpression().accept(visitor);
  }
}
