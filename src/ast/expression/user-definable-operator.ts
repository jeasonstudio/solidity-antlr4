import { BaseNodeString } from '../base';
import { UserDefinableOperatorContext, SolidityParserVisitor } from '../../grammar';

export class UserDefinableOperator extends BaseNodeString {
  type = 'UserDefinableOperator';
  constructor(ctx: UserDefinableOperatorContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}