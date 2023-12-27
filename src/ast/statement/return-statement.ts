import { BaseNode } from '../base';
import { ReturnStatementContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';

export class ReturnStatement extends BaseNode {
  type = 'ReturnStatement' as const;
  expression: Expression | null = null;
  constructor(ctx: ReturnStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}
