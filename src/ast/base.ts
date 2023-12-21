import { ParseTree, ParserRuleContext, SolidityParserVisitor } from '../grammar';
// import { NodeType } from 'solidity-ast/node';

export type Range = [number, number];
export type SrcLocation = `${number}:${number}`;
export type ContractKind = 'contract' | 'interface' | 'library';
export type FunctionKind = 'function' | 'constructor' | 'receive' | 'fallback';
export type VisibilityKind = 'external' | 'public' | 'internal' | 'private';
export type StateMutabilityKind = 'pure' | 'view' | 'payable';
export type DataLocationKind = 'storage' | 'memory' | 'calldata';
export type LiteralKind = 'number' | 'bool' | 'string' | 'hexString' | 'unicodeString';
export type EtherUnit = 'wei' | 'gwei' | 'szabo' | 'finney' | 'ether';
export type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';

export class Position {
  public static create(line: number, column: number): Position {
    return new Position(line, column);
  }
  public constructor(
    // 1-based
    public line: number,
    // 0-based
    public column: number,
  ) {}
}

export class Location {
  public static create(start: Position, end: Position): Location {
    return new Location(start, end);
  }
  public constructor(
    public start: Position,
    public end: Position,
  ) {}
}

export abstract class BaseNode {
  public type: string;
  public src: SrcLocation; // `{start}:{length}:{file}`
  public range: Range;
  public location: Location;

  public constructor(ctx: ParserRuleContext, _visitor: SolidityParserVisitor<any>) {
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
  public constructor(ctxList: ParseTree[], visitor: SolidityParserVisitor<any>) {
    super(...ctxList.map((ctx) => ctx.accept(visitor)));
  }
}

export abstract class BaseNodeString extends BaseNode {
  name: string;
  public constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.name = ctx.getText();
    this.toJSON = () => this.name;
  }
}

export abstract class BaseNodeUnion<T extends BaseNode = BaseNode> extends BaseNode {
  public constructor(
    _ctx: ParserRuleContext,
    list: (ParserRuleContext | null)[],
    visitor: SolidityParserVisitor<any>,
  ) {
    super(_ctx, visitor);
    const target = list.find(Boolean);
    if (target) {
      // this = target.accept(visitor) as T;
      // Object.assign(this, target.accept(visitor) as T);
      return target.accept(visitor) as T;
    }
  }
}

export const formatString = (str: string) => {
  return str.substring(1, str.length - 1);
};
