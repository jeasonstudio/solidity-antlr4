import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const getParser = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return parser;
};

describe('ast-builder', () => {
  test('visitSourceUnit', () => {
    const source = `// SPDX-License-Identifier: MIT`;
    const ast = visitor.visit(getParser(source).sourceUnit());
    expect(ast).toMatchObject({ type: 'SourceUnit' });
  });
  test('visitPragmaDirective', () => {
    const source = `pragma solidity ^0.8.24;`;
    const ast = visitor.visit(getParser(source).pragmaDirective());
    expect(ast).toMatchObject({
      literals: ['solidity', '^0.8.24'],
    });
  });
  test('visitImportDirective', () => {
    const source = `
import "./Foo.sol";
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";
import { Foo } from "./Bar.sol";
import { Foo as Bar } from "./Bar.sol";
`;

    const parse = (input: string) => visitor.visit(getParser(input).importDirective());

    // expect(parse(`import "./Foo.sol";`)).toMatchObject({
    //   literals: ['solidity', '^0.8.24'],
    // });
  });
  // test('visitImportDirective', () => {
  //   const source = `import "./foo.sol";`;
  //   const cst = getParser(source).importDirective();
  //   const ast = visitor.visit(cst);
  //   console.log(JSON.stringify(ast));
  //   // expect(ast).toMatchObject({
  //   //   literals: ['solidity ^0.8.24'],
  //   // });
  // });
});
