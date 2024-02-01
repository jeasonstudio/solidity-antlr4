import { Parser, ParserOptions } from 'prettier';
import { SyntaxNode } from '../ast';
import { PrettierPrinter } from './printer';
import { SyntaxToken, parse, tokenizer } from '../parser';
import { WithComments, comments } from './printers/base';

export const getCommentTokens = (tokens: SyntaxToken[]) => {
  return tokens.filter((token) => comments.includes(token.type));
};

export class PrettierParser implements Parser<SyntaxNode> {
  public static name = 'solidity-antlr4';
  public astFormat = PrettierPrinter.name;
  public locStart = (node: SyntaxNode) => node.range[0];
  public locEnd = (node: SyntaxNode) => node.range[1] + 1; // TODO@jeason: Why +1?
  public parse = (text: string, _options: ParserOptions<SyntaxNode>) => {
    const ast = parse(text, { tolerant: true }) as WithComments<SyntaxNode>;
    const tokens = tokenizer(text, { tolerant: true });
    if (ast) (<any>ast).comments = getCommentTokens(tokens).map((c) => ({ ...c, value: c.text }));
    return ast;
  };
}
