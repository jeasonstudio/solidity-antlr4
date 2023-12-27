import { BaseNode } from '../base';
import { CatchClauseContext, SolidityParserVisitor } from '../../antlr4';
import { Identifier } from '../expression';
import { ParameterList } from '../meta';
import { Block } from './block';

export class CatchClause extends BaseNode {
  type = 'CatchClause' as const;
  errorName: Identifier | null = null;
  parameters: ParameterList | null = null;
  body: Block;

  constructor(ctx: CatchClauseContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.errorName = ctx.identifier()?.accept(visitor) ?? null;
    this.body = ctx.block().accept(visitor);
    this.parameters = ctx.parameterList()?.accept(visitor) ?? null;
  }
}
