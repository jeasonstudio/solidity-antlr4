import { BaseNode } from './base';
import { EventDefinitionContext, SolidityParserVisitor } from '../grammar';
import { EventParameter } from './event-parameter';

export class EventDefinition extends BaseNode {
  public type = 'EventDefinition';
  name: string;
  anonymous: boolean;
  parameters: EventParameter[] = [];
  public constructor(ctx: EventDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().getText();
    this.anonymous = !!ctx.Anonymous();
    this.parameters = ctx.eventParameter().map((param) => param.accept(visitor));
  }
}
