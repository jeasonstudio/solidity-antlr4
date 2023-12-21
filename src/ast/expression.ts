import { BaseNode } from './base';
import { ExpressionContext, SolidityParserVisitor } from '../grammar';

export class Expression extends BaseNode {
  type = 'Expression';
  public constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
