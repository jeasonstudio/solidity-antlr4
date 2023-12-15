import { BaseNode } from './base';
import { MappingTypeContext, SolidityParserVisitor } from '../grammar';

export class MappingType extends BaseNode {
  public type = 'MappingType';
  public constructor(ctx: MappingTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
