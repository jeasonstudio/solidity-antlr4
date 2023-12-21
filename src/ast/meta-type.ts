import { TypeName } from 'solidity-ast';
import { MetaTypeContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class MetaType extends Expression {
  type = 'MetaType';
  typeName: TypeName;
  public constructor(ctx: MetaTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}