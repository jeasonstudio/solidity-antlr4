import { BaseNodeUnion } from './base';
import { LiteralContext, SolidityParserVisitor } from '../grammar';

export class Literal extends BaseNodeUnion {
  // public type = 'Literal';
  public constructor(ctx: LiteralContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [
        ctx.stringLiteral(),
        ctx.numberLiteral(),
        ctx.booleanLiteral(),
        ctx.hexStringLiteral(),
        ctx.unicodeStringLiteral(),
      ],
      visitor,
    );
  }
}
