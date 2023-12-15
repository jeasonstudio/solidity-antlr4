import { BaseNode } from './base';
import { ContractBodyElementContext, SolidityParserVisitor } from '../grammar';

export class ContractBodyElement extends BaseNode {
  public type = 'ContractBodyElement';
  public constructor(ctx: ContractBodyElementContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
