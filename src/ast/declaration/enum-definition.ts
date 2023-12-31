import { BaseNode } from '../base';
import { EnumDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';

export class EnumDefinition extends BaseNode {
  type = 'EnumDefinition' as const;
  name: Identifier;
  members: Identifier[];
  constructor(ctx: EnumDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const [name, ...members] = ctx.identifier();
    this.name = name.accept(visitor);
    this.members = members.map((m) => m.accept(visitor));
  }
}
