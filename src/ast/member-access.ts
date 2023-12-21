import { MemberAccessContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';

export class MemberAccess extends Expression {
  type = 'MemberAccess';
  expression: Expression;
  memberName: string | null = null;

  public constructor(ctx: MemberAccessContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    if (ctx.Address()) {
      this.memberName = 'address';
    } else if (!!ctx.identifier()) {
      this.memberName = ctx.identifier()!.getText();
    } else {
      this.memberName = null;
    }
  }
}
