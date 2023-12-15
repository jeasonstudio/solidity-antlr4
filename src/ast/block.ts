import { BaseNode } from './base';
import { BlockContext, SolidityParserVisitor } from '../grammar';

export class Block extends BaseNode {
  public type = 'Block';
  public constructor(ctx: BlockContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
