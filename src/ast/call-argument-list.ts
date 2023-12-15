import { BaseNode } from './base';
import { CallArgumentListContext, SolidityParserVisitor } from '../grammar';

export class CallArgumentList extends BaseNode {
  public type = 'CallArgumentList';
  public constructor(ctx: CallArgumentListContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
