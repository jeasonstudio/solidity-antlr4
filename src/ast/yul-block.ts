import { BaseNode } from './base';
import { YulBlockContext, SolidityParserVisitor } from '../grammar';

export class YulBlock extends BaseNode {
  public type = 'YulBlock';
  public constructor(ctx: YulBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
