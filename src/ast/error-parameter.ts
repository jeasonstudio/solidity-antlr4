import { BaseNode } from './base';
import { ErrorParameterContext, SolidityParserVisitor } from '../grammar';

export class ErrorParameter extends BaseNode {
  public type = 'ErrorParameter';
  public constructor(ctx: ErrorParameterContext, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
