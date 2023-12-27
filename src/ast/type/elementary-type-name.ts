import { BaseNodeString } from '../base';
import { ElementaryTypeNameContext, SolidityParserVisitor } from '../../antlr4';

export class ElementaryTypeName extends BaseNodeString {
  type = 'ElementaryTypeName';
  payable: boolean = false;
  constructor(ctx: ElementaryTypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.payable = !!ctx.Payable();

    const types = [
      ctx.Address(),
      ctx.Bool(),
      ctx.String(),
      ctx.Bytes(),
      ctx.SignedIntegerType(),
      ctx.UnsignedIntegerType(),
      ctx.FixedBytes(),
      ctx.Fixed(),
      ctx.Ufixed(),
    ];
    this.name = types.find((t) => !!t)?.getText() ?? ctx.getText();
  }
}
