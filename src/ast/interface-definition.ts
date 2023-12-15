import { BaseNode } from './base';
import { InterfaceDefinitionContext, SolidityParserVisitor } from '../grammar';

export class InterfaceDefinition extends BaseNode {
  public type = 'InterfaceDefinition';
  public constructor(ctx: InterfaceDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
