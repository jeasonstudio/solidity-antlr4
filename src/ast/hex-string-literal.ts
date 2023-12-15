import { BaseNode } from './base';
import { HexStringLiteralContext, SolidityParserVisitor } from '../grammar';

export class HexStringLiteral extends BaseNode {
  public type = 'HexStringLiteral';
  public constructor(ctx: HexStringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
