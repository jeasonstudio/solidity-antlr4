import { EmitStatementContext, SolidityParserVisitor } from '../../grammar';
import { FunctionCall } from '../expression';

export class EmitStatement extends FunctionCall {
  type = 'EmitStatement';
  constructor(ctx: EmitStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
