import { BaseNode } from '../base';
import { BlockContext, SolidityParserVisitor, UncheckedBlockContext } from '../../antlr4';
import { Statement } from './statement';

export class Block extends BaseNode {
  type = 'Block';
  unchecked: boolean = false;
  statements: Statement[] = [];
  constructor(_ctx: BlockContext | UncheckedBlockContext, visitor: SolidityParserVisitor<any>) {
    super(_ctx, visitor);
    this.unchecked = _ctx instanceof UncheckedBlockContext;
    const ctx = _ctx instanceof UncheckedBlockContext ? _ctx.block() : _ctx;

    // because it starts with `{` and ends with `}` we need to skip those
    const statementsCount = ctx.getChildCount() >= 2 ? ctx.getChildCount() : 2;

    for (let index = 1; index < statementsCount - 1; index += 1) {
      const statement = ctx.getChild(index);
      if (!statement) return;
      this.statements.push(statement.accept(visitor));
    }
  }
}

export { Block as UncheckedBlock };
