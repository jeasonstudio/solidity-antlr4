import { SolidityASTVisitor } from './visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from './grammar';

const visitor = new SolidityASTVisitor();

const getParser = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return parser;
};

describe('ast-builder', () => {
  test('visitSourceUnit', () => {
    const source = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HelloWorld {
    string public greet = "Hello World!";
}
`;
    const cst = getParser(source).sourceUnit();
    const ast = visitor.visit(cst);
    console.log(JSON.stringify(ast, null, 2));
    expect(ast).toMatchObject({
      type: 'SourceUnit',
    });
  });
  // test('visitPragmaDirective', () => {
  //   const source = `pragma solidity ^0.8.24;`;
  //   const cst = getParser(source).pragmaDirective();
  //   const ast = visitor.visit(cst);
  //   expect(ast).toMatchObject({
  //     literals: ['solidity ^0.8.24'],
  //   });
  // });
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
