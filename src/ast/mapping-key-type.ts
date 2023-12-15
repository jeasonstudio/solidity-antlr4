import { BaseNode } from './base';
import { MappingKeyTypeContext, SolidityParserVisitor } from '../grammar';

export class MappingKeyType extends BaseNode {
  public type = 'MappingKeyType';
  public constructor(ctx: MappingKeyTypeContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
