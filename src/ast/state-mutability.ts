import { BaseNode } from './base';
import { StateMutabilityContext, SolidityParserVisitor } from '../grammar';

export class StateMutability extends BaseNode {
  public type = 'StateMutability';
  public constructor(ctx: StateMutabilityContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
