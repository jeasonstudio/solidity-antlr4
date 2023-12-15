import { BaseNode } from './base';
import { SimpleStatementContext, SolidityParserVisitor } from '../grammar';

export class SimpleStatement extends BaseNode {
  public type = 'SimpleStatement';
  public constructor(ctx: SimpleStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
