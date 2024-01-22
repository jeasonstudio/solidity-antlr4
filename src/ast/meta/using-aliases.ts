import { BaseNode } from '../base';
import { UsingAliasesContext, SolidityParserVisitor } from '../../antlr4';
import { IdentifierPath } from './identifier-path';
import { UserDefinableOperator } from '../expression';

export class UsingAliases extends BaseNode {
  type = 'UsingAliases' as const;
  name: IdentifierPath;
  operator: UserDefinableOperator | null = null;
  constructor(ctx: UsingAliasesContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifierPath().accept(visitor);
    this.operator = ctx.userDefinableOperator()?.accept(visitor) ?? null;
  }
}
