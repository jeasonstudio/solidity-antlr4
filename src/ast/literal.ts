import { BaseNode } from './base';
import { LiteralContext, SolidityParserVisitor } from '../grammar';

export class Literal extends BaseNode {
  public type = 'Literal';
  public constructor(ctx: LiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);

    const targetCtx = [
      ctx.stringLiteral(),
      ctx.numberLiteral(),
      ctx.booleanLiteral(),
      ctx.hexStringLiteral(),
      ctx.unicodeStringLiteral(),
    ].find(Boolean);

    if (targetCtx) {
      Object.assign(this, targetCtx.accept(visitor));
    }
  }
}
