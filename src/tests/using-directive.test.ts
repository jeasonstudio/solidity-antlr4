import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.usingDirective())!.serialize();
};

describe('usingDirective', () => {
  test('usingDirective', () => {
    expect(parse(`using A for uint;`)).toMatchObject({
      libraryName: 'A',
      typeName: { name: 'uint' },
    });
    expect(parse(`using A for B.C;`)).toMatchObject({
      libraryName: 'A',
      typeName: { name: 'B.C' },
    });
    expect(parse(`using A for unit[] global;`)).toMatchObject({
      libraryName: 'A',
      typeName: { name: 'unit[]' },
      global: true,
    });
    expect(parse(`using { A, C.D } for B;`)).toMatchObject({
      functionList: [
        {
          definition: 'A',
        },
        {
          definition: 'C.D',
        },
      ],
      typeName: { name: 'B' },
      global: false,
    });
    expect(parse(`using { B, add as + } for B;`)).toMatchObject({
      functionList: [
        {
          definition: 'B',
        },
        {
          definition: 'add',
          // operator: '+', // TODO
        },
      ],
      typeName: { name: 'B' },
      global: false,
    });
  });
});
