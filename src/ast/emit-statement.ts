import { BaseNode } from './base';
import { EmitStatementContext, SolidityParserVisitor } from '../grammar';

export class EmitStatement extends BaseNode {
  public type = 'EmitStatement';
  public constructor(ctx: EmitStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
