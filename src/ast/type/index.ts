import { ElementaryTypeName } from './elementary-type-name';
import { FunctionTypeName } from './function-type-name';
import { MappingKeyType } from './mapping-key-type';
import { MappingType } from './mapping-type';
import { MetaType } from './meta-type';
import { TypeName } from './type-name';

export type TypeNode =
  | ElementaryTypeName
  | FunctionTypeName
  | MappingKeyType
  | MappingType
  | MetaType
  | TypeName;

export type TypeNodeType = TypeNode['type'];

export { ElementaryTypeName, FunctionTypeName, MappingKeyType, MappingType, MetaType, TypeName };
