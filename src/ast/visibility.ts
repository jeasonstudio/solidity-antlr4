import { BaseNode } from './base';
import { VisibilityContext, SolidityParserVisitor } from '../grammar';

export class Visibility extends BaseNode {
  public type = 'Visibility';
  public constructor(ctx: VisibilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
