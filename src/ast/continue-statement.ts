import { BaseNodeString } from './base';
import { ContinueStatementContext, SolidityParserVisitor } from '../grammar';

export class ContinueStatement extends BaseNodeString {
  type = 'ContinueStatement';
  public constructor(ctx: ContinueStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
