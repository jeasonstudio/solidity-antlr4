import { BaseNode } from './base';
import { ContractDefinitionContext, SolidityParserVisitor } from '../grammar';
import { InheritanceSpecifier } from './inheritance-specifier';
import { Identifier } from './identifier';
import { ContractKind, InterfaceDefinitionNodes } from './interface-definition';

export class ContractDefinition extends BaseNode {
  type = 'ContractDefinition';
  name: Identifier;
  abstract: boolean;
  baseContracts: InheritanceSpecifier[] = [];
  contractKind: ContractKind = 'contract';
  nodes: InterfaceDefinitionNodes[] = [];
  public constructor(ctx: ContractDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = visitor.visit(ctx.identifier()) as Identifier;
    this.abstract = !!ctx.Abstract();
    this.baseContracts = this.visitContextList(
      ctx.inheritanceSpecifierList()?.inheritanceSpecifier(),
    );
    this.nodes = this.visitContextList(ctx.contractBodyElement());
  }
}
