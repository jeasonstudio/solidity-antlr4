import type { Options, ParserOptions, Plugin } from 'prettier';
import * as prettier from 'prettier/standalone';
import { plugin } from '../prettier';
import { SyntaxNode } from '../ast';
import { PrettierParser, getCommentTokens } from '../prettier/parser';
import { SyntaxToken } from '../parser';

export interface GenerateOptions extends Options {
  tokens?: SyntaxToken[];
}

class PrettierGenerator extends PrettierParser {
  public static name = 'solidity-antlr4-generator';
  public parse = (ast: string, _options: ParserOptions<SyntaxNode>) => JSON.parse(ast);
}

const generatorPlugin: Plugin = {
  ...plugin,
  parsers: {
    [PrettierGenerator.name]: new PrettierGenerator(),
  },
};

export const generate = async (ast: SyntaxNode, options: GenerateOptions = {}): Promise<string> => {
  if (options.tokens) (<any>ast).comments = getCommentTokens(options.tokens);
  return prettier.format(JSON.stringify(ast), {
    ...options,
    parser: PrettierGenerator.name,
    plugins: [generatorPlugin],
  });
};
