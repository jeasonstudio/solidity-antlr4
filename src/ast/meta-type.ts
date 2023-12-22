import { MetaTypeContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';
import { Expression } from './expression';

export class MetaType extends Expression {
  type = 'MetaType';
  typeName: TypeName;
  constructor(ctx: MetaTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
