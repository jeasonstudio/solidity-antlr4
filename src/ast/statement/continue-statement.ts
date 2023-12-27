import { BaseNodeString } from '../base';
import { ContinueStatementContext, SolidityParserVisitor } from '../../antlr4';

export class ContinueStatement extends BaseNodeString {
  type = 'ContinueStatement';
  constructor(ctx: ContinueStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = 'continue';
  }
}
