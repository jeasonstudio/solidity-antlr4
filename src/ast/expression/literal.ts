import { BaseNodeUnion } from '../base';
import { LiteralContext, SolidityParserVisitor } from '../../antlr4';
import { StringLiteral } from './string-literal';
import { NumberLiteral } from './number-literal';
import { BooleanLiteral } from './boolean-literal';
import { HexStringLiteral } from './hex-string-literal';
import { UnicodeStringLiteral } from './unicode-string-literal';

export type Literal =
  | StringLiteral
  | NumberLiteral
  | BooleanLiteral
  | HexStringLiteral
  | UnicodeStringLiteral;

export const Literal = class extends BaseNodeUnion<
  StringLiteral | NumberLiteral | BooleanLiteral | HexStringLiteral | UnicodeStringLiteral
> {
  // type = 'Literal' as const;
  constructor(ctx: LiteralContext, visitor: SolidityParserVisitor<any>) {
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
};
