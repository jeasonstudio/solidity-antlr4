import { BaseNode } from './base';
import { NumberLiteralContext, SolidityParserVisitor } from '../grammar';

export class NumberLiteral extends BaseNode {
  public type = 'NumberLiteral';
  public constructor(ctx: NumberLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
