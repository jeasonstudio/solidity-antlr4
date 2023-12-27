import { FunctionCallContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';
import { CallArgumentList } from './call-argument-list';

export class FunctionCall extends Expression {
  type = 'FunctionCall';
  expression: Expression;
  arguments: CallArgumentList | null = null;
  constructor(ctx: FunctionCallContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.arguments = ctx.callArgumentList().accept(visitor);
  }
}
