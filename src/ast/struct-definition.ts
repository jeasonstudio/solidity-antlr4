import { BaseNode } from './base';
import { StructDefinitionContext, SolidityParserVisitor } from '../grammar';
import { Identifier } from './identifier';
import { StructMember } from './struct-member';

export class StructDefinition extends BaseNode {
  type = 'StructDefinition';
  name: Identifier;
  members: StructMember[];
  public constructor(ctx: StructDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.members = this.visitContextList(ctx.structMember());
  }
}
