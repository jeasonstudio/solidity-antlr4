import { BaseNode } from './base';
import { CatchClauseContext, SolidityParserVisitor } from '../grammar';

export class CatchClause extends BaseNode {
  public type = 'CatchClause';
  public constructor(ctx: CatchClauseContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
