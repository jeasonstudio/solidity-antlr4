import { BaseNode } from '../base';
import { StructDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';
import { StructMember } from './struct-member';

export class StructDefinition extends BaseNode {
  type = 'StructDefinition';
  name: Identifier;
  members: StructMember[];
  constructor(ctx: StructDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.members = ctx.structMember().map((member) => member.accept(visitor));
  }
}
