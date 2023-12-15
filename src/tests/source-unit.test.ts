import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const getParser = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return parser;
};

describe('ast-builder', () => {
  test('visitSourceUnit', () => {
    const source = `// SPDX-License-Identifier: MIT`;
    const ast = visitor.visit(getParser(source).sourceUnit());
    expect(ast).toMatchObject({ type: 'SourceUnit' });
  });
});
