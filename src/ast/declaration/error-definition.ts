import { BaseNode } from '../base';
import { ErrorDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { ErrorParameter } from './variable-declaration';

export class ErrorDefinition extends BaseNode {
  type = 'ErrorDefinition';
  name: string;
  parameters: ErrorParameter[];
  constructor(ctx: ErrorDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().getText();
    this.parameters = ctx.errorParameter().map((param) => param.accept(visitor));
  }
}
