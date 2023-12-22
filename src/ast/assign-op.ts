import { BaseNodeString } from './base';
import { AssignOpContext, SolidityParserVisitor } from '../grammar';

export class AssignOp extends BaseNodeString {
  type = 'AssignOp';
  constructor(ctx: AssignOpContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
