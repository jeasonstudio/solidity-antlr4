import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.errorDefinition())!.serialize();
};

describe('errorDefinition', () => {
  test('errorDefinition', () => {
    expect(parse(`error MyError(address, uint amount);`)).toMatchObject({
      name: 'MyError',
      parameters: [
        { typeName: { name: 'address', type: 'ElementaryTypeName' } },
        { typeName: { name: 'uint', type: 'ElementaryTypeName' }, name: 'amount' },
      ],
    });
  });
});
