import { BaseNode } from './base';
import { CatchClauseContext, SolidityParserVisitor } from '../grammar';
import { ParameterList } from './parameter-list';
import { Block } from './block';
import { Identifier } from './identifier';

export class CatchClause extends BaseNode {
  type = 'CatchClause';
  errorName: Identifier | null = null;
  parameters: ParameterList | null = null;
  body: Block;

  public constructor(ctx: CatchClauseContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.errorName = ctx.identifier()?.accept(visitor) ?? null;
    this.body = ctx.block().accept(visitor);
    this.parameters = ctx.parameterList()?.accept(visitor) ?? null;
  }
}
