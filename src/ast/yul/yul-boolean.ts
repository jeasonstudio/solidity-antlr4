import { BaseNodeString } from '../base';
import { YulBooleanContext, SolidityParserVisitor } from '../../grammar';

export class YulBoolean extends BaseNodeString {
  type = 'YulBoolean';
  public constructor(ctx: YulBooleanContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.YulTrue() ? 'true' : 'false';
  }
}
