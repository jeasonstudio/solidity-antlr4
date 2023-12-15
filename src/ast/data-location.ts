import { BaseNode } from './base';
import { DataLocationContext, SolidityParserVisitor } from '../grammar';

export class DataLocation extends BaseNode {
  public type = 'DataLocation';
  public constructor(ctx: DataLocationContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
