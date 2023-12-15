import { BaseNode } from './base';
import { UnicodeStringLiteralContext, SolidityParserVisitor } from '../grammar';

export class UnicodeStringLiteral extends BaseNode {
  public type = 'UnicodeStringLiteral';
  public constructor(ctx: UnicodeStringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
