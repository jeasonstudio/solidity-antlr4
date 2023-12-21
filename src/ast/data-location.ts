import { BaseNode, TypeDataLocation } from './base';
import { DataLocationContext, SolidityParserVisitor } from '../grammar';

export class DataLocation extends BaseNode {
  type = 'DataLocation';
  name: TypeDataLocation | null;
  public constructor(ctx: DataLocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    if (ctx.Storage()) {
      this.name = 'storage';
    } else if (ctx.Memory()) {
      this.name = 'memory';
    } else if (ctx.Calldata()) {
      this.name = 'calldata';
    }
  }
  public toJSON = () => this.name;
}
