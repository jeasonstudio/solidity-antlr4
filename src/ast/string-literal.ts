import { BaseNode } from './base';
import { StringLiteralContext, SolidityParserVisitor } from '../grammar';

export class StringLiteral extends BaseNode {
  type = 'StringLiteral';
  value: string;
  constructor(ctx: StringLiteralContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const nameString = ctx.NonEmptyStringLiteral(0)?.getText();
    this.value = nameString ? nameString.substring(1, nameString.length - 1) : '';
  }
}
