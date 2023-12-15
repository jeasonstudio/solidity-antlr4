import { BaseNodeList } from './base';
import { ParameterListContext, SolidityParserVisitor } from '../grammar';
import { ParameterDeclaration } from './parameter-declaration';

export class ParameterList extends BaseNodeList<ParameterDeclaration> {
  public type = 'ParameterList';
  public constructor(ctx: ParameterListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.parameterDeclaration(), visitor);
  }
}
