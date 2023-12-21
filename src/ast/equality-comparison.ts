import { BaseNode } from './base';
import { EqualityComparisonContext, SolidityParserVisitor } from '../grammar';

export class EqualityComparison extends BaseNode {
  type = 'EqualityComparison';
  public constructor(ctx: EqualityComparisonContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
