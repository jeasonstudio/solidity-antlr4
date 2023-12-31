import { BaseNodeString } from '../base';
import { UserDefinableOperatorContext, SolidityParserVisitor } from '../../antlr4';

export class UserDefinableOperator extends BaseNodeString {
  type = 'UserDefinableOperator' as const;
  constructor(ctx: UserDefinableOperatorContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
