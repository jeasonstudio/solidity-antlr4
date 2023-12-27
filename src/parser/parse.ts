import { SolidityASTBuilder } from '../ast/builder';
import { SyntaxNode } from '../ast';
import {
  SolidityParser,
  ParseTree,
  SolidityLexer,
  CommonTokenStream,
  CharStream,
} from '../grammar';
import { SolidityErrorListener } from './error-listener';

export interface ParseOptions {
  selector?: (parser: SolidityParser) => ParseTree;
}

export const defaultParseOption: ParseOptions = {
  selector: (p) => p.sourceUnit(),
};

export const parse = (source: string, _options?: ParseOptions): SyntaxNode => {
  const options: ParseOptions = Object.assign({}, defaultParseOption, _options);
  const input = new CharStream(source);
  const lexer = new SolidityLexer(input);
  const token = new CommonTokenStream(lexer);
  const parser = new SolidityParser(token);

  const listener = new SolidityErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  const visitor = new SolidityASTBuilder();
  const parseTree = options.selector!(parser);
  const syntaxTree = parseTree.accept(visitor)! as SyntaxNode;

  // TODO: fix this
  // if (listener.errors.length > 0) {
  //   throw new Error(listener.errors[0].message);
  // }

  return syntaxTree;
};
