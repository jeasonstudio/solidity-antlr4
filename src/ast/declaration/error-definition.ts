import { BaseNode } from '../base';
import { ErrorDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { ErrorParameter } from './variable-declaration';
import { Identifier } from '../expression';

export class ErrorDefinition extends BaseNode {
  type = 'ErrorDefinition' as const;
  name: Identifier;
  parameters: ErrorParameter[];
  constructor(ctx: ErrorDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.parameters = ctx.errorParameter().map((param) => param.accept(visitor));
  }
}
