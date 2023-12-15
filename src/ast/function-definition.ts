import { BaseNode } from './base';
import { FunctionDefinitionContext, SolidityParserVisitor } from '../grammar';

export class FunctionDefinition extends BaseNode {
  public type = 'FunctionDefinition';
  public constructor(ctx: FunctionDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
