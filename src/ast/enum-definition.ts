import { BaseNode } from './base';
import { EnumDefinitionContext, SolidityParserVisitor } from '../grammar';

export class EnumDefinition extends BaseNode {
  public type = 'EnumDefinition';
  public constructor(ctx: EnumDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
