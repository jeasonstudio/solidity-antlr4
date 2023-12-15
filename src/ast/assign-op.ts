import { BaseNode } from './base';
import { AssignOpContext, SolidityParserVisitor } from '../grammar';

export class AssignOp extends BaseNode {
  public type = 'AssignOp';
  public constructor(ctx: AssignOpContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
