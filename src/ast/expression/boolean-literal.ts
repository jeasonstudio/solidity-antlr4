import { BaseNode } from '../base';
import { BooleanLiteralContext, SolidityParserVisitor } from '../../grammar';

export class BooleanLiteral extends BaseNode {
  type = 'BooleanLiteral';
  value: boolean | null = null;
  constructor(ctx: BooleanLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.value = ctx.True() ? true : ctx.False() ? false : null;
  }
}
