import { BaseNode } from './base';
import { StateVariableDeclarationContext, SolidityParserVisitor } from '../grammar';

export class StateVariableDeclaration extends BaseNode {
  public type = 'StateVariableDeclaration';
  public constructor(ctx: StateVariableDeclarationContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
