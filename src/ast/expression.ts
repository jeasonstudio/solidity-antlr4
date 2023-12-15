import { BaseNode } from './base';
import { ExpressionContext, SolidityParserVisitor } from '../grammar';

export class Expression extends BaseNode {
  public type = 'Expression';
  public constructor(ctx: ExpressionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
