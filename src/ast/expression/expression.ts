/* eslint-disable @typescript-eslint/no-redeclare */
import { BaseNodeUnion } from '../base';
import { ExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { ExpressionNode } from './index';

export type Expression = ExpressionNode;

export const Expression = class extends BaseNodeUnion {
  // type = 'Expression' as any;
  constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children, visitor);
  }
};
