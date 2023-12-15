import { BaseNode } from './base';
import { ModifierInvocationContext, SolidityParserVisitor } from '../grammar';

export class ModifierInvocation extends BaseNode {
  public type = 'ModifierInvocation';
  public constructor(ctx: ModifierInvocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
