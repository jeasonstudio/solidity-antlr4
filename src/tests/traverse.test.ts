import { parse } from '../parser';
import { serialize, traverse, visit } from '../traverse';

test('traverse', () => {
  const ast = parse(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello World!";
}`);

  const enterNames: string[] = [];
  const exitNames: string[] = [];

  visit(ast, {
    enter: ({ node }) => {
      if (node.type === 'ContractDefinition') {
        enterNames.push(node.name.name);
      }
    },
    exit: ({ node }) => {
      if (node.type === 'ContractDefinition') {
        exitNames.push(node.name.name);
      }
    },
  });

  expect(enterNames).toEqual(['HelloWorld']);
  expect(exitNames).toEqual(['HelloWorld']);

  // @ts-expect-error
  expect(serialize(ast, (p) => ({ ...p.node, _flag: true }))._flag).toEqual(true);

  traverse(ast, (p) => {
    if (p.matches({ name: 'greet' })) {
      expect(p.node.type).toBe('Identifier');
    }
  });

  traverse(ast, (p) => {
    if (p.node.type === 'ContractDefinition') {
      expect(p.getFlattenParents().length).toBe(1);
      expect(p.getFlattenParents(1).length).toBe(1);
    }
  });
});
