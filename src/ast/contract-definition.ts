import { BaseNode } from './base';
import { ContractDefinitionContext, SolidityParserVisitor } from '../grammar';

export class ContractDefinition extends BaseNode {
  public type = 'ContractDefinition';
  public constructor(ctx: ContractDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
