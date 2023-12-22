import { BaseNodeString, formatString } from './base';
import { PathContext, SolidityParserVisitor } from '../grammar';

export class Path extends BaseNodeString {
  type = 'Path';
  constructor(ctx: PathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = formatString(ctx.NonEmptyStringLiteral().getText());
  }
}
