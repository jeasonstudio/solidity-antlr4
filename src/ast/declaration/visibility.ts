import { BaseNodeString } from '../base';
import { VisibilityContext, SolidityParserVisitor, TerminalNode } from '../../antlr4';

type VisibilityKind = 'external' | 'internal' | 'public' | 'private';

export class Visibility extends BaseNodeString {
  type = 'Visibility';
  name: VisibilityKind | null = null;
  constructor(ctx: VisibilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    const format = (n: TerminalNode | TerminalNode[] | null | undefined) => {
      if (Array.isArray(n)) {
        return !!n.length;
      } else if (!!n?.symbol) {
        return true;
      }
      return false;
    };

    if (format(ctx.External?.())) {
      this.name = 'external';
    } else if (format(ctx.Internal?.())) {
      this.name = 'internal';
    } else if (format(ctx.Private?.())) {
      this.name = 'private';
    } else if (format(ctx.Public?.())) {
      this.name = 'public';
    } else {
      this.name = null;
    }
  }
}
