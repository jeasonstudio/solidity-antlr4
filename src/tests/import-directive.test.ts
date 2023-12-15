import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return visitor.visit(parser.importDirective())!.serialize();
};

const parsel = (input: string) => {
  console.log(JSON.stringify(parse(input), null, 2));
  return parse(input);
};

describe('visitImportDirective', () => {
  test('visitImportDirective', () => {
    expect(parse(`import "./Foo.sol";`)).toMatchObject({
      path: './Foo.sol',
    });
    expect(parse(`import * as Foo from "./Foo.sol";`)).toMatchObject({
      unitAlias: { name: 'Foo' },
      symbolAliases: [],
    });
    expect(parse(`import "./Foo.sol" as Foo;`)).toMatchObject({
      unitAlias: { name: 'Foo' },
      symbolAliases: [],
    });
    expect(parse(`import { Foo, Bar as Me } from "./Foo.sol";`)).toMatchObject({
      symbolAliases: [
        {
          foreign: { name: 'Foo' },
        },
        {
          foreign: { name: 'Bar' },
          local: { name: 'Me' },
        },
      ],
    });
  });
});
