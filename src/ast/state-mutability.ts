import { BaseNode, StateMutabilityKind } from './base';
import { StateMutabilityContext, SolidityParserVisitor, TerminalNode } from '../grammar';

export class StateMutability extends BaseNode {
  type = 'StateMutability';
  stateMutability: StateMutabilityKind | null = null;

  public constructor(ctx: StateMutabilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.stateMutability = this.getStateMutability(ctx);
  }

  public getStateMutability(ctx: StateMutabilityContext): StateMutabilityKind | null {
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

  public toJSON = () => this.stateMutability;
}
