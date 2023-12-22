import {
  UnaryPrefixOperationContext,
  SolidityParserVisitor,
  UnarySuffixOperationContext,
} from '../grammar';
import { Expression } from './expression';

export class UnaryOperation extends Expression {
  type = 'UnaryOperation';
  operator: string | null = null;
  left: Expression | null = null;
  right: Expression | null = null;
  constructor(
    ctx: UnaryPrefixOperationContext | UnarySuffixOperationContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);

    if (ctx instanceof UnaryPrefixOperationContext) {
      this.operator = ctx.getChild(0)?.getText() ?? null;
      this.right = ctx.getChild(1)?.accept(visitor) ?? null;
    } else if (ctx instanceof UnarySuffixOperationContext) {
      this.left = ctx.getChild(0)?.accept(visitor) ?? null;
      this.operator = ctx.getChild(1)?.getText() ?? null;
    }
  }
}

export { UnaryOperation as UnaryPrefixOperation };
