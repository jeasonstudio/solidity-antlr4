import { createTraverse } from '../traverse';
import { parse, tokenizer } from '../parser';
import { BaseNodeString } from '../ast/base';

test('parser', () => {
  const ast = parse(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello World!";
}`);

  expect(ast.type).toBe('SourceUnit');

  expect(
    tokenizer(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;
contract HelloWorld {
    string public greet = "Hello World!";
}`).length,
  ).toBe(15);

  expect(() => parse('contract 1fOO {}')).toThrow();
  expect(() => parse('asdfalsdkfjasdlfjasdfadsf')).toThrow();
  expect(() => parse('asdfalsdkfjasdlfjasdfadsf', { tolerant: true })).not.toThrow();

  expect(() => tokenizer('contract 1fOO {}')).not.toThrow();
  expect(() => tokenizer('asdfalsdkfjasdlfjasdfadsf', { tolerant: true })).not.toThrow();

  createTraverse({
    Identifier: ({ node }) => {},
    ContractDefinition: ({ node }) => {},
    enter: ({ node }) => {},
    exit: ({ node }) => {},
    exitAssemblyStatement: ({ node }) => {},
    exitIdentifier: ({ node }) => {
      // eslint-disable-next-line no-param-reassign
      node = node.name;
    },
  })(ast);

  console.log(JSON.stringify(ast, null, 2));
});
