import { BaseNode } from './base';
import { ContractBodyElementContext, SolidityParserVisitor } from '../grammar';

export class ContractBodyElement extends BaseNode {
  type = 'ContractBodyElement';
  element: BaseNode;
  public constructor(ctx: ContractBodyElementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.element = ctx.getChild(0)?.accept(visitor);
  }
  toJSON() {
    return this.element;
  }
}
