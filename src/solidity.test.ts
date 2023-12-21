import { parse, tokenizer } from './solidity';

test('solidity', () => {
  const { parseTree, syntaxTree, syntaxTokens } = parse(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello World!";
}`);

  expect(parseTree).toBeTruthy();
  expect(syntaxTree.type).toBe('SourceUnit');
  expect(syntaxTokens.length).toBe(15);

  expect(
    tokenizer(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;
contract HelloWorld {
    string public greet = "Hello World!";
}`).length,
  ).toBe(15);

  expect(parse('contract 1fOO {}').errors).toMatchObject([{}]);
});
