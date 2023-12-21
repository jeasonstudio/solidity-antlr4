import { BaseNode } from './base';
import { FunctionCallOptionsContext, SolidityParserVisitor } from '../grammar';

export class FunctionCallOptions extends BaseNode {
  type = 'FunctionCallOptions';
  public constructor(ctx: FunctionCallOptionsContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
