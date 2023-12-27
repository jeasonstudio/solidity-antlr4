import { BaseNode } from '../base';
import { YulFunctionDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { YulBlock } from './yul-block';

export class YulFunctionDefinition extends BaseNode {
  type = 'YulFunctionDefinition';
  name: string | null = null;
  parameters: (string | null)[] = [];
  returnParameters: (string | null)[] = [];
  body: YulBlock | null = null;
  constructor(ctx: YulFunctionDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.YulIdentifier(0)?.getText() ?? null;
    this.parameters = ctx._arguments.map((arg) => arg.text);
    this.returnParameters = ctx._returnParameters.map((arg) => arg.text);
    this.body = ctx._body?.accept(visitor) ?? null;
  }
}
