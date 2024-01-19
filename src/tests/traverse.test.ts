import { parse } from '../parser';
import {
  createSelector,
  query,
  querySelector,
  querySelectorAll,
  serialize,
  traverse,
  visit,
} from '../traverse';

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

test('selector', () => {
  const ast = parse(`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello World!";
}`);

  expect(querySelector(ast, createSelector('*'))!.node).toMatchObject({ type: 'SourceUnit' });
  expect(querySelectorAll(ast, createSelector('*')).length).toBe(8);

  expect(
    querySelectorAll(ast, createSelector('ContractDefinition').child('Identifier')),
  ).toMatchObject([{ node: { type: 'Identifier', name: 'HelloWorld' } }]);
  expect(
    querySelectorAll(ast, createSelector('ContractDefinition').inside('Identifier')),
  ).toMatchObject([
    { node: { type: 'Identifier', name: 'HelloWorld' } },
    { node: { type: 'Identifier', name: 'greet' } },
  ]);
  expect(
    query(ast, createSelector('ContractDefinition').inside('Identifier'), {
      queryAll: true,
      order: 'desc',
    }),
  ).toMatchObject([
    { node: { type: 'Identifier', name: 'greet' } },
    { node: { type: 'Identifier', name: 'HelloWorld' } },
  ]);

  expect(
    querySelectorAll(ast, [createSelector('ContractDefinition'), createSelector('PragmaDirective')])
      .length,
  ).toBe(2);

  expect(querySelector(ast, createSelector('ContractDefinition', 1))).toBe(null);
  expect(querySelector(ast, createSelector('ContractDefinition', 139))).toMatchObject({
    node: {
      type: 'ContractDefinition',
    },
  });
});
