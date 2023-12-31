import { BaseNodeString, formatString } from '../base';
import { PathContext, SolidityParserVisitor } from '../../antlr4';

export class Path extends BaseNodeString {
  type = 'Path' as const;
  constructor(ctx: PathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = formatString(ctx.NonEmptyStringLiteral().getText());
  }
}
