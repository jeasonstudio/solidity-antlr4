import { BaseNode } from './base';
import { BooleanLiteralContext, SolidityParserVisitor } from '../grammar';

export class BooleanLiteral extends BaseNode {
  public type = 'BooleanLiteral';
  public constructor(ctx: BooleanLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
