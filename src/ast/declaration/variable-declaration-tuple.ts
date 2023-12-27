import { BaseNodeList } from '../base';
import { VariableDeclarationTupleContext, SolidityParserVisitor } from '../../antlr4';
import { VariableDeclaration } from './variable-declaration';

export class VariableDeclarationTuple extends BaseNodeList<VariableDeclaration> {
  type = 'VariableDeclarationTuple';
  constructor(ctx: VariableDeclarationTupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.variableDeclaration(), visitor);
  }
}
