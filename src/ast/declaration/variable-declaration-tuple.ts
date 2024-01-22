import { BaseNodeList } from '../base';
import { VariableDeclarationTupleContext, SolidityParserVisitor } from '../../antlr4';
import { VariableDeclaration } from './variable-declaration';

export type VariableDeclarationTuple = VariableDeclaration[];

export const VariableDeclarationTuple = class extends BaseNodeList<VariableDeclaration> {
  type = 'VariableDeclarationTuple' as const;
  constructor(ctx: VariableDeclarationTupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.variableDeclaration(), visitor);
  }
};
