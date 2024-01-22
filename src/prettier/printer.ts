import { AstPath, Doc, ParserOptions, Printer, doc } from 'prettier';
import * as ast from '../ast';
import { keysInNode } from '../typedoc';
import { printer } from './printers';

export type PrintFunc<T extends ast.SyntaxNode = ast.SyntaxNode> = (arg: {
  path: AstPath<T>;
  options: ParserOptions<T>;
  print: (path: AstPath<ast.SyntaxNode>) => Doc;
  args?: any;
}) => Doc;

export class PrettierPrinter implements Printer<ast.SyntaxNode> {
  static name = 'solidity-antlr4-ast';

  private checkNode = (n: ast.SyntaxNode) => ast.syntaxNodeTypes.includes(n.type);

  print = (
    path: AstPath<any>,
    options: ParserOptions<ast.SyntaxNode>,
    print: (path: AstPath<ast.SyntaxNode>) => Doc,
    args?: any,
  ): Doc => {
    const node = path.node;
    if (node === null) return '';
    if (!this.checkNode(node)) throw new Error('Unknown node type: ' + node.type);
    if (!printer[`print${node.type}`]) return node.type;
    const document = printer[`print${node.type}`]({ path, options, print, args, node });
    console.log(node.type, document);
    return document;
  };

  getVisitorKeys = (node: ast.SyntaxNode, nonTraversableKeys: Set<string>): string[] => {
    console.log(111, nonTraversableKeys);
    return keysInNode(node);
  };
}
