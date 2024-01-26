import { BaseNode } from '../base';
import { TupleExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';

export class TupleExpression extends BaseNode {
  type = 'TupleExpression' as const;
  expressions: Expression[] = [];
  constructor(ctx: TupleExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expressions = ctx.expression().map((exp) => exp.accept(visitor));
  }
}
