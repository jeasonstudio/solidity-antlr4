import { BaseNode } from './base';
import { ParameterListContext, SolidityParserVisitor } from '../grammar';

export class ParameterList extends BaseNode {
  public type = 'ParameterList';
  public constructor(ctx: ParameterListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
