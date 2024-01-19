import { BaseNode } from '../base';
import { UsingDirectiveContext, SolidityParserVisitor } from '../../antlr4';
import { UserDefinedValueTypeDefinition } from '../declaration';
import { IdentifierPath } from './identifier-path';
import { TypeName } from '../type';
import { UsingAliases } from './using-aliases';

export class UsingDirective extends BaseNode {
  type = 'UsingDirective' as const;
  global: boolean;
  libraryName: UserDefinedValueTypeDefinition | IdentifierPath | null = null;
  usingAliases: UsingAliases[] | null = null;
  typeName: TypeName | '*';
  constructor(ctx: UsingDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.global = !!ctx.Global();
    this.typeName = !!ctx.Mul() ? '*' : ctx.typeName()?.accept(visitor);

    if (ctx.identifierPath() && !ctx.usingAliases().length) {
      this.libraryName = ctx.identifierPath()!.accept(visitor);
    } else {
      this.usingAliases = ctx.usingAliases().map((usingAlias) => usingAlias.accept(visitor));
    }
  }
}
