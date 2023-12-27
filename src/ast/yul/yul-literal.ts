import { BaseNodeString } from '../base';
import { YulLiteralContext, SolidityParserVisitor } from '../../antlr4';

export class YulLiteral extends BaseNodeString {
  type = 'YulLiteral' as const;
  constructor(ctx: YulLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name =
      ctx.yulBoolean() !== null ? (ctx.yulBoolean()!.YulTrue() ? 'true' : 'false') : ctx.getText();
  }
}
