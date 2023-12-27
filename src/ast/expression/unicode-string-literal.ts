import { BaseNode } from '../base';
import { UnicodeStringLiteralContext, SolidityParserVisitor } from '../../antlr4';

export class UnicodeStringLiteral extends BaseNode {
  type = 'UnicodeStringLiteral' as const;
  value: string;
  constructor(ctx: UnicodeStringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const hexString = ctx.UnicodeStringLiteral(0)?.getText();
    this.value = hexString ? hexString.substring(8, hexString.length - 1) : '';
  }
}
