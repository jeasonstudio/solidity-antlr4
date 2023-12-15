import { BaseNode } from './base';
import { ModifierDefinitionContext, SolidityParserVisitor } from '../grammar';

export class ModifierDefinition extends BaseNode {
  public type = 'ModifierDefinition';
  public constructor(ctx: ModifierDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
