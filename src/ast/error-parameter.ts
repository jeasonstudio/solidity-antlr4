import { BaseNode } from './base';
import { ErrorParameterContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';

export class ErrorParameter extends BaseNode {
  public type = 'ErrorParameter';
  name?: string;
  typeName: TypeName;
  public constructor(ctx: ErrorParameterContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.typeName = ctx.typeName().accept(visitor);
    this.name = ctx.identifier()?.getText();
  }
}
