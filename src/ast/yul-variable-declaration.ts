import { BaseNode } from './base';
import { YulVariableDeclarationContext, SolidityParserVisitor } from '../grammar';

export class YulVariableDeclaration extends BaseNode {
  public type = 'YulVariableDeclaration';
  public constructor(ctx: YulVariableDeclarationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
