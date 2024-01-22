import { BaseNodeList } from '../base';
import { CallArgumentListContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';
import { NamedArgument } from './named-argument';

export type CallArgumentList = (Expression | NamedArgument)[];

export const CallArgumentList = class extends BaseNodeList<Expression | NamedArgument> {
  type = 'CallArgumentList' as const;
  constructor(ctx: CallArgumentListContext, visitor: SolidityParserVisitor<any>) {
    const args = ctx.namedArgument().length ? ctx.namedArgument() : ctx.expression();
    super(args, visitor);
  }
};
