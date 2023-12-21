import { BaseNode, FunctionStateMutability } from './base';
import { StateMutabilityContext, SolidityParserVisitor } from '../grammar';

export class StateMutability extends BaseNode {
  type = 'StateMutability';
  stateMutability: FunctionStateMutability | null = null;

  public constructor(ctx: StateMutabilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.stateMutability = this.getStateMutability(ctx);
  }

  public getStateMutability(ctx: StateMutabilityContext): FunctionStateMutability | null {
    if (ctx.Payable?.()) {
      return 'payable';
    } else if (ctx.Pure?.()) {
      return 'pure';
    } else if (ctx.View?.()) {
      return 'view';
    } else {
      return null;
    }
  }

  public toJSON = () => this.stateMutability;
}
