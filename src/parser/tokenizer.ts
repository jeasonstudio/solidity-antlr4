import { Position } from '../ast/base';
import { SolidityLexer, CharStreams } from '../antlr4';
import { ParseError, SolidityErrorListener } from './error-listener';

export type SyntaxTokenType = (typeof SolidityLexer.symbolicNames)[number];

export interface SyntaxToken {
  text: string;
  type: SyntaxTokenType;
  range: [number, number];
  position: Position;
}

export interface TokenizerOptions {
  tolerant?: boolean;
}

export const defaultTokenizerOption: TokenizerOptions = {
  tolerant: false,
};

export const tokenizer = (source: string, _options: TokenizerOptions = {}): SyntaxToken[] => {
  let tokens: SyntaxToken[] = [];
  const options: TokenizerOptions = Object.assign({}, defaultTokenizerOption, _options);
  const listener = new SolidityErrorListener();

  try {
    const input = CharStreams.fromString(source);
    const lexer = new SolidityLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    tokens = lexer.getAllTokens().map((token) => {
      return {
        text: token.text!,
        type: SolidityLexer.symbolicNames[token.type]!,
        range: [token.start, token.stop],
        position: Position.create(token.line, token.column),
      };
    });
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      listener.errors.push(new ParseError((error as any).message || 'unknown error'));
    }
  }

  if (!options.tolerant) listener.throws();
  return tokens;
};
