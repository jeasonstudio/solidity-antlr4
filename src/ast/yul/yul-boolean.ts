import { BaseNodeString } from '../base';
import { YulBooleanContext, SolidityParserVisitor } from '../../antlr4';

export class YulBoolean extends BaseNodeString {
  type = 'YulBoolean';
  constructor(ctx: YulBooleanContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.YulTrue() ? 'true' : 'false';
  }
}
