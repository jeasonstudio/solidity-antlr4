import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.usingDirective();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('usingDirective', () => {
  test('usingDirective', () => {
    expect(parse(`using A for uint;`)).toMatchObject({
      libraryName: 'A',
      typeName: 'uint',
    });
    expect(parse(`using A for B.C;`)).toMatchObject({
      libraryName: 'A',
      typeName: 'B.C',
    });
    expect(parse(`using A for unit[] global;`)).toMatchObject({
      libraryName: 'A',
      typeName: 'unit[]',
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
      typeName: 'B',
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
      typeName: 'B',
      global: false,
    });
  });
});
