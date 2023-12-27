import { BaseNode } from '../base';
import {
  LiteralWithSubDenominationContext,
  NumberLiteralContext,
  SolidityParserVisitor,
} from '../../antlr4';

type EtherUnit = 'wei' | 'gwei' | 'szabo' | 'finney' | 'ether';
type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';

export class NumberLiteral extends BaseNode {
  type = 'NumberLiteral' as const;
  value: string | null = null;
  hexValue: string | null = null;
  subDenomination: EtherUnit | TimeUnit | null = null;
  constructor(
    ctx: NumberLiteralContext | LiteralWithSubDenominationContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);

    let target: NumberLiteralContext;

    if (ctx instanceof LiteralWithSubDenominationContext) {
      target = ctx.numberLiteral();
      this.subDenomination = (ctx.SubDenomination()?.getText() as any) ?? null;
    } else {
      target = ctx;
    }

    this.value = target.DecimalNumber()?.getText() ?? null;
    this.hexValue = target.HexNumber()?.getText() ?? null;
  }
}

export { NumberLiteral as LiteralWithSubDenomination };
