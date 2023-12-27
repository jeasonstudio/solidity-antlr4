import { FunctionCallOptionsContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';
import { NamedArgument } from './named-argument';

export class FunctionCallOptions extends Expression {
  type = 'FunctionCallOptions';
  expression: Expression;
  arguments: NamedArgument[] = [];
  constructor(ctx: FunctionCallOptionsContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.arguments = ctx.namedArgument().map((arg) => arg.accept(visitor));
  }
}
