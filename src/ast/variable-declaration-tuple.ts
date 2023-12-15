import { BaseNode } from './base';
import { VariableDeclarationTupleContext, SolidityParserVisitor } from '../grammar';

export class VariableDeclarationTuple extends BaseNode {
  public type = 'VariableDeclarationTuple';
  public constructor(ctx: VariableDeclarationTupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
