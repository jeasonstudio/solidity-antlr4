import { BaseNode } from '../base';
import { CallArgumentListContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';
import { NamedArgument } from './named-argument';

export class CallArgumentList extends BaseNode {
  type = 'CallArgumentList' as const;
  namedArguments: NamedArgument[] = [];
  expressions: Expression[] = [];
  constructor(ctx: CallArgumentListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.namedArguments = ctx.namedArgument().map((namedArgument) => namedArgument.accept(visitor));
    this.expressions = ctx.expression().map((expression) => expression.accept(visitor));
  }
}
