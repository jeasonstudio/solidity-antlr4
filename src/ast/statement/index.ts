import { AssemblyFlags } from './assembly-flags';
import { AssemblyStatement } from './assembly-statement';
import { Block, UncheckedBlock } from './block';
import { BreakStatement } from './break-statement';
import { CatchClause } from './catch-clause';
import { ContinueStatement } from './continue-statement';
import { DoWhileStatement } from './do-while-statement';
import { EmitStatement } from './emit-statement';
import { ExpressionStatement } from './expression-statement';
import { ForStatement } from './for-statement';
import { IfStatement } from './if-statement';
import { ReturnStatement } from './return-statement';
import { RevertStatement } from './revert-statement';
import { SimpleStatement } from './simple-statement';
import { Statement } from './statement';
import { TryStatement } from './try-statement';
import { VariableDeclarationStatement } from './variable-declaration-statement';
import { WhileStatement } from './while-statement';

export type StatementNode =
  | AssemblyStatement
  | Block
  | BreakStatement
  | CatchClause
  | ContinueStatement
  | DoWhileStatement
  | EmitStatement
  | ExpressionStatement
  | ForStatement
  | IfStatement
  | ReturnStatement
  | RevertStatement
  | TryStatement
  | VariableDeclarationStatement
  | WhileStatement;

export type StatementNodeType =
  | 'AssemblyStatement'
  | 'Block'
  | 'BreakStatement'
  | 'CatchClause'
  | 'ContinueStatement'
  | 'DoWhileStatement'
  | 'EmitStatement'
  | 'ExpressionStatement'
  | 'ForStatement'
  | 'IfStatement'
  | 'ReturnStatement'
  | 'RevertStatement'
  | 'TryStatement'
  | 'VariableDeclarationStatement'
  | 'WhileStatement';

export {
  AssemblyFlags,
  AssemblyStatement,
  Block,
  BreakStatement,
  CatchClause,
  ContinueStatement,
  DoWhileStatement,
  EmitStatement,
  ExpressionStatement,
  ForStatement,
  IfStatement,
  ReturnStatement,
  RevertStatement,
  SimpleStatement,
  Statement,
  TryStatement,
  UncheckedBlock,
  VariableDeclarationStatement,
  WhileStatement,
};
