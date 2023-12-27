import { BaseNode } from '../base';
import { HexStringLiteralContext, SolidityParserVisitor } from '../../antlr4';

export class HexStringLiteral extends BaseNode {
  type = 'HexStringLiteral' as const;
  value: string;
  constructor(ctx: HexStringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const hexString = ctx.HexString(0)?.getText();
    this.value = hexString ? hexString.substring(4, hexString.length - 1) : '';
  }
}
