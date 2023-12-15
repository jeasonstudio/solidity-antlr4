import { ParseTree, ParserRuleContext, SolidityParser, SolidityParserVisitor } from '../grammar';
// import { NodeType } from 'solidity-ast/node';

export type Range = [number, number];
export type SrcLocation = `${number}:${number}:${number}`;

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
  public readonly type: string;
  public readonly src: SrcLocation; // `{start}:{length}:{file}`
  public readonly range: Range;
  public readonly location: Location;

  public constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<any>) {
    const start = ctx.start?.start ?? 0;
    const end = ctx.stop?.stop ?? start;
    this.range = [start, end];
    this.src = `${start}:${end - start}:0`;

    const startPosition = Position.create(ctx.start?.line ?? 1, ctx.start?.column ?? 0);
    const endPosition = Position.create(
      ctx.stop?.line ?? startPosition.line,
      ctx.stop?.column ?? startPosition.column,
    );
    this.location = Location.create(startPosition, endPosition);

    this.visitContextList = (list?: any[] | null) => {
      if (!list?.length) return [];
      return list.map((ctx) => visitor.visit(ctx)! as any).filter(Boolean);
    };
  }

  protected visitContextList: <N extends BaseNode = BaseNode, T extends ParseTree = ParseTree>(
    list?: T[] | null,
  ) => N[];

  public serialize = () => JSON.parse(JSON.stringify(this));
}

export abstract class BaseNodeList<T extends BaseNode> extends Array<T> {
  public serialize = () => JSON.parse(JSON.stringify(this));
  public constructor(ctxList: ParserRuleContext[], visitor: SolidityParserVisitor<any>) {
    super(...ctxList.map((ctx) => ctx.accept(visitor)));
  }
}

export abstract class BaseNodeString extends String {
  public serialize = () => JSON.parse(JSON.stringify(this));
  public constructor(str: string, visitor: SolidityParserVisitor<any>) {
    super(str);
  }
}

export abstract class BaseNodeUnion<T extends BaseNode> {
  public serialize = () => JSON.parse(JSON.stringify(this));
  // ruleIndex => Node
  public constructor(ctx: ParserRuleContext, nodeMap: Record<number, T>) {
    console.log(111, nodeMap);
    if (!nodeMap[ctx.ruleIndex])
      throw new Error(
        `cannot transform node to "${SolidityParser.ruleNames[ctx.ruleIndex]}(${ctx.ruleIndex})"`,
      );
    Object.assign(this, nodeMap[ctx.ruleIndex]);
  }
}
