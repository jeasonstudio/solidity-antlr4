import { BaseNodeUnion } from '../base';
import { PrimaryExpressionContext, SolidityParserVisitor } from '../../grammar';
import { LiteralWithSubDenomination } from './number-literal';
import { Literal } from './literal';
import { ElementaryTypeName } from '../type';
import { Identifier } from './identifier';

export class PrimaryExpression extends BaseNodeUnion<
  LiteralWithSubDenomination | Literal | ElementaryTypeName | Identifier
> {
  // type = 'PrimaryExpression';
  constructor(ctx: PrimaryExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [ctx.literalWithSubDenomination(), ctx.literal(), ctx.elementaryTypeName(), ctx.identifier()],
      visitor,
    );
  }
}
