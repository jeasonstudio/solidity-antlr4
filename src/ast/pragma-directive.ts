import { BaseNode } from './base';
import { PragmaDirectiveContext, SolidityParserVisitor } from '../grammar';

export class PragmaDirective extends BaseNode {
  public type = 'PragmaDirective';
  public constructor(ctx: PragmaDirectiveContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
