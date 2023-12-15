import { BaseNode } from './base';
import { EventParameterContext, SolidityParserVisitor } from '../grammar';
import { TypeName } from './type-name';

export class EventParameter extends BaseNode {
  type = 'EventParameter';
  indexed: boolean;
  typeName: TypeName;
  name?: string;
  public constructor(ctx: EventParameterContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.indexed = !!ctx.Indexed();
    this.typeName = ctx.typeName().accept(visitor);
    this.name = ctx.identifier()?.getText();
  }
}
