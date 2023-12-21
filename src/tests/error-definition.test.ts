import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.errorDefinition();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('errorDefinition', () => {
  test('errorDefinition', () => {
    expect(parse(`error MyError(address, uint amount);`)).toMatchObject({
      name: 'MyError',
      parameters: [{ typeName: 'address' }, { typeName: 'uint', name: 'amount' }],
    });
  });
});
