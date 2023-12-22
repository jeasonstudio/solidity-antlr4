import { RevertStatementContext, SolidityParserVisitor } from '../grammar';
import { FunctionCall } from './function-call';

export class RevertStatement extends FunctionCall {
  type = 'RevertStatement';
  constructor(ctx: RevertStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
