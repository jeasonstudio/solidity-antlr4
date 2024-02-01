import { EmitStatementContext, SolidityParserVisitor } from '../../antlr4';
import { AbstractFunctionCall } from '../expression';

export class EmitStatement extends AbstractFunctionCall {
  type = 'EmitStatement' as const;
  constructor(ctx: EmitStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
