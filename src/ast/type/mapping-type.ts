import { BaseNode } from '../base';
import { MappingTypeContext, SolidityParserVisitor } from '../../grammar';
import { Identifier } from '../expression';
import { MappingKeyType } from './mapping-key-type';
import { TypeName } from './type-name';

export class MappingType extends BaseNode {
  type = 'MappingType';
  name: Identifier | null = null;
  keyType: MappingKeyType | null = null;
  valueType: TypeName | null = null;
  constructor(ctx: MappingTypeContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx._name?.accept(visitor) ?? null;
    this.keyType = ctx._key?.accept(visitor) ?? null;
    this.valueType = ctx._value?.accept(visitor) ?? null;
  }
}
