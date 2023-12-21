import { EmitStatementContext, SolidityParserVisitor } from '../grammar';
import { FunctionCall } from './function-call';

export class EmitStatement extends FunctionCall {
  public type = 'EmitStatement';
  public constructor(ctx: EmitStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
