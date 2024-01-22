import { Parser, ParserOptions } from 'prettier';
import { SyntaxNode } from '../ast';
import { PrettierPrinter } from './printer';
import { parse } from '../parser';

export class PrettierParser implements Parser<SyntaxNode> {
  static name = 'solidity-antlr4';
  astFormat = PrettierPrinter.name;

  parse = (text: string, _options: ParserOptions<SyntaxNode>) => {
    return parse(text, { tolerant: true });
  };
  hasPragma = (text: string) => {
    const tree = parse(text, { tolerant: true });
    return !!tree.nodes.find((node) => node.type === 'PragmaDirective');
  };
  locStart = (node: SyntaxNode) => node.range[0];
  locEnd = (node: SyntaxNode) => node.range[1];
  // preprocess?: ((text: string, options: ParserOptions<SyntaxNode>) => string) | undefined;
}
