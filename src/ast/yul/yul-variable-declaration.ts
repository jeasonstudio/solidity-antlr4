import { BaseNode } from '../base';
import { YulVariableDeclarationContext, SolidityParserVisitor } from '../../antlr4';
import { YulExpression } from './yul-expression';

export class YulVariableDeclaration extends BaseNode {
  type = 'YulVariableDeclaration' as const;
  identifiers: string[] = [];
  expression: YulExpression | null = null;
  constructor(ctx: YulVariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.identifiers = ctx.YulIdentifier().map((i) => i.getText());
    this.expression = ctx.yulExpression()?.accept(visitor) ?? null;
  }
}
