import { ParserRuleContext, SolidityParserVisitor } from '../grammar';
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

  public constructor(ctx: ParserRuleContext, visitor: SolidityParserVisitor<BaseNode>) {
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
  }
}
