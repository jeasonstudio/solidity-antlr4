import { BaseNodeUnion } from './base';
import { PrimaryExpressionContext, SolidityParserVisitor } from '../grammar';

export class PrimaryExpression extends BaseNodeUnion {
  // type = 'PrimaryExpression';
  constructor(ctx: PrimaryExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [ctx.literalWithSubDenomination(), ctx.literal(), ctx.elementaryTypeName(), ctx.identifier()],
      visitor,
    );
  }
}
