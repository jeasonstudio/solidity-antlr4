import { RevertStatementContext, SolidityParserVisitor } from '../../antlr4';
import { AbstractFunctionCall } from '../expression';

export class RevertStatement extends AbstractFunctionCall {
  type = 'RevertStatement' as const;
  constructor(ctx: RevertStatementContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
