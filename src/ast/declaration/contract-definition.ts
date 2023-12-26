import { BaseNode } from '../base';
import {
  ContractDefinitionContext,
  InterfaceDefinitionContext,
  LibraryDefinitionContext,
  SolidityParserVisitor,
} from '../../grammar';
import { EnumDefinition } from './enum-definition';
import { ErrorDefinition } from './error-definition';
import { EventDefinition } from './event-definition';
import { FunctionDefinition } from './function-definition';
import { ModifierDefinition } from './modifier-definition';
import { StructDefinition } from './struct-definition';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { UsingDirective, InheritanceSpecifier } from '../meta';
import { VariableDeclaration } from './variable-declaration';
import { Identifier } from '../expression';

type ContractKind = 'contract' | 'interface' | 'library';

type ContractDefinitionNodes =
  | EnumDefinition
  | ErrorDefinition
  | EventDefinition
  | FunctionDefinition
  | ModifierDefinition
  | StructDefinition
  | UserDefinedValueTypeDefinition
  | UsingDirective
  | VariableDeclaration;

export class ContractDefinition extends BaseNode {
  type = 'ContractDefinition';
  name: Identifier;
  contractKind: ContractKind = 'contract';
  abstract: boolean = false;
  baseContracts: InheritanceSpecifier[] = [];
  nodes: ContractDefinitionNodes[] = [];
  constructor(
    ctx: ContractDefinitionContext | InterfaceDefinitionContext | LibraryDefinitionContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);
    this.name = visitor.visit(ctx.identifier()) as Identifier;
    this.nodes = ctx.contractBodyElement().map((element) => element.accept(visitor));

    if (ctx instanceof InterfaceDefinitionContext) {
      this.contractKind = 'interface';
    } else if (ctx instanceof LibraryDefinitionContext) {
      this.contractKind = 'library';
    } else {
      this.contractKind = 'contract';
      this.abstract = !!ctx.Abstract();
      this.baseContracts = ctx.inheritanceSpecifierList()?.accept(visitor) ?? [];
    }
  }
}

export { ContractDefinition as InterfaceDefinition, ContractDefinition as LibraryDefinition };
