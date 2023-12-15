import { BaseNode } from './base';
import { ReturnStatementContext, SolidityParserVisitor } from '../grammar';

export class ReturnStatement extends BaseNode {
  public type = 'ReturnStatement';
  public constructor(ctx: ReturnStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
