import { BaseNodeUnion } from '../base';
import { StatementContext, SolidityParserVisitor } from '../../grammar';
import { Block } from './block';
import { SimpleStatement } from './simple-statement';
import { IfStatement } from './if-statement';
import { ForStatement } from './for-statement';
import { WhileStatement } from './while-statement';
import { DoWhileStatement } from './do-while-statement';
import { ContinueStatement } from './continue-statement';
import { BreakStatement } from './break-statement';
import { TryStatement } from './try-statement';
import { ReturnStatement } from './return-statement';
import { EmitStatement } from './emit-statement';
import { RevertStatement } from './revert-statement';
import { AssemblyStatement } from './assembly-statement';

export class Statement extends BaseNodeUnion<
  | Block
  | SimpleStatement
  | IfStatement
  | ForStatement
  | WhileStatement
  | DoWhileStatement
  | ContinueStatement
  | BreakStatement
  | TryStatement
  | ReturnStatement
  | EmitStatement
  | RevertStatement
  | AssemblyStatement
> {
  // type = 'Statement';
  constructor(ctx: StatementContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [
        ctx.block(),
        ctx.simpleStatement(),
        ctx.ifStatement(),
        ctx.forStatement(),
        ctx.whileStatement(),
        ctx.doWhileStatement(),
        ctx.continueStatement(),
        ctx.breakStatement(),
        ctx.tryStatement(),
        ctx.returnStatement(),
        ctx.emitStatement(),
        ctx.revertStatement(),
        ctx.assemblyStatement(),
      ],
      visitor,
    );
  }
}
