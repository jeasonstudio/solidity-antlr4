import { BaseNode } from './base';
import { MetaTypeContext, SolidityParserVisitor } from '../grammar';

export class MetaType extends BaseNode {
  type = 'MetaType';
  public constructor(ctx: MetaTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
