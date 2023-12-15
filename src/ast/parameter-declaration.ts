import { BaseNode } from './base';
import { ParameterDeclarationContext, SolidityParserVisitor } from '../grammar';

export class ParameterDeclaration extends BaseNode {
  public type = 'ParameterDeclaration';
  public constructor(ctx: ParameterDeclarationContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
