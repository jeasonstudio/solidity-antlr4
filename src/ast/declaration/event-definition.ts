import { BaseNode } from '../base';
import { EventDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { EventParameter } from './variable-declaration';

export class EventDefinition extends BaseNode {
  type = 'EventDefinition';
  name: string;
  anonymous: boolean;
  parameters: EventParameter[] = [];
  constructor(ctx: EventDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().getText();
    this.anonymous = !!ctx.Anonymous();
    this.parameters = ctx.eventParameter().map((param) => param.accept(visitor));
  }
}
