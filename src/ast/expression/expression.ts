/* eslint-disable @typescript-eslint/no-redeclare */
import { BaseNodeUnion } from '../base';
import { ExpressionContext, SolidityParserVisitor } from '../../antlr4';
import {
  Assignment,
  BinaryOperation,
  Conditional,
  ExpressionNode,
  FunctionCall,
  FunctionCallOptions,
  Identifier,
  IndexAccess,
  IndexRangeAccess,
  MemberAccess,
  NewExpr,
  PayableConversion,
  UnaryOperation,
} from '.';

// @ts-expect-error
export type Expression = ExpressionNode;
// | Assignment
// | BinaryOperation
// | Conditional
// | FunctionCallOptions
// | FunctionCall
// | IndexAccess
// | IndexRangeAccess
// | MemberAccess
// | NewExpr
// | PayableConversion
// | UnaryOperation
// | Identifier;

// @ts-expect-error
export class Expression extends BaseNodeUnion {
  // type = 'Expression' as any;
  constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children, visitor);
  }
}
