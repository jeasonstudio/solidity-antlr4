import { BaseNode } from './base';
import { AssemblyFlagsContext, SolidityParserVisitor } from '../grammar';

export class AssemblyFlags extends BaseNode {
  public type = 'AssemblyFlags';
  public constructor(ctx: AssemblyFlagsContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
