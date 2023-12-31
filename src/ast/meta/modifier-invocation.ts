import { BaseNode } from '../base';
import { ModifierInvocationContext, SolidityParserVisitor } from '../../antlr4';
import { CallArgumentList } from '../expression';
import { IdentifierPath } from './identifier-path';

export class ModifierInvocation extends BaseNode {
  type = 'ModifierInvocation' as const;
  name: IdentifierPath;
  arguments: CallArgumentList | null = null;
  constructor(ctx: ModifierInvocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifierPath().accept(visitor);
    this.arguments = ctx.callArgumentList()?.accept(visitor) ?? null;
  }
}
