import { BaseNode } from './base';
import { TypeNameContext, SolidityParserVisitor } from '../grammar';

export class TypeName extends BaseNode {
  public type = 'TypeName';
  public constructor(ctx: TypeNameContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
