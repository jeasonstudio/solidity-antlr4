import { BaseNode } from './base';
import { StructDefinitionContext, SolidityParserVisitor } from '../grammar';

export class StructDefinition extends BaseNode {
  public type = 'StructDefinition';
  public constructor(ctx: StructDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
