import { BaseNode } from './base';
import { MemberAccessContext, SolidityParserVisitor } from '../grammar';
import { Identifier } from './identifier';
import { Expression } from './expression';

export class MemberAccess extends BaseNode {
  type = 'MemberAccess';
  expression: Expression;
  member: Identifier | null = null;
  public constructor(ctx: MemberAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.member = ctx.identifier()?.accept(visitor) ?? null;
  }
}
