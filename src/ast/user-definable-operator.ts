import { BaseNode } from './base';
import { UserDefinableOperatorContext, SolidityParserVisitor } from '../grammar';

export class UserDefinableOperator extends BaseNode {
  public type = 'UserDefinableOperator';
  public constructor(ctx: UserDefinableOperatorContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
