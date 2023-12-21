import { BaseNodeUnion } from './base';
import { StatementContext, SolidityParserVisitor } from '../grammar';

export class Statement extends BaseNodeUnion {
  // public type = 'Statement';
  public constructor(ctx: StatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children as any, visitor);
  }
}
