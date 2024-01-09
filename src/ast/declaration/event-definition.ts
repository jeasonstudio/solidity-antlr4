import { BaseNode } from '../base';
import { EventDefinitionContext, SolidityParserVisitor } from '../../antlr4';
import { EventParameter } from './variable-declaration';
import { Identifier } from '../expression';

export class EventDefinition extends BaseNode {
  type = 'EventDefinition' as const;
  name: Identifier;
  anonymous: boolean;
  parameters: EventParameter[] = [];
  constructor(ctx: EventDefinitionContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.identifier().accept(visitor);
    this.anonymous = !!ctx.Anonymous();
    this.parameters = ctx.eventParameter().map((param) => param.accept(visitor));
  }
}
