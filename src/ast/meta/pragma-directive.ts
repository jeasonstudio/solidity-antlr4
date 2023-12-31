import { BaseNode } from '../base';
import { PragmaDirectiveContext, SolidityParserVisitor } from '../../antlr4';

export class PragmaDirective extends BaseNode {
  type = 'PragmaDirective' as const;
  literals: string[] = [];

  constructor(ctx: PragmaDirectiveContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    ctx.PragmaToken().forEach((t) => {
      const literals = t.getText().split(' ').filter(Boolean);
      this.literals.push(...literals);
    });
  }
}
