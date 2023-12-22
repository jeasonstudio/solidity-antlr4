import { BaseNodeUnion } from './base';
import { UncheckedBlockContext, SolidityParserVisitor } from '../grammar';

export class UncheckedBlock extends BaseNodeUnion {
  type = 'UncheckedBlock';
  constructor(ctx: UncheckedBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, [ctx.block()], visitor);
  }
}
