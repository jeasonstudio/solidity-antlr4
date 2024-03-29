import { BaseNodeString } from '../base';
import { TypeNameContext, SolidityParserVisitor } from '../../antlr4';
import { Expression } from '../expression';
import { ElementaryTypeName } from './elementary-type-name';
import { FunctionTypeName } from './function-type-name';
import { MappingType } from './mapping-type';
import { IdentifierPath } from '../meta';

class TypeNameWithArray extends BaseNodeString {
  type = 'TypeName' as const;
  baseType: ElementaryTypeName | FunctionTypeName | MappingType | IdentifierPath;
  expression: Expression | null;

  constructor(ctx: TypeNameContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);

    const target = [
      ctx.elementaryTypeName(),
      ctx.functionTypeName(),
      ctx.mappingType(),
      ctx.identifierPath(),
      ctx.typeName(),
    ].find(Boolean);

    if (!ctx.LBrack()) {
      return target!.accept(visitor);
    }

    this.name = ctx.getText();
    this.baseType = target!.accept(visitor);
    this.expression = ctx.expression()?.accept(visitor) ?? null;
  }
}

export type TypeName =
  | ElementaryTypeName
  | FunctionTypeName
  | MappingType
  | IdentifierPath
  | TypeNameWithArray;

export const TypeName = TypeNameWithArray;
