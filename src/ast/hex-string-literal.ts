import { BaseNode } from './base';
import { HexStringLiteralContext, SolidityParserVisitor } from '../grammar';

export class HexStringLiteral extends BaseNode {
  type = 'HexStringLiteral';
  value: string;
  constructor(ctx: HexStringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const hexString = ctx.HexString(0)?.getText();
    this.value = hexString ? hexString.substring(4, hexString.length - 1) : '';
  }
}
