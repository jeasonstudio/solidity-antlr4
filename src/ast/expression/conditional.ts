import { ConditionalContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';

export class Conditional extends Expression {
  type = 'Conditional' as const;
  condition: Expression;
  trueExpression: Expression;
  falseExpression: Expression;
  constructor(ctx: ConditionalContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.condition = ctx.expression(0)!.accept(visitor);
    this.trueExpression = ctx.expression(1)!.accept(visitor);
    this.falseExpression = ctx.expression(2)!.accept(visitor);
  }
}
