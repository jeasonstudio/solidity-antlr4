import { SolidityASTBuilder } from '../ast/builder';
import { SourceUnit, SyntaxNode } from '../ast';
import { SolidityParser, ParseTree, SolidityLexer, CommonTokenStream, CharStreams } from '../antlr4';
import { ParseError, SolidityErrorListener } from './error-listener';

export interface ParseOptions {
  tolerant?: boolean;
  selector?: (parser: SolidityParser) => ParseTree;
}

export const defaultParseOption: ParseOptions = {
  tolerant: false,
  selector: (p) => p.sourceUnit(),
};

export const parse = <T extends SyntaxNode = SourceUnit>(
  source: string,
  _options?: ParseOptions,
): T => {
  let syntaxTree: T;
  const options: ParseOptions = Object.assign({}, defaultParseOption, _options);
  const listener = new SolidityErrorListener();

  try {
    const input = CharStreams.fromString(source);
    const lexer = new SolidityLexer(input);
    const token = new CommonTokenStream(lexer);
    const parser = new SolidityParser(token);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    const visitor = new SolidityASTBuilder();
    const parseTree = options.selector!(parser);
    syntaxTree = parseTree.accept(visitor)! as T;
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      listener.errors.push(new ParseError((error as any).message || 'unknown error'));
    }
  }

  if (!options.tolerant) listener.throws();
  return syntaxTree!;
};
