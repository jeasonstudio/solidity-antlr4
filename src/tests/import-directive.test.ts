import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  const tree = parser.importDirective();
  return JSON.parse(JSON.stringify(tree.accept(visitor)));
};

describe('visitImportDirective', () => {
  test('visitImportDirective', () => {
    expect(parse(`import "./Foo.sol";`)).toMatchObject({
      path: './Foo.sol',
    });
    expect(parse(`import * as Foo from "./Foo.sol";`)).toMatchObject({
      unitAlias: 'Foo',
      symbolAliases: [],
    });
    expect(parse(`import "./Foo.sol" as Foo;`)).toMatchObject({
      unitAlias: 'Foo',
      symbolAliases: [],
    });
    expect(parse(`import { Foo, Bar as Me } from "./Foo.sol";`)).toMatchObject({
      symbolAliases: [
        {
          foreign: 'Foo',
        },
        {
          foreign: 'Bar',
          local: 'Me',
        },
      ],
    });
  });
});
