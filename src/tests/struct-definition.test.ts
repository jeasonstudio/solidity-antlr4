import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.structDefinition())!.serialize();
};

describe('structDefinition', () => {
  test('structDefinition', () => {
    expect(parse(`struct Coin { string obverse; string reverse; }`)).toMatchObject({
      name: { name: 'Coin' },
      members: [
        { name: { name: 'obverse' }, typeName: { name: 'string' } },
        { name: { name: 'reverse' }, typeName: { name: 'string' } },
      ],
    });
  });
});
