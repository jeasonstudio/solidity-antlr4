import { BaseNode } from './base';
import { UncheckedBlockContext, SolidityParserVisitor } from '../grammar';

export class UncheckedBlock extends BaseNode {
  public type = 'UncheckedBlock';
  public constructor(ctx: UncheckedBlockContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
