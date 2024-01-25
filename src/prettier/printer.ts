import { AstPath, Doc, ParserOptions, Printer } from 'prettier';
import * as ast from '../ast';
import { printComment, isBlockComment, canAttachComment, print } from './printers';

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

  // handleComments = {
  //   ownLine: this.ownLine,
  //   endOfLine: this.endOfLine,
  //   remaining: this.remaining,
  // };
}
