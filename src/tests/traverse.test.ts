import { parse } from '../parser';
import { createTraverse, serialize } from '../traverse';

test('traverse', () => {
  const ast = parse(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello World!";
}`);

  const enterNames: string[] = [];
  const exitNames: string[] = [];

  createTraverse({
    enter: (node) => {
      if (node.type === 'ContractDefinition') {
        enterNames.push(node.name.name);
      }
    },
    exit: (node) => {
      if (node.type === 'ContractDefinition') {
        exitNames.push(node.name.name);
      }
    },
  })(ast);

  expect(enterNames).toEqual(['HelloWorld']);
  expect(exitNames).toEqual(['HelloWorld']);

  expect(serialize(ast, (node) => ({ ...node, _flag: true }))._flag).toEqual(true);
});
