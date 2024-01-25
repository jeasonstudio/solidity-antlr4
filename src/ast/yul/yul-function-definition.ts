import { BaseNode } from '../base';
import { YulFunctionDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { YulBlock } from './yul-block';

export class YulFunctionDefinition extends BaseNode {
  type = 'YulFunctionDefinition' as const;
  name: string;
  parameters: string[] = [];
  returnParameters: string[] = [];
  body: YulBlock | null = null;
  constructor(ctx: YulFunctionDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.YulIdentifier(0)!.getText();
    this.parameters = ctx._arguments.map((arg) => arg.text!);
    this.returnParameters = ctx._returnParameters.map((arg) => arg.text!);
    this.body = ctx._body?.accept(visitor) ?? null;
  }
}
