import { BaseNodeList } from '../base';
import { ParameterListContext, SolidityParserVisitor } from '../../grammar';
import { ParameterDeclaration } from '../declaration';

export class ParameterList extends BaseNodeList<ParameterDeclaration> {
  type = 'ParameterList';
  constructor(ctx: ParameterListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.parameterDeclaration(), visitor);
  }
}
