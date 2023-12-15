import { BaseNode } from './base';
import { ReceiveFunctionDefinitionContext, SolidityParserVisitor } from '../grammar';

export class ReceiveFunctionDefinition extends BaseNode {
  public type = 'ReceiveFunctionDefinition';
  public constructor(ctx: ReceiveFunctionDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
