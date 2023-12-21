import { BaseNode } from './base';
import { ModifierInvocationContext, SolidityParserVisitor } from '../grammar';
import { CallArgumentList } from './call-argument-list';
import { IdentifierPath } from './identifier-path';

export class ModifierInvocation extends BaseNode {
  type = 'ModifierInvocation';
  name: IdentifierPath;
  arguments: CallArgumentList | null = null;
  public constructor(ctx: ModifierInvocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifierPath().accept(visitor);
    this.arguments = ctx.callArgumentList()?.accept(visitor) ?? null;
  }
}
