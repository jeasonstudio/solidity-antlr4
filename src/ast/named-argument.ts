import { BaseNode } from './base';
import { NamedArgumentContext, SolidityParserVisitor } from '../grammar';

export class NamedArgument extends BaseNode {
  public type = 'NamedArgument';
  public constructor(ctx: NamedArgumentContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
