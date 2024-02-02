import * as ast from '../ast';
import type { AstPath, Doc, ParserOptions, Printer } from 'prettier';
import {
  printComment,
  isBlockComment,
  canAttachComment,
  print,
  massageAstNode,
  handleComments,
} from './printers';

export type PrintFunc<T extends ast.SyntaxNode = ast.SyntaxNode> = (arg: {
  path: AstPath<T>;
  options: ParserOptions<T>;
  print: (path: AstPath<ast.SyntaxNode>) => Doc;
  args?: any;
}) => Doc;

export class PrettierPrinter implements Printer<any> {
  public static name = 'solidity-antlr4-ast';

  public print = print;
  public printComment = printComment;
  public isBlockComment = isBlockComment;
  public canAttachComment = canAttachComment;
  public massageAstNode = massageAstNode;
  public handleComments = handleComments;

  // handleComments = {
  //   ownLine: this.ownLine,
  //   endOfLine: this.endOfLine,
  //   remaining: this.remaining,
  // };
}
