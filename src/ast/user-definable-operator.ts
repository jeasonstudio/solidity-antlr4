import { BaseNodeString } from './base';
import { UserDefinableOperatorContext, SolidityParserVisitor } from '../grammar';

export class UserDefinableOperator extends BaseNodeString {
  type = 'UserDefinableOperator';
  public constructor(ctx: UserDefinableOperatorContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.getChild(0)?.getText() ?? '', visitor);
  }
}
