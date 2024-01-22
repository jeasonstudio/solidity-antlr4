import * as prettier from 'prettier/standalone';
import { plugin } from '../prettier';
import { test, expect } from 'vitest';

test('prettier', async () => {
  const code = `// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorld is FOo("foo"), bar.Y {
    string[] public greet = ["Hello World!"];
}`;

  const result = await prettier.format(code, {
    parser: 'solidity-antlr4',
    plugins: [plugin],
  });

  console.log(result);

  // expect(1).toBe(1);
});
