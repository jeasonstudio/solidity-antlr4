import { BaseNode } from './base';
import { DoWhileStatementContext, SolidityParserVisitor } from '../grammar';

export class DoWhileStatement extends BaseNode {
  public type = 'DoWhileStatement';
  public constructor(ctx: DoWhileStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
