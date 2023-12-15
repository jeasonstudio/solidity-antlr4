import { BaseNode } from './base';
import { CallArgumentListContext, SolidityParserVisitor } from '../grammar';
import { Expression } from './expression';
import { NamedArgument } from './named-argument';

export class CallArgumentList extends BaseNode {
  type = 'CallArgumentList';
  argumentsList: (Expression | NamedArgument)[];
  public constructor(ctx: CallArgumentListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.argumentsList = this.visitContextList(ctx.children);
  }
  toJSON() {
    return this.argumentsList;
  }
}
