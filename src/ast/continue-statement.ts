import { BaseNode } from './base';
import { ContinueStatementContext, SolidityParserVisitor } from '../grammar';

export class ContinueStatement extends BaseNode {
  public type = 'ContinueStatement';
  public constructor(ctx: ContinueStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
