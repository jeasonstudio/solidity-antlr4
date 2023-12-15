import { BaseNode } from './base';
import { EventDefinitionContext, SolidityParserVisitor } from '../grammar';

export class EventDefinition extends BaseNode {
  public type = 'EventDefinition';
  public constructor(ctx: EventDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
