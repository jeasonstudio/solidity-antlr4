import { BaseNodeString } from '../base';
import { DataLocationContext, SolidityParserVisitor } from '../../grammar';

type DataLocationName = 'storage' | 'memory' | 'calldata';

export class DataLocation extends BaseNodeString {
  type = 'DataLocation';
  name: DataLocationName | null = null;
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
