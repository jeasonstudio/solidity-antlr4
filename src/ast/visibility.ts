import { BaseNode, VisibilityKind } from './base';
import { VisibilityContext, SolidityParserVisitor, TerminalNode } from '../grammar';

export class Visibility extends BaseNode {
  type = 'Visibility';
  visibility: VisibilityKind | null = null;
  constructor(ctx: VisibilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.visibility = this.getVisibility(ctx);
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

  toJSON = () => this.visibility;
}
