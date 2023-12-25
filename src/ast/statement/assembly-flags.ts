import { BaseNodeList, formatString } from '../base';
import { AssemblyFlagsContext, SolidityParserVisitor } from '../../grammar';

export class AssemblyFlags extends BaseNodeList<any> {
  type = 'AssemblyFlags';
  constructor(ctx: AssemblyFlagsContext, _visitor: SolidityParserVisitor<any>) {
    super(ctx.AssemblyFlagString(), _visitor, (flag) => formatString(flag.getText()));
  }
}
