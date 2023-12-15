import { BaseNode } from './base';
import { LiteralContext, SolidityParserVisitor } from '../grammar';

export class Literal extends BaseNode {
  public type = 'Literal';
  public constructor(ctx: LiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
