import { BaseNode } from './base';
import { SourceUnitContext, SolidityParserVisitor } from '../grammar';
import { ContractDefinition } from './contract-definition';
import { EnumDefinition } from './enum-definition';
import { ErrorDefinition } from './error-definition';
import { FunctionDefinition } from './function-definition';
import { ImportDirective } from './import-directive';
import { PragmaDirective } from './pragma-directive';
import { StructDefinition } from './struct-definition';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { UsingDirective } from './using-directive';
import { VariableDeclaration } from './variable-declaration';

export class SourceUnit extends BaseNode {
  type = 'SourceUnit';
  nodes: (
    | ContractDefinition
    | EnumDefinition
    | ErrorDefinition
    | FunctionDefinition
    | ImportDirective
    | PragmaDirective
    | StructDefinition
    | UserDefinedValueTypeDefinition
    | UsingDirective
    | VariableDeclaration
  )[] = [];
  constructor(ctx: SourceUnitContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.nodes = (ctx.children || []).map((child) => visitor.visit(child)!).filter(Boolean);
  }
}
