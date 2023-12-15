import { BaseNode } from './base';
import { FunctionTypeNameContext, SolidityParserVisitor } from '../grammar';

export class FunctionTypeName extends BaseNode {
  public type = 'FunctionTypeName';
  public constructor(ctx: FunctionTypeNameContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
