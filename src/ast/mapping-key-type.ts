import { BaseNodeString } from './base';
import { MappingKeyTypeContext, SolidityParserVisitor } from '../grammar';

export class MappingKeyType extends BaseNodeString {
  public type = 'MappingKeyType';
  public constructor(ctx: MappingKeyTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
