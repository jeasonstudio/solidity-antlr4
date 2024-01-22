import { BaseNodeList } from '../base';
import { ParameterListContext, SolidityParserVisitor } from '../../antlr4';
import { ParameterDeclaration } from '../declaration';

export type ParameterList = ParameterDeclaration[];

export const ParameterList = class extends BaseNodeList<ParameterDeclaration> {
  type = 'ParameterList' as const;
  constructor(ctx: ParameterListContext, visitor: SolidityParserVisitor<any>) {
    super(ctx.parameterDeclaration(), visitor);
  }
};
