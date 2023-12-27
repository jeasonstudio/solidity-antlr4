import { BaseNode } from '../base';
import { SourceUnitContext, SolidityParserVisitor } from '../../antlr4';
import { ImportDirective } from './import-directive';
import { PragmaDirective } from './pragma-directive';
import { UsingDirective } from './using-directive';
import {
  VariableDeclaration,
  UserDefinedValueTypeDefinition,
  StructDefinition,
  FunctionDefinition,
  ErrorDefinition,
  EnumDefinition,
  ContractDefinition,
} from '../declaration';

type SourceUnitNodes =
  | ContractDefinition
  | EnumDefinition
  | ErrorDefinition
  | FunctionDefinition
  | ImportDirective
  | PragmaDirective
  | StructDefinition
  | UserDefinedValueTypeDefinition
  | UsingDirective
  | VariableDeclaration;

export class SourceUnit extends BaseNode {
  type = 'SourceUnit';
  nodes: SourceUnitNodes[] = [];
  constructor(ctx: SourceUnitContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.nodes = (ctx.children || []).map((child) => visitor.visit(child)!).filter(Boolean);
  }
}
