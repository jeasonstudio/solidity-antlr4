import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.enumDefinition();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('enumDefinition', () => {
  test('enumDefinition', () => {
    expect(parse(`enum TokenType { Fungible, NonFungible }`)).toMatchObject({
      name: 'TokenType',
      members: ['Fungible', 'NonFungible'],
    });
  });
});
