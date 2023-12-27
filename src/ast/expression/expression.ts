import { BaseNode } from '../base';
import { ExpressionContext, SolidityParserVisitor } from '../../antlr4';

export class Expression extends BaseNode {
  type = 'Expression' as const;
  constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
