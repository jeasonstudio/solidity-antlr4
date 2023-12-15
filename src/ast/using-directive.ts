import { BaseNode } from './base';
import { UsingDirectiveContext, SolidityParserVisitor } from '../grammar';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { IdentifierPath } from './identifier-path';
import { TypeName } from './type-name';
import { UserDefinableOperator } from './user-definable-operator';

export class UsingDirective extends BaseNode {
  type = 'UsingDirective';
  global: boolean;
  libraryName?: UserDefinedValueTypeDefinition | IdentifierPath;
  functionList?: {
    definition: IdentifierPath;
    operator?: UserDefinableOperator;
  }[];
  typeName?: TypeName;
  public constructor(ctx: UsingDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.global = !!ctx.Global();
    this.typeName = ctx.typeName()?.accept(visitor);

    const isObjectUsing = !!ctx.LBrace() && !!ctx.RBrace();
    if (!isObjectUsing) {
      this.libraryName = ctx.identifierPath(0)?.accept(visitor);
    } else {
      this.functionList = ctx.identifierPath().map((p) => {
        const definition = p.accept(visitor);
        // TODO: 如何将 operator 和 definition 关联在一起
        // const operator = p.userDefinableOperator()?.accept(visitor);
        return { definition };
      });
    }
  }
}
