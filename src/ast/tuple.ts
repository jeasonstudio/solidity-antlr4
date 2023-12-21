import { BaseNode } from './base';
import { TupleContext, SolidityParserVisitor } from '../grammar';

export class Tuple extends BaseNode {
  type = 'Tuple';
  public constructor(ctx: TupleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
