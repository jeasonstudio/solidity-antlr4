import {
  CharStreams,
  SolidityLexer,
  SolidityParser,
  CommonTokenStream,
  ParserRuleContext,
} from '../grammar';
import { SyntaxNode } from '../ast';
import { solidityASTVisitor } from '../visitor';

export const format = (ast: SyntaxNode) => ast.serialize();

export const parse = (
  input: string,
  callback: (parser: SolidityParser) => ParserRuleContext = (p) => p.sourceUnit(),
  afterParse: (ast: SyntaxNode) => any = format,
) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = callback(parser);
  const ast = tree.accept(solidityASTVisitor)!;
  return afterParse(ast);
};

export const createParse = (
  callback: (parser: SolidityParser) => ParserRuleContext = (p) => p.sourceUnit(),
  afterParse: (ast: SyntaxNode) => any = format,
) => {
  return (input: string) => parse(input, callback, afterParse);
};

export const createLog = (
  callback: (parser: SolidityParser) => ParserRuleContext = (p) => p.sourceUnit(),
) => {
  return (input: string) =>
    parse(input, callback, (ast) => {
      console.log(JSON.stringify(ast.serialize(), null, 2));
      return ast.serialize();
    });
};

export const visitor = solidityASTVisitor;

test('utils', () => {});
