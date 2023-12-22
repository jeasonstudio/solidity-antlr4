import { BaseNode } from '../base';
import { TypeNameContext, SolidityParserVisitor } from '../../grammar';
import { Expression } from '../expression';

export class TypeName extends BaseNode {
  // type = 'TypeName';
  name: string | null;
  expression: Expression | null;
  constructor(ctx: TypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);

    const target = [
      ctx.elementaryTypeName(),
      ctx.functionTypeName(),
      ctx.mappingType(),
      ctx.identifierPath(),
    ].find(Boolean);

    if (target) {
      return target.accept(visitor);
    } else {
      this.type = 'TypeName';
      this.name = ctx.getText() ?? null;
      this.expression = ctx.expression()?.accept(visitor) ?? null;
      this.toJSON = () => this.name;
    }
  }
}
