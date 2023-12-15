import { BaseNode } from './base';
import { ConstructorDefinitionContext, SolidityParserVisitor } from '../grammar';

export class ConstructorDefinition extends BaseNode {
  public type = 'ConstructorDefinition';
  public constructor(ctx: ConstructorDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
