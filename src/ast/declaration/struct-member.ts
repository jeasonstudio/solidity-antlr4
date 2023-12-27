import { BaseNode } from '../base';
import { StructMemberContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';
import { TypeName } from '../type';

export class StructMember extends BaseNode {
  type = 'StructMember' as const;
  name: Identifier;
  typeName: TypeName;
  constructor(ctx: StructMemberContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.typeName = ctx.typeName().accept(visitor);
  }
}
