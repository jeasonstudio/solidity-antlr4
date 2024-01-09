import { PayableConversionContext, SolidityParserVisitor } from '../../antlr4';
import { BaseNode } from '../base';
import { CallArgumentList } from './call-argument-list';

export class PayableConversion extends BaseNode {
  type = 'PayableConversion' as const;
  arguments: CallArgumentList | null = null;
  constructor(ctx: PayableConversionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.arguments = ctx.callArgumentList().accept(visitor);
  }
}
