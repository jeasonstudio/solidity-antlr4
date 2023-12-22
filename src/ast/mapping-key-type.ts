import { BaseNodeString } from './base';
import { MappingKeyTypeContext, SolidityParserVisitor } from '../grammar';

export class MappingKeyType extends BaseNodeString {
  type = 'MappingKeyType';
  constructor(ctx: MappingKeyTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
