import { BaseNode } from '../base';
import { NamedArgumentContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from './identifier';
import { Expression } from './expression';

export class NamedArgument extends BaseNode {
  type = 'NamedArgument' as const;
  name: Identifier;
  expression: Expression;
  constructor(ctx: NamedArgumentContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.expression = ctx.expression().accept(visitor);
  }
}
