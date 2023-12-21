import { BaseNode, formatString } from './base';
import { AssemblyStatementContext, SolidityParserVisitor } from '../grammar';
import { AssemblyFlags } from './assembly-flags';
import { YulStatement } from './yul-statement';

export class AssemblyStatement extends BaseNode {
  type = 'AssemblyStatement';
  flags: AssemblyFlags | null = null;
  dialect: 'evmasm' | string | null = null;
  yulStatements: YulStatement[] = [];
  public constructor(ctx: AssemblyStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.flags = ctx.assemblyFlags()?.accept(visitor) ?? null;
    this.dialect = ctx.AssemblyDialect() ? formatString(ctx.AssemblyDialect()!.getText()) : null;
    this.yulStatements = ctx.yulStatement().map((yulStatement) => yulStatement.accept(visitor));
  }
}
