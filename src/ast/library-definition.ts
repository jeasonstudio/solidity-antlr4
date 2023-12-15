import { BaseNode } from './base';
import { LibraryDefinitionContext, SolidityParserVisitor } from '../grammar';

export class LibraryDefinition extends BaseNode {
  public type = 'LibraryDefinition';
  public constructor(ctx: LibraryDefinitionContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
