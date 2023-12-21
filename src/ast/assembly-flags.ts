import { formatString } from './base';
import { AssemblyFlagsContext, SolidityParserVisitor } from '../grammar';

export class AssemblyFlags extends Array<string> {
  type = 'AssemblyFlags';
  public constructor(ctx: AssemblyFlagsContext, _visitor: SolidityParserVisitor<any>) {
    super(...ctx.AssemblyFlagString().map((flag) => formatString(flag.getText())));
  }
}
