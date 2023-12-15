import { BaseNode } from './base';
import { WhileStatementContext, SolidityParserVisitor } from '../grammar';

export class WhileStatement extends BaseNode {
  public type = 'WhileStatement';
  public constructor(ctx: WhileStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
