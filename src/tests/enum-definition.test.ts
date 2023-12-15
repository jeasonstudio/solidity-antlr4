import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.enumDefinition())!.serialize();
};

describe('enumDefinition', () => {
  test('enumDefinition', () => {
    expect(parse(`enum TokenType { Fungible, NonFungible }`)).toMatchObject({
      name: { name: 'TokenType' },
      members: [{ name: 'Fungible' }, { name: 'NonFungible' }],
    });
  });
});
