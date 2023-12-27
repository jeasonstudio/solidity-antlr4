import { PayableConversionContext, SolidityParserVisitor } from '../../antlr4';
import { CallArgumentList } from './call-argument-list';
import { Expression } from './expression';

export class PayableConversion extends Expression {
  type = 'PayableConversion';
  arguments: CallArgumentList | null = null;
  constructor(ctx: PayableConversionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.arguments = ctx.callArgumentList().accept(visitor);
  }
}
