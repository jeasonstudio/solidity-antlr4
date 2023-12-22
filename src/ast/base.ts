import { ParseTree, ParserRuleContext, SolidityParserVisitor } from '../grammar';

export class Position {
  static create(line: number, column: number): Position {
    return new Position(line, column);
  }
  constructor(
    // 1-based
    public line: number,
    // 0-based
    public column: number,
  ) {}
}

export class Location {
  static create(start: Position, end: Position): Location {
    return new Location(start, end);
  }
  constructor(
    public start: Position,
    public end: Position,
  ) {}
}

export abstract class BaseNode {
  type: string;
  src: `${number}:${number}`; // `{start}:{length}:{file}`
  range: [number, number];
  location: Location;

  constructor(ctx: ParserRuleContext, _visitor: SolidityParserVisitor<any>) {
    const start = ctx.start?.start ?? 0;
    const end = ctx.stop?.stop ?? start;
    this.range = [start, end];
    this.src = `${start}:${end - start}`;

    const startPosition = Position.create(ctx.start?.line ?? 1, ctx.start?.column ?? 0);
    const endPosition = Position.create(
      ctx.stop?.line ?? startPosition.line,
      ctx.stop?.column ?? startPosition.column,
    );
    this.location = Location.create(startPosition, endPosition);
  }

  toJSON: () => any;
}

export abstract class BaseNodeList<T extends BaseNode> extends Array<T> {
  constructor(ctxList: ParseTree[], visitor: SolidityParserVisitor<any>) {
    super(...ctxList.map((ctx) => ctx.accept(visitor)));
  }
}

export abstract class BaseNodeString extends BaseNode {
  name: string | any;
  constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
    this.toJSON = () => this.name;
  }
}

export abstract class BaseNodeUnion<
  T extends BaseNode | BaseNodeList<BaseNode> = BaseNode,
> extends BaseNode {
  constructor(
    _ctx: ParserRuleContext,
    list: (ParserRuleContext | null)[],
    visitor: SolidityParserVisitor<any>,
  ) {
    super(_ctx, visitor);
    const target = list.find(Boolean);
    if (target) {
      // this = target.accept(visitor) as T;
      // Object.assign(this, target.accept(visitor) as T);
      return target.accept(visitor) as T as any;
    }
  }
}

export const formatString = (str: string) => {
  return str.substring(1, str.length - 1);
};
