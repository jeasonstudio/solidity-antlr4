import { BaseNode } from './base';
import { PathContext, SolidityParserVisitor } from '../grammar';

export class Path extends BaseNode {
  type = 'Path';
  name: string;
  public constructor(ctx: PathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const pathString = ctx.NonEmptyStringLiteral().getText();
    this.name = pathString.substring(1, pathString.length - 1);
  }
  public toJSON = () => this.name;
}
