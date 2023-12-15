import { BaseNode } from './base';
import { EventParameterContext, SolidityParserVisitor } from '../grammar';

export class EventParameter extends BaseNode {
  public type = 'EventParameter';
  public constructor(ctx: EventParameterContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
