import { BaseNode, EtherUnit, TimeUnit } from './base';
import {
  LiteralWithSubDenominationContext,
  NumberLiteralContext,
  SolidityParserVisitor,
} from '../grammar';

export class NumberLiteral extends BaseNode {
  type = 'NumberLiteral';
  value: string | null = null;
  hexValue: string | null = null;
  subDenomination: EtherUnit | TimeUnit | null = null;
  public constructor(
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
