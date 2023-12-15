import { BaseNode } from './base';
import { YulLiteralContext, SolidityParserVisitor } from '../grammar';

export class YulLiteral extends BaseNode {
  public type = 'YulLiteral';
  public constructor(ctx: YulLiteralContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
