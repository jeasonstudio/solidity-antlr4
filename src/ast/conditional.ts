import { BaseNode } from './base';
import { ConditionalContext, SolidityParserVisitor } from '../grammar';

export class Conditional extends BaseNode {
  type = 'Conditional';
  public constructor(ctx: ConditionalContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
