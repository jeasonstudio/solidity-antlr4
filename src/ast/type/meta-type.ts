import { BaseNode } from '../base';
import { MetaTypeContext, SolidityParserVisitor } from '../../grammar';
import { TypeName } from './type-name';

export class MetaType extends BaseNode {
  type = 'MetaType';
  typeName: TypeName;
  constructor(ctx: MetaTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
