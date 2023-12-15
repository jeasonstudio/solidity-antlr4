import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.eventDefinition())!.serialize();
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
        { indexed: false, typeName: { name: 'address', type: 'ElementaryTypeName' } },
        { indexed: true, typeName: { name: 'uint', type: 'ElementaryTypeName' }, name: 'amount' },
      ],
    });
  });
});
