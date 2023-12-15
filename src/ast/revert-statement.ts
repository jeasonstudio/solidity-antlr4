import { BaseNode } from './base';
import { RevertStatementContext, SolidityParserVisitor } from '../grammar';

export class RevertStatement extends BaseNode {
  public type = 'RevertStatement';
  public constructor(ctx: RevertStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
