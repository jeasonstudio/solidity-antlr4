import { BaseNode } from './base';
import { PathContext, SolidityParserVisitor } from '../grammar';

export class Path extends BaseNode {
  public type = 'Path';
  public constructor(ctx: PathContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
