import { BaseNodeString } from '../base';
import { MappingKeyTypeContext, SolidityParserVisitor } from '../../antlr4';

export class MappingKeyType extends BaseNodeString {
  type = 'MappingKeyType' as const;
  constructor(ctx: MappingKeyTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
