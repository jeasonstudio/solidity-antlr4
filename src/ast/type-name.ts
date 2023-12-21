import { BaseNode } from './base';
import { TypeNameContext, SolidityParserVisitor } from '../grammar';

export class TypeName extends BaseNode {
  type = 'TypeName';
  name: string;
  public constructor(ctx: TypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();

    const unionTypes = [ctx.elementaryTypeName(), ctx.functionTypeName(), ctx.mappingType()];
    Object.assign(this, unionTypes.find(Boolean)?.accept(visitor));
  }
  public toJSON = () => this.name;
}
