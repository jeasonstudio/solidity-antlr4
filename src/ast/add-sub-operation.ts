import { ExpressionContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class BinaryOperation<T extends ExpressionContext = ExpressionContext> extends Expression {
  type = 'BinaryOperation';
  operator: string | null = null;
  left: Expression | null = null;
  right: Expression | null = null;
  public constructor(ctx: T, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.left = ctx.getChild(0)?.accept(visitor) ?? null;
    this.operator = ctx.getChild(1)?.getText() ?? null;
    this.right = ctx.getChild(2)?.accept(visitor) ?? null;
  }
}

export { BinaryOperation as AddSubOperation };