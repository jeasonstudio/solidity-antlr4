/* eslint-disable @typescript-eslint/no-redeclare */
import { BaseNodeUnion } from '../base';
import { ExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { ExpressionNode } from './index';

// @ts-expect-error
export type Expression = ExpressionNode;

// @ts-expect-error
export class Expression extends BaseNodeUnion {
  // type = 'Expression' as any;
  constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children, visitor);
  }
}
