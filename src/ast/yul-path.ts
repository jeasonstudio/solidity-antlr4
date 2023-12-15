import { BaseNode } from './base';
import { YulPathContext, SolidityParserVisitor } from '../grammar';

export class YulPath extends BaseNode {
  public type = 'YulPath';
  public constructor(ctx: YulPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
