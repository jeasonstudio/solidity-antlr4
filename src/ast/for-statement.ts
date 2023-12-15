import { BaseNode } from './base';
import { ForStatementContext, SolidityParserVisitor } from '../grammar';

export class ForStatement extends BaseNode {
  public type = 'ForStatement';
  public constructor(ctx: ForStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
