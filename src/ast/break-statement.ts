import { BaseNode } from './base';
import { BreakStatementContext, SolidityParserVisitor } from '../grammar';

export class BreakStatement extends BaseNode {
  public type = 'BreakStatement';
  public constructor(ctx: BreakStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
