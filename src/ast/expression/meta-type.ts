import { BaseNode } from '../base';
import { MetaTypeContext, SolidityParserVisitor } from '../../antlr4';
import { TypeName } from '../type';

// `type(TypeName)` such as type(address)
export class MetaType extends BaseNode {
  type = 'MetaType' as const;
  typeName: TypeName;
  constructor(ctx: MetaTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
