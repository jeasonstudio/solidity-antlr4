import { BaseNode } from './base';
import { LiteralWithSubDenominationContext, SolidityParserVisitor } from '../grammar';

export class LiteralWithSubDenomination extends BaseNode {
  public type = 'LiteralWithSubDenomination';
  public constructor(ctx: LiteralWithSubDenominationContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
