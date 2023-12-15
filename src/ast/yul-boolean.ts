import { BaseNode } from './base';
import { YulBooleanContext, SolidityParserVisitor } from '../grammar';

export class YulBoolean extends BaseNode {
  public type = 'YulBoolean';
  public constructor(ctx: YulBooleanContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
