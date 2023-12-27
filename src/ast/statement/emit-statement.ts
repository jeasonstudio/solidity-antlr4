import { EmitStatementContext, SolidityParserVisitor } from '../../antlr4';
import { FunctionCall } from '../expression';

export class EmitStatement extends FunctionCall {
  type = 'EmitStatement' as const;
  constructor(ctx: EmitStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
