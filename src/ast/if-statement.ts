import { BaseNode } from './base';
import { IfStatementContext, SolidityParserVisitor } from '../grammar';

export class IfStatement extends BaseNode {
  public type = 'IfStatement';
  public constructor(ctx: IfStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
