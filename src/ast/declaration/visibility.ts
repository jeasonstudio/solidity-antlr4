import { BaseNodeString } from '../base';
import { VisibilityContext, SolidityParserVisitor, TerminalNode } from '../../grammar';

type VisibilityKind = 'external'| 'internal' | 'public'  | 'private';

export class Visibility extends BaseNodeString {
  type = 'Visibility';
  name: VisibilityKind | null = null;
  constructor(ctx: VisibilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = this.getVisibility(ctx);
  }

  getVisibility(ctx: VisibilityContext): VisibilityKind | null {
    const format = (n: TerminalNode | TerminalNode[] | null | undefined) => {
      if (Array.isArray(n)) {
        return !!n.length;
      } else if (!!n?.symbol) {
        return true;
      }
      return false;
    };

    if (format(ctx.External?.())) {
      return 'external';
    } else if (format(ctx.Internal?.())) {
      return 'internal';
    } else if (format(ctx.Private?.())) {
      return 'private';
    } else if (format(ctx.Public?.())) {
      return 'public';
    } else {
      return null;
    }
  }
}
