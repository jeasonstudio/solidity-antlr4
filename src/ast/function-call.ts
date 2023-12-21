import { BaseNode } from './base';
import { FunctionCallContext, SolidityParserVisitor } from '../grammar';

export class FunctionCall extends BaseNode {
  type = 'FunctionCall';
  public constructor(ctx: FunctionCallContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
