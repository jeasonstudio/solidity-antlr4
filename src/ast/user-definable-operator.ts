import { BaseNode } from './base';
import { UserDefinableOperatorContext, SolidityParserVisitor } from '../grammar';

export class UserDefinableOperator extends BaseNode {
  type = 'UserDefinableOperator';
  public constructor(ctx: UserDefinableOperatorContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
