import { BaseNode } from './base';
import { LibraryDefinitionContext, SolidityParserVisitor } from '../grammar';
import { ContractKind, InterfaceDefinitionNodes } from './interface-definition';
import { Identifier } from './identifier';

export class LibraryDefinition extends BaseNode {
  type = 'LibraryDefinition';
  name: Identifier;
  contractKind: ContractKind = 'interface';
  nodes: InterfaceDefinitionNodes[];
  public constructor(ctx: LibraryDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = visitor.visit(ctx.identifier()) as Identifier;
    const elements = ctx.contractBodyElement() || [];
    elements.forEach((element) => {
      const nodes = this.visitContextList<InterfaceDefinitionNodes>(element.children);
      this.nodes.push(...nodes);
    });
  }
}
