import { SolidityASTVisitor } from './visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from './grammar';

const visitor = new SolidityASTVisitor();

const getParser = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return parser;
};

console.log(Object.entries(visitor).filter(([k, v]) => !v));

describe('ast-builder', () => {
  test('visitSourceUnit', () => {
    const source = `// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.20;

    contract SimpleStorage {
        // State variable to store a number
        uint public num;

        // You need to send a transaction to write to a state variable.
        function set(uint _num) public {
            num = _num;
        }

        // You can read from a state variable without sending a transaction.
        function get() public view returns (uint) {
            return num;
        }
    }
`;
    const cst = getParser(source).sourceUnit();
    const ast = visitor.visit(cst);
    // console.log(ast);
    // expect(ast).toMatchObject({
    //   type: 'SourceUnit',
    // });
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
