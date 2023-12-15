import { BaseNodeString } from './base';
import { PathContext, SolidityParserVisitor } from '../grammar';

export class Path extends BaseNodeString {
  type = 'Path';
  public constructor(ctx: PathContext, visitor: SolidityParserVisitor<any>) {
    const pathString = ctx.NonEmptyStringLiteral().getText();
    const value = pathString.substring(1, pathString.length - 1);
    super(value, visitor);
  }
}
