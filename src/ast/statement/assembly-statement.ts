import { BaseNode, formatString } from '../base';
import { AssemblyStatementContext, SolidityParserVisitor } from '../../antlr4';
import { YulStatement } from '../yul';

export class AssemblyStatement extends BaseNode {
  type = 'AssemblyStatement' as const;
  flags: string[] | null = null;
  dialect: 'evmasm' | string | null = null;
  yulStatements: YulStatement[] = [];
  constructor(ctx: AssemblyStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.flags = ctx.assemblyFlags()?.accept(visitor) ?? null;
    this.dialect = ctx.AssemblyDialect() ? formatString(ctx.AssemblyDialect()!.getText()) : null;
    this.yulStatements = ctx.yulStatement().map((yulStatement) => yulStatement.accept(visitor));
  }
}
