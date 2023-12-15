import { BaseNode } from './base';
import { UserDefinedValueTypeDefinitionContext, SolidityParserVisitor } from '../grammar';

export class UserDefinedValueTypeDefinition extends BaseNode {
  public type = 'UserDefinedValueTypeDefinition';
  public constructor(ctx: UserDefinedValueTypeDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
