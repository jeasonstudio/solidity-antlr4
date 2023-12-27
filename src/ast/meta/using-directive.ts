import { BaseNode } from '../base';
import { UsingDirectiveContext, SolidityParserVisitor } from '../../antlr4';
import { UserDefinedValueTypeDefinition } from '../declaration';
import { IdentifierPath } from './identifier-path';
import { TypeName } from '../type';
import { UserDefinableOperator } from '../expression';

export class UsingDirective extends BaseNode {
  type = 'UsingDirective';
  global: boolean;
  libraryName: UserDefinedValueTypeDefinition | IdentifierPath | null = null;
  definitions: IdentifierPath[] | null = null;
  operators: (UserDefinableOperator | null)[] | null = null;
  typeName: TypeName | '*';
  constructor(ctx: UsingDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.global = !!ctx.Global();
    this.typeName = !!ctx.Mul() ? '*' : ctx.typeName()?.accept(visitor);

    const isObjectUsing = !!ctx.LBrace() && !!ctx.RBrace();
    if (!isObjectUsing) {
      this.libraryName = ctx.identifierPath(0)?.accept(visitor) ?? null;
    } else {
      this.operators = [];
      this.definitions = [];
      ctx.identifierPath().forEach((p, index) => {
        this.definitions![index] = p.accept(visitor);
        // TODO@jeason: How to relate operator and definition together
        this.operators![index] = null;
      });
    }
  }
}
