import { BaseNode } from './base';
import { AssemblyStatementContext, SolidityParserVisitor } from '../grammar';

export class AssemblyStatement extends BaseNode {
  public type = 'AssemblyStatement';
  public constructor(ctx: AssemblyStatementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
