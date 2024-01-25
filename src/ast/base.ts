/* eslint-disable @typescript-eslint/no-use-before-define */
import { SyntaxNode, SyntaxNodeType } from './index';
import { ParseTree, ParserRuleContext, SolidityParserVisitor } from '../antlr4';

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
  static create(start: Position, end: Position, source?: `${number}:${number}`): Location {
    return new Location(start, end, source);
  }
  constructor(
    public start: Position,
    public end: Position,
    public source?: `${number}:${number}`, // `{start}:{length}`
  ) {}
}

export type UnionSyntaxNode<T extends Record<string, typeof BaseNode>> = InstanceType<T[keyof T]>;
export type UnionSyntaxNodeType<T extends Record<string, typeof BaseNode>> = keyof T;
export type LookUp<U extends { type: any }, T> = U extends infer P
  ? P extends { type: any }
    ? T extends P['type']
      ? P
      : never
    : never
  : never;

export const formatString = (str: string) => {
  return str.substring(1, str.length - 1);
};

export const isSyntaxNode = <T extends SyntaxNode>(node: any): node is T => {
  return (
    (node instanceof BaseNode || node instanceof BaseNodeString || node instanceof BaseNodeUnion) &&
    !!node.type
  );
};

export const isSyntaxNodeList = <T extends BaseNodeList>(node: any): node is T => {
  return node instanceof BaseNodeList || (Array.isArray(node) && node.every(isSyntaxNode));
};

export const keysInNode = <T extends BaseNode>(node: T): string[] => {
  const forbiddenKeys = ['context', 'serialize', 'print'];
  const keys: string[] = [];

  for (const key in node) {
    if (Object.prototype.hasOwnProperty.call(node, key) && !forbiddenKeys.includes(key)) {
      keys.push(key);
    }
  }
  return keys;
};

export abstract class BaseNode {
  type: SyntaxNodeType;
  range: [number, number];
  location: Location;

  constructor(ctx: ParserRuleContext, _visitor: SolidityParserVisitor<any>) {
    const start = ctx.start?.start ?? 0;
    const end = ctx.stop?.stop ?? start;
    this.range = [start, end];

    const startPosition = Position.create(ctx.start?.line ?? 1, ctx.start?.column ?? 0);
    const endPosition = Position.create(
      ctx.stop?.line ?? startPosition.line,
      ctx.stop?.column ?? startPosition.column,
    );
    this.location = Location.create(startPosition, endPosition, `${start}:${end - start}`);
    // this.context = ctx;
  }

  /** @ignore */
  // context: ParserRuleContext;

  /** @ignore */
  // print?: SyntaxPrint<typeof this>;
}

export abstract class BaseNodeList<T extends any = BaseNode> extends Array<T> {
  constructor(
    ctxList: (ParseTree | any)[],
    visitor: SolidityParserVisitor<any>,
    formatter: (item: ParseTree) => T = (ctx) => ctx.accept(visitor!),
  ) {
    super(...ctxList.map(formatter));
  }
}

export abstract class BaseNodeString extends BaseNode {
  name: string | any;
  constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
  }
}

export abstract class BaseNodeUnion<
  T extends BaseNode | BaseNodeList<BaseNode> = BaseNode,
> extends BaseNode {
  constructor(
    _ctx: ParserRuleContext,
    list: (ParseTree | null)[] | null,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(_ctx, visitor);
    const target = (list ?? []).find(Boolean);
    if (target) {
      // @ts-expect-error
      return target.accept(visitor) as T;
    }
  }
}
