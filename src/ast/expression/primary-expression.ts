import { BaseNodeUnion } from '../base';
import { PrimaryExpressionContext, SolidityParserVisitor } from '../../antlr4';
import { LiteralWithSubDenomination } from './number-literal';
import { Literal } from './literal';
import { ElementaryTypeName } from '../type';
import { Identifier } from './identifier';

// @ts-expect-error
export type PrimaryExpression =
  | LiteralWithSubDenomination
  | Literal
  | ElementaryTypeName
  | Identifier;

// @ts-expect-error
export class PrimaryExpression extends BaseNodeUnion<
  LiteralWithSubDenomination | Literal | ElementaryTypeName | Identifier
> {
  // type = 'PrimaryExpression' as const;
  constructor(ctx: PrimaryExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [ctx.literalWithSubDenomination(), ctx.literal(), ctx.elementaryTypeName(), ctx.identifier()],
      visitor,
    );
  }
}
