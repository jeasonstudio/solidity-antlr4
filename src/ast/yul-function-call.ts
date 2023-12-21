import { BaseNode, YulEVMBuiltIn } from './base';
import { YulFunctionCallContext, SolidityParserVisitor } from '../grammar';
import { YulExpression } from './yul-expression';

export class YulFunctionCall extends BaseNode {
  type = 'YulFunctionCall';
  identifier: string | YulEVMBuiltIn;
  expressions: YulExpression[] = [];
  public constructor(ctx: YulFunctionCallContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.identifier = (ctx.YulEVMBuiltin() || ctx.YulIdentifier())!.getText();
    this.expressions = ctx.yulExpression().map((e) => e.accept(visitor));
  }
}
