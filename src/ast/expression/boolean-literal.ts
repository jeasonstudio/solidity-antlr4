import { BaseNode } from '../base';
import { BooleanLiteralContext, SolidityParserVisitor } from '../../antlr4';

export class BooleanLiteral extends BaseNode {
  type = 'BooleanLiteral' as const;
  value: boolean | null = null;
  constructor(ctx: BooleanLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.value = ctx.True() ? true : ctx.False() ? false : null;
  }
}
