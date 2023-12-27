/* eslint-disable @typescript-eslint/no-use-before-define */
import { ParseTree, ParserRuleContext, SolidityParserVisitor } from '../grammar';
import { keysIn } from 'lodash-es';

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

export const formatString = (str: string) => {
  return str.substring(1, str.length - 1);
};

export const isSyntaxNode = <T extends any>(node: T): boolean => {
  return (node instanceof BaseNode || node instanceof BaseNodeString) && node.type !== undefined;
};

const serializeNode = <T extends BaseNode>(node: T) => {
  if (!isSyntaxNode(node)) return node;

  const accessableKeys = keysIn(node).filter(
    (key) => !['context'].includes(key) && typeof node[key] !== 'function',
  );
  return Object.fromEntries(
    accessableKeys.map((key) => {
      if (isSyntaxNode(node[key])) {
        return [key, node[key].serialize()];
      } else if (Array.isArray(node[key])) {
        return [key, serializeNodeList(node[key])];
      }
      return [key, node[key]];
    }),
  );
};

const serializeNodeList = <T extends BaseNodeList<any> | any[]>(list: T) => {
  const result: any[] = [];
  for (let index = 0; index < list.length; index += 1) {
    const item = list[index];
    result.push(isSyntaxNode(item) ? item.serialize() : item);
  }
  return result;
};

const serializeNodeString = <T extends BaseNodeString>(node: T) => {
  return node.name;
};

export abstract class BaseNode {
  type: string;
  src: `${number}:${number}`; // `{start}:{length}`
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
    this.context = ctx;
  }

  /** @ignore */
  context: ParserRuleContext;
  /** @ignore */
  serialize = () => serializeNode(this);
}

export abstract class BaseNodeList<T extends any = BaseNode> extends Array<T> {
  constructor(
    ctxList: ParseTree[],
    visitor: SolidityParserVisitor<any>,
    formatter: (item: ParseTree) => T = (ctx) => ctx.accept(visitor),
  ) {
    super(...ctxList.map(formatter));
  }
  /** @ignore */
  serialize = () => serializeNodeList(this);
}

export abstract class BaseNodeString extends BaseNode {
  name: string | any;
  constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
  }
  /** @ignore */
  serialize = () => serializeNodeString(this);
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
      // @ts-expect-error
      return target.accept(visitor) as T;
    }
  }
}
