import { RevertStatementContext, SolidityParserVisitor } from '../grammar';
import { FunctionCall } from './function-call';

export class RevertStatement extends FunctionCall {
  public type = 'RevertStatement';
  public constructor(ctx: RevertStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
