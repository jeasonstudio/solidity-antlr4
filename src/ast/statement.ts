import { BaseNodeUnion } from './base';
import { StatementContext, SolidityParserVisitor } from '../grammar';

export class Statement extends BaseNodeUnion {
  // type = 'Statement';
  constructor(ctx: StatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children as any, visitor);
  }
}
