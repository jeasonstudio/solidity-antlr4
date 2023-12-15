import { BaseNode } from './base';
import { InterfaceDefinitionContext, SolidityParserVisitor } from '../grammar';
import { InheritanceSpecifier } from './inheritance-specifier';
import { EnumDefinition } from './enum-definition';
import { ErrorDefinition } from './error-definition';
import { EventDefinition } from './event-definition';
import { FunctionDefinition } from './function-definition';
import { ModifierDefinition } from './modifier-definition';
import { StructDefinition } from './struct-definition';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { UsingDirective } from './using-directive';
import { VariableDeclaration } from './variable-declaration';
import { Identifier } from './identifier';

export type ContractKind = 'contract' | 'interface' | 'library';

export type InterfaceDefinitionNodes =
  | EnumDefinition
  | ErrorDefinition
  | EventDefinition
  | FunctionDefinition
  | ModifierDefinition
  | StructDefinition
  | UserDefinedValueTypeDefinition
  | UsingDirective
  | VariableDeclaration;

export class InterfaceDefinition extends BaseNode {
  type = 'InterfaceDefinition';
  name: Identifier;
  contractKind: ContractKind = 'interface';
  nodes: InterfaceDefinitionNodes[];
  public constructor(ctx: InterfaceDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = visitor.visit(ctx.identifier()) as Identifier;
    const elements = ctx.contractBodyElement() || [];
    elements.forEach((element) => {
      const nodes = this.visitContextList<InterfaceDefinitionNodes>(element.children);
      this.nodes.push(...nodes);
    });
  }
}
