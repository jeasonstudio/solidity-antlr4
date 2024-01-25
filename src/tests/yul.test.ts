import { createParse } from './utils.test';
import { test, expect } from 'vitest';

test('assemblyStatement', () => {
  expect(createParse((p) => p.assemblyStatement())(`assembly { let x := 123 }`)).toMatchObject({
    yulStatements: [{ expression: { type: 'YulVariableDeclaration', identifiers: ['x'] } }],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { f.b, foo, bar := mul(x, y) }`),
  ).toMatchObject({
    yulStatements: [{ expression: { type: 'YulAssignment', paths: ['f.b', 'foo', 'bar'] } }],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { mul(x, y) }`)).toMatchObject({
    yulStatements: [
      { expression: { type: 'YulFunctionCall', identifier: 'mul', expressions: ['x', 'y'] } },
    ],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { if foo {} }`)).toMatchObject({
    yulStatements: [{ expression: { type: 'YulIfStatement', condition: 'foo', body: {} } }],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { for {} bar {} {} }`)).toMatchObject({
    yulStatements: [
      {
        expression: {
          type: 'YulForStatement',
          initializationBlock: {},
          conditionExpression: 'bar',
          loopBlock: {},
          body: {},
        },
      },
    ],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { leave break continue }`),
  ).toMatchObject({
    yulStatements: [{ expression: 'leave' }, { expression: 'break' }, { expression: 'continue' }],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { switch x case 0 {} default {} }`),
  ).toMatchObject({
    yulStatements: [
      {
        expression: {
          type: 'YulSwitchStatement',
          expression: 'x',
          switchCases: [{ case: '0' }],
          default: true,
          body: {},
        },
      },
    ],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { function foo(x, y) -> a, b {} }`),
  ).toMatchObject({
    yulStatements: [
      {
        expression: {
          type: 'YulFunctionDefinition',
          name: 'foo',
          parameters: ['x', 'y'],
          returnParameters: ['a', 'b'],
          body: {},
        },
      },
    ],
  });
});
