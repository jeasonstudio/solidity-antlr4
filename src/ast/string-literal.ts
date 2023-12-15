import { BaseNode } from './base';
import { StringLiteralContext, SolidityParserVisitor } from '../grammar';

export class StringLiteral extends BaseNode {
  public type = 'StringLiteral';
  public constructor(ctx: StringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
