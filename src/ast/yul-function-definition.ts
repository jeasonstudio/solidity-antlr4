import { BaseNode } from './base';
import { YulFunctionDefinitionContext, SolidityParserVisitor } from '../grammar';

export class YulFunctionDefinition extends BaseNode {
  public type = 'YulFunctionDefinition';
  public constructor(ctx: YulFunctionDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
