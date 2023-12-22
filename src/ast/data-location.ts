import { BaseNodeString, DataLocationKind } from './base';
import { DataLocationContext, SolidityParserVisitor } from '../grammar';

export class DataLocation extends BaseNodeString {
  type = 'DataLocation';
  // @ts-ignore
  name: DataLocationKind | null = null;
  constructor(ctx: DataLocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    if (ctx.Storage()) {
      this.name = 'storage';
    } else if (ctx.Memory()) {
      this.name = 'memory';
    } else if (ctx.Calldata()) {
      this.name = 'calldata';
    }
  }
}
