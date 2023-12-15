import { BaseNode } from './base';
import { ImportDirectiveContext, SolidityParserVisitor } from '../grammar';

export class ImportDirective extends BaseNode {
  public type = 'ImportDirective';
  public constructor(ctx: ImportDirectiveContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
