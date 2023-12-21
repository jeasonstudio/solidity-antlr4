import { BaseNode } from './base';
import { YulVariableDeclarationContext, SolidityParserVisitor } from '../grammar';
import { YulExpression } from './yul-expression';

export class YulVariableDeclaration extends BaseNode {
  type = 'YulVariableDeclaration';
  identifiers: string[] = [];
  expression: YulExpression | null = null;
  public constructor(ctx: YulVariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.identifiers = ctx.YulIdentifier().map((i) => i.getText());
    this.expression = ctx.yulExpression()?.accept(visitor) ?? null;
  }
}
