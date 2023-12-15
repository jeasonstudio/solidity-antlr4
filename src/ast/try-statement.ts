import { BaseNode } from './base';
import { TryStatementContext, SolidityParserVisitor } from '../grammar';

export class TryStatement extends BaseNode {
  public type = 'TryStatement';
  public constructor(ctx: TryStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
