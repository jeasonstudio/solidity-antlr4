import { BaseNodeString } from '../base';
import { YulLiteralContext, SolidityParserVisitor } from '../../grammar';

export class YulLiteral extends BaseNodeString {
  type = 'YulLiteral';
  public constructor(ctx: YulLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name =
      ctx.yulBoolean() !== null ? (ctx.yulBoolean()!.YulTrue() ? 'true' : 'false') : ctx.getText();
  }
}
