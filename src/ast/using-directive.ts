import { BaseNode } from './base';
import { UsingDirectiveContext, SolidityParserVisitor } from '../grammar';

export class UsingDirective extends BaseNode {
  public type = 'UsingDirective';
  public constructor(ctx: UsingDirectiveContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
