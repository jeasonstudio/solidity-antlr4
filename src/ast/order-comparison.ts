import { BaseNode } from './base';
import { OrderComparisonContext, SolidityParserVisitor } from '../grammar';

export class OrderComparison extends BaseNode {
  type = 'OrderComparison';
  public constructor(ctx: OrderComparisonContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
