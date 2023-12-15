import { BaseNode } from './base';
import { ExpressionStatementContext, SolidityParserVisitor } from '../grammar';

export class ExpressionStatement extends BaseNode {
  public type = 'ExpressionStatement';
  public constructor(ctx: ExpressionStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
