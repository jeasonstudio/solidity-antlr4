import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.eventDefinition();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('eventDefinition', () => {
  test('eventDefinition', () => {
    expect(parse(`event Transfer() anonymous;`)).toMatchObject({
      name: 'Transfer',
      anonymous: true,
    });
    expect(parse(`event Transfer(address, uint indexed amount);`)).toMatchObject({
      name: 'Transfer',
      parameters: [
        { indexed: false, typeName: 'address' },
        { indexed: true, typeName: 'uint', name: 'amount' },
      ],
    });
  });
});
