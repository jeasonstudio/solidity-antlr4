import { ExpressionContext, SolidityParserVisitor } from '../../grammar';
import { Expression } from './expression';

export class BinaryOperation<T extends ExpressionContext = ExpressionContext> extends Expression {
  type = 'BinaryOperation';
  operator: string | null = null;
  left: Expression | null = null;
  right: Expression | null = null;
  constructor(ctx: T, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.left = ctx.getChild(0)?.accept(visitor) ?? null;
    this.operator = ctx.getChild(1)?.getText() ?? null;
    this.right = ctx.getChild(2)?.accept(visitor) ?? null;
  }
}

export {
  BinaryOperation as AndOperation,
  BinaryOperation as AddSubOperation,
  BinaryOperation as BitAndOperation,
  BinaryOperation as BitOrOperation,
  BinaryOperation as BitXorOperation,
  BinaryOperation as EqualityComparison,
  BinaryOperation as ExpOperation,
  BinaryOperation as MulDivModOperation,
  BinaryOperation as ShiftOperation,
  BinaryOperation as OrderComparison,
  BinaryOperation as OrOperation,
};
