import { FunctionCallContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from './expression';
import { CallArgumentList } from './call-argument-list';
import { BaseNode } from '../base';

export abstract class AbstractFunctionCall extends BaseNode {
  expression: Expression;
  arguments: CallArgumentList | null = null;
  constructor(ctx: FunctionCallContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.expression = ctx.expression().accept(visitor);
    this.arguments = ctx.callArgumentList().accept(visitor);
  }
}

export class FunctionCall extends AbstractFunctionCall {
  type = 'FunctionCall' as const;
}
