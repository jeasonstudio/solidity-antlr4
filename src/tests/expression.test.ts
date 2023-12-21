import { createLog, createParse } from './utils';

test('named-argument', () => {
  expect(
    createParse((p) => p.callArgumentList())(`({value: msg.value, bar: hex"aabb"})`),
  ).toMatchObject([
    {
      type: 'NamedArgument',
      name: 'value',
      expression: {
        expression: 'msg',
        member: 'value',
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
  ).toMatchObject([
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
  ]);
});

createLog((p) => p.tupleExpression())(`(a == b)`);
