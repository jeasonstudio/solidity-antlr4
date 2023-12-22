import { SolidityASTVisitor } from './visitor';
import { Position, SyntaxNode } from './ast';
import { SolidityParser, ParseTree, SolidityLexer, CommonTokenStream, CharStream } from './grammar';
import { ParseError, SolidityErrorListener } from './error';

export type SyntaxTokenType = (typeof SolidityLexer.symbolicNames)[number];

export interface SyntaxToken {
  text: string;
  type: SyntaxTokenType;
  range: [number, number];
  position: Position;
}

export interface ParseOptions {
  selector?: (parser: SolidityParser) => ParseTree;
}

export interface ParseResult {
  parseTree: ParseTree;
  syntaxTree: SyntaxNode;
  syntaxTokens: SyntaxToken[];
  errors: ParseError[];
}

export const defaultParseOption: ParseOptions = {
  selector: (p) => p.sourceUnit(),
};

export const tokenizer = (source: string): SyntaxToken[] => {
  const input = new CharStream(source);
  const lexer = new SolidityLexer(input);

  const tokens: SyntaxToken[] = lexer.getAllTokens().map((token) => {
    return {
      text: token.text!,
      type: SolidityLexer.symbolicNames[token.type]!,
      range: [token.start, token.stop],
      position: Position.create(token.line, token.column),
    };
  });

  return tokens;
};

export const parse = (source: string, _options?: ParseOptions): ParseResult => {
  const options: ParseOptions = Object.assign({}, defaultParseOption, _options);
  const input = new CharStream(source);
  const lexer = new SolidityLexer(input);
  const token = new CommonTokenStream(lexer);
  const parser = new SolidityParser(token);

  const listener = new SolidityErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);

  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  const visitor = new SolidityASTVisitor();
  const parseTree = options.selector!(parser);
  const syntaxTree = parseTree.accept(visitor)!;
  const syntaxTokens = tokenizer(source);

  return {
    parseTree,
    syntaxTree,
    syntaxTokens,
    errors: listener.errors,
  };
};
