import {
  CharStreams,
  SolidityLexer,
  SolidityParser,
  CommonTokenStream,
  ParserRuleContext,
} from '../antlr4';
import { SyntaxNode } from '../ast';
import { solidityASTBuilder } from '../ast/builder';
import { serialize } from '../traverse';
import { BaseNodeString } from '../ast/base';

export const format = (ast: SyntaxNode) =>
  serialize(ast, (n) => {
    if (n instanceof BaseNodeString || n?.type === 'TypeName') {
      return (n as any).name;
    }
    return n;
  });

export const parse = (
  input: string,
  callback: (parser: SolidityParser) => ParserRuleContext = (p) => p.sourceUnit(),
  afterParse: (ast: SyntaxNode) => any = format,
) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = callback(parser);
  const ast = tree.accept(solidityASTBuilder)!;
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
      console.log(serialize(ast));
      return serialize(ast);
    });
};

export const visitor = solidityASTBuilder;

test('utils', () => {});
