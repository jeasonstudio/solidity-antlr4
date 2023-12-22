import { BaseNodeString } from '../base';
import { StateMutabilityContext, SolidityParserVisitor, TerminalNode } from '../../grammar';

type StateMutabilityKind = 'pure' | 'view' | 'payable';

export class StateMutability extends BaseNodeString {
  type = 'StateMutability';
  name: StateMutabilityKind | null = null;

  constructor(ctx: StateMutabilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = this.getStateMutability(ctx);
  }

  getStateMutability(ctx: StateMutabilityContext): StateMutabilityKind | null {
    const format = (n: TerminalNode | TerminalNode[] | null) => {
      if (Array.isArray(n) && !!n.length) {
        return true;
      } else if (!!n) {
        return true;
      }
      return false;
    };
    if (format(ctx.Payable?.())) {
      return 'payable';
    } else if (format(ctx.Pure?.())) {
      return 'pure';
    } else if (format(ctx.View?.())) {
      return 'view';
    } else {
      return null;
    }
  }
}
