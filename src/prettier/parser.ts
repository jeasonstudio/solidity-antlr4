import { Parser, ParserOptions } from 'prettier';
import { SyntaxNode } from '../ast';
import { PrettierPrinter } from './printer';
import { parse, tokenizer } from '../parser';

export class PrettierParser implements Parser<SyntaxNode> {
  public static name = 'solidity-antlr4';
  public astFormat = PrettierPrinter.name;
  public locStart = (node: SyntaxNode) => node.range[0];
  public locEnd = (node: SyntaxNode) => node.range[1];
  public parse = (text: string, _options: ParserOptions<SyntaxNode>) => {
    const ast = parse(text, { tolerant: true });
    const tokens = tokenizer(text, { tolerant: true });
    if (ast) {
      (<any>ast).comments = tokens.filter((token) => token.type?.includes('COMMENT'));
    }
    return ast;
  };
}
