import { BaseNodeUnion } from './base';
import { ContractBodyElementContext, SolidityParserVisitor } from '../grammar';

export class ContractBodyElement extends BaseNodeUnion {
  // type = 'ContractBodyElement';
  constructor(ctx: ContractBodyElementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, ctx.children as any, visitor);
  }
}
