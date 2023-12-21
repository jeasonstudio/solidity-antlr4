import { PayableConversionContext, SolidityParserVisitor } from '../grammar';
import { CallArgumentList } from './call-argument-list';
import { Expression } from './expression';

export class PayableConversion extends Expression {
  type = 'PayableConversion';
  arguments: CallArgumentList | null = null;
  public constructor(ctx: PayableConversionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.arguments = ctx.callArgumentList().accept(visitor);
  }
}