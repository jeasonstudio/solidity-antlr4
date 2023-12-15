import { BaseNode } from './base';
import { ErrorDefinitionContext, SolidityParserVisitor } from '../grammar';

export class ErrorDefinition extends BaseNode {
  public type = 'ErrorDefinition';
  public constructor(ctx: ErrorDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
