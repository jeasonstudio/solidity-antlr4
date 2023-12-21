import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.structDefinition();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('structDefinition', () => {
  test('structDefinition', () => {
    expect(parse(`struct Coin { string obverse; string reverse; }`)).toMatchObject({
      name: 'Coin',
      members: [
        { name: 'obverse', typeName: 'string' },
        { name: 'reverse', typeName: 'string' },
      ],
    });
  });
});
