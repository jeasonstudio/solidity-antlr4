import { BaseNode } from './base';
import { YulFunctionCallContext, SolidityParserVisitor } from '../grammar';

export class YulFunctionCall extends BaseNode {
  public type = 'YulFunctionCall';
  public constructor(ctx: YulFunctionCallContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
