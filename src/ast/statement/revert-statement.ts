import { RevertStatementContext, SolidityParserVisitor } from '../../antlr4';
import { FunctionCall } from '../expression';

export class RevertStatement extends FunctionCall {
  type = 'RevertStatement';
  constructor(ctx: RevertStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
