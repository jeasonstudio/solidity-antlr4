import { BaseNode } from './base';
import { StructMemberContext, SolidityParserVisitor } from '../grammar';

export class StructMember extends BaseNode {
  public type = 'StructMember';
  public constructor(ctx: StructMemberContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
