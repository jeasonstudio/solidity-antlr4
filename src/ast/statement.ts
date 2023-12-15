import { BaseNode } from './base';
import { StatementContext, SolidityParserVisitor } from '../grammar';

export class Statement extends BaseNode {
  public type = 'Statement';
  public constructor(ctx: StatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
