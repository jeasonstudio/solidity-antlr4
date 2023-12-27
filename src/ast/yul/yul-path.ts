import { BaseNodeString } from '../base';
import { YulPathContext, SolidityParserVisitor } from '../../antlr4';

export class YulPath extends BaseNodeString {
  type = 'YulPath' as const;
  constructor(ctx: YulPathContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
  }
}
