import { BaseNode } from './base';
import { ParameterDeclarationContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';
import { Identifier } from './identifier';
import { DataLocation } from './data-location';

export class ParameterDeclaration extends BaseNode {
  type = 'ParameterDeclaration';
  name: Identifier | null = null;
  dataLocation: DataLocation | null = null;
  typeName: TypeName;
  public constructor(ctx: ParameterDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier()?.accept(visitor);
    this.typeName = ctx.typeName().accept(visitor);
    this.dataLocation = ctx.dataLocation()?.accept(visitor);
  }
}
