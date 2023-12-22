import { BaseNode } from './base';
import { BlockContext, SolidityParserVisitor } from '../grammar';
import { Statement } from './statement';
import { UncheckedBlock } from './unchecked-block';

export class Block extends BaseNode {
  type = 'Block';
  statements: Statement[] = [];
  uncheckedBlocks: UncheckedBlock[] = [];
  constructor(ctx: BlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.statements = ctx.statement().map((s) => s.accept(visitor));
    this.uncheckedBlocks = ctx.uncheckedBlock().map((s) => s.accept(visitor));
  }
}
