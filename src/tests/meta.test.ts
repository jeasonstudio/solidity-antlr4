import { createParse } from './utils.test';
import { test, expect } from 'vitest';

test('sourceUnit', () => {
  expect(createParse((p) => p.sourceUnit())(`// SPDX-License-Identifier: MIT`)).toMatchObject({
    type: 'SourceUnit',
  });
});

test('pragmaDirective', () => {
  expect(createParse((p) => p.pragmaDirective())(`pragma solidity ^0.8.24;`)).toMatchObject({
    literals: ['solidity', '^0.8.24'],
  });
  expect(createParse((p) => p.pragmaDirective())(`pragma version >=0.8.24;`)).toMatchObject({
    literals: ['version', '>=0.8.24'],
  });
});

test('usingDirective', () => {
  expect(createParse((p) => p.usingDirective())(`using A for uint;`)).toMatchObject({
    libraryName: 'A',
    typeName: 'uint',
  });
  expect(createParse((p) => p.usingDirective())(`using A for B.C;`)).toMatchObject({
    libraryName: 'A',
    typeName: 'B.C',
  });
  expect(createParse((p) => p.usingDirective())(`using A for unit[] global;`)).toMatchObject({
    libraryName: 'A',
    typeName: 'unit[]',
    global: true,
  });
  expect(createParse((p) => p.usingDirective())(`using { A, C.D } for B;`)).toMatchObject({
    usingAliases: [{ name: 'A' }, { name: 'C.D' }],
    typeName: 'B',
    global: false,
  });
  expect(createParse((p) => p.usingDirective())(`using { B, add as + } for B;`)).toMatchObject({
    usingAliases: [{ name: 'B' }, { name: 'add', operator: '+' }],
    typeName: 'B',
    global: false,
  });
});

test('importDirective', () => {
  expect(createParse((p) => p.importDirective())(`import "./Foo.sol";`)).toMatchObject({
    path: './Foo.sol',
  });
  expect(
    createParse((p) => p.importDirective())(`import * as Foo from "./Foo.sol";`),
  ).toMatchObject({
    unitAlias: 'Foo',
    symbolAliases: [],
  });
  expect(createParse((p) => p.importDirective())(`import "./Foo.sol" as Foo;`)).toMatchObject({
    unitAlias: 'Foo',
    symbolAliases: [],
  });
  expect(
    createParse((p) => p.importDirective())(`import { Foo, Bar as Me } from "./Foo.sol";`),
  ).toMatchObject({
    symbolAliases: [
      {
        foreign: 'Foo',
      },
      {
        foreign: 'Bar',
        local: 'Me',
      },
    ],
  });
});
