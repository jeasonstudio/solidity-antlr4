import { BaseNode } from './base';
import { SourceUnitContext, SolidityParserVisitor } from '../grammar';

export class SourceUnit extends BaseNode {
  public type = 'SourceUnit';
  public constructor(ctx: SourceUnitContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
