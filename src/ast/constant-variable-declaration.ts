import { BaseNode } from './base';
import { ConstantVariableDeclarationContext, SolidityParserVisitor } from '../grammar';

export class ConstantVariableDeclaration extends BaseNode {
  public type = 'ConstantVariableDeclaration';
  public constructor(ctx: ConstantVariableDeclarationContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
