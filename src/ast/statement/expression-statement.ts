import { BaseNodeUnion } from '../base';
import { ExpressionStatementContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';

export type ExpressionStatement = Expression;

export const ExpressionStatement = class extends BaseNodeUnion<Expression> {
  // type = 'ExpressionStatement' as const;
  constructor(ctx: ExpressionStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.expression()], visitor);
  }
};
