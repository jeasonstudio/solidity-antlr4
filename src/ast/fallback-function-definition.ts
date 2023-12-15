import { BaseNode } from './base';
import { FallbackFunctionDefinitionContext, SolidityParserVisitor } from '../grammar';

export class FallbackFunctionDefinition extends BaseNode {
  public type = 'FallbackFunctionDefinition';
  public constructor(ctx: FallbackFunctionDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
