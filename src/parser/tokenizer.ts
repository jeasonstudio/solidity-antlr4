import { Position } from '../ast/base';
import { SolidityLexer, CharStream } from '../antlr4';
import { SolidityErrorListener } from './error-listener';

export type SyntaxTokenType = (typeof SolidityLexer.symbolicNames)[number];

export interface SyntaxToken {
  text: string;
  type: SyntaxTokenType;
  range: [number, number];
  position: Position;
}

export const tokenizer = (source: string): SyntaxToken[] => {
  const input = new CharStream(source);
  const lexer = new SolidityLexer(input);
  const listener = new SolidityErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);

  const tokens: SyntaxToken[] = lexer.getAllTokens().map((token) => {
    return {
      text: token.text!,
      type: SolidityLexer.symbolicNames[token.type]!,
      range: [token.start, token.stop],
      position: Position.create(token.line, token.column),
    };
  });

  // TODO: fix this
  // if (listener.errors.length > 0) {
  //   throw new Error(listener.errors[0].message);
  // }

  return tokens;
};
