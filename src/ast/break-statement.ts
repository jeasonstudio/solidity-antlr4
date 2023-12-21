import { BaseNodeString } from './base';
import { BreakStatementContext, SolidityParserVisitor } from '../grammar';

export class BreakStatement extends BaseNodeString {
  type = 'BreakStatement';
  public constructor(ctx: BreakStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
