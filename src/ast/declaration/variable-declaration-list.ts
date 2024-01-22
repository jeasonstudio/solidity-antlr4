import { BaseNodeList } from '../base';
import { VariableDeclarationListContext, SolidityParserVisitor } from '../../antlr4';
import { VariableDeclaration } from './variable-declaration';

export type VariableDeclarationList = VariableDeclaration[];

export const VariableDeclarationList = class extends BaseNodeList<VariableDeclaration> {
  type = 'VariableDeclarationList' as const;
  constructor(ctx: VariableDeclarationListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.variableDeclaration(), visitor);
  }
};
