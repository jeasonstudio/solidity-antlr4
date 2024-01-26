import { createParse } from './utils.test';
import { test, expect } from 'vitest';

test('named-argument', () => {
  expect(
    createParse((p) => p.callArgumentList())(`({value: msg.value, bar: hex"aabb"})`),
  ).toMatchObject([
    {
      type: 'NamedArgument',
      name: 'value',
      expression: {
        type: 'MemberAccess',
        expression: 'msg',
        memberName: 'value',
      },
    },
    {
      type: 'NamedArgument',
      name: 'bar',
      expression: {
        value: 'aabb',
      },
    },
  ]);
});

test('literal', () => {
  expect(
    createParse((p) => p.tupleExpression())(
      `(1, 0x1, 1 ether, "address", "", true, hex"ffff", unicode"😃")`,
    ),
  ).toMatchObject({
    expressions: [
      {
        type: 'NumberLiteral',
        value: '1',
      },
      {
        type: 'NumberLiteral',
        hexValue: '0x1',
      },
      {
        type: 'NumberLiteral',
        value: '1',
        subDenomination: 'ether',
      },
      {
        type: 'StringLiteral',
        value: 'address',
      },
      {
        type: 'StringLiteral',
        value: '',
      },
      {
        type: 'BooleanLiteral',
        value: true,
      },
      {
        type: 'HexStringLiteral',
        value: 'ffff',
      },
      {
        type: 'UnicodeStringLiteral',
        value: '😃',
      },
    ],
  });
});

test('assignment', () => {
  expect(
    createParse((p) => p.tupleExpression())(`(a += b, a++, delete b, foo ? x : 2)`),
  ).toMatchObject({
    expressions: [
      {
        left: 'a',
        right: 'b',
        operator: '+=',
      },
      {
        operator: '++',
        left: 'a',
      },
      {
        operator: 'delete',
        right: 'b',
      },
      {
        condition: 'foo',
        trueExpression: 'x',
        falseExpression: { value: '2' },
      },
    ],
  });
});

test('memberAccess', () => {
  expect(createParse((p) => p.tupleExpression())(`(msg.value, foo.address)`)).toMatchObject({
    expressions: [
      {
        expression: 'msg',
        memberName: 'value',
      },
      {
        expression: 'foo',
        memberName: 'address',
      },
    ],
  });
});

test('expression', () => {
  expect(
    createParse((p) => p.tupleExpression())(
      `(call{foo: bar}, obj({foo: bar}), payable({foo: bar}), type(address), new Foo)`,
    ),
  ).toMatchObject({
    expressions: [
      {
        expression: 'call',
        arguments: [
          {
            name: 'foo',
            expression: 'bar',
          },
        ],
      },
      {
        expression: 'obj',
        arguments: [
          {
            name: 'foo',
            expression: 'bar',
          },
        ],
      },
      {
        arguments: [
          {
            name: 'foo',
            expression: 'bar',
          },
        ],
      },
      {
        typeName: 'address',
      },
      {
        typeName: 'Foo',
      },
    ],
  });
});

test('indexAccess', () => {
  expect(
    createParse((p) => p.tupleExpression())(`(arr[0], arr[:10], arr[10:], arr[0:10])`),
  ).toMatchObject({
    expressions: [
      {
        baseExpression: 'arr',
        indexExpression: { value: '0' },
      },
      {
        baseExpression: 'arr',
        startExpression: null,
        endExpression: { value: '10' },
      },
      {
        baseExpression: 'arr',
        startExpression: { value: '10' },
        endExpression: null,
      },
      {
        baseExpression: 'arr',
        startExpression: { value: '0' },
        endExpression: { value: '10' },
      },
    ],
  });
});
