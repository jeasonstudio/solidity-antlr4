import { FunctionCallOptionsContext, SolidityParserVisitor } from '../../antlr4';
import { BaseNode } from '../base';
import { Expression } from './expression';
import { NamedArgument } from './named-argument';

export class FunctionCallOptions extends BaseNode {
  type = 'FunctionCallOptions' as const;
  expression: Expression;
  namedArguments: NamedArgument[] = [];
  constructor(ctx: FunctionCallOptionsContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.namedArguments = ctx.namedArgument().map((arg) => arg.accept(visitor));
  }
}
