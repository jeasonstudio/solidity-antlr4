import { BaseNode } from './base';
import { PayableConversionContext, SolidityParserVisitor } from '../grammar';

export class PayableConversion extends BaseNode {
  type = 'PayableConversion';
  public constructor(ctx: PayableConversionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
