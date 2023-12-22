import { BaseNodeUnion } from '../base';
import { UncheckedBlockContext, SolidityParserVisitor } from '../../grammar';
import { Block } from './block';

export class UncheckedBlock extends BaseNodeUnion<Block> {
  type = 'UncheckedBlock';
  constructor(ctx: UncheckedBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.block()], visitor);
  }
}
