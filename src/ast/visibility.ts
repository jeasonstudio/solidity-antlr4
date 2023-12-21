import { BaseNode, FunctionVisibility } from './base';
import { VisibilityContext, SolidityParserVisitor } from '../grammar';

export class Visibility extends BaseNode {
  type = 'Visibility';
  visibility: FunctionVisibility | null = null;
  public constructor(ctx: VisibilityContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.visibility = this.getVisibility(ctx);
  }

  public getVisibility(ctx: VisibilityContext): FunctionVisibility | null {
    if (ctx.External?.()) {
      return 'external';
    } else if (ctx.Private?.()) {
      return 'private';
    } else if (ctx.Internal?.()) {
      return 'internal';
    } else if (ctx.Public?.()) {
      return 'public';
    } else {
      return null;
    }
  }

  public toJSON = () => this.visibility;
}
