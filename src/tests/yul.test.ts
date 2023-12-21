import { createLog, createParse } from './utils';

test('assemblyStatement', () => {
  expect(createParse((p) => p.assemblyStatement())(`assembly { let x := 123 }`)).toMatchObject({
    yulStatements: [{ type: 'YulVariableDeclaration', identifiers: ['x'] }],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { f.b, foo, bar := mul(x, y) }`),
  ).toMatchObject({
    yulStatements: [{ type: 'YulAssignment', paths: ['f.b', 'foo', 'bar'] }],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { mul(x, y) }`)).toMatchObject({
    yulStatements: [{ type: 'YulFunctionCall', identifier: 'mul', expressions: ['x', 'y'] }],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { if foo {} }`)).toMatchObject({
    yulStatements: [{ type: 'YulIfStatement', condition: 'foo', body: {} }],
  });
  expect(createParse((p) => p.assemblyStatement())(`assembly { for {} bar {} {} }`)).toMatchObject({
    yulStatements: [
      {
        type: 'YulForStatement',
        initializationBlock: {},
        conditionExpression: 'bar',
        loopBlock: {},
        body: {},
      },
    ],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { leave break continue }`),
  ).toMatchObject({
    yulStatements: ['leave', 'break', 'continue'],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { switch x case 0 {} default {} }`),
  ).toMatchObject({
    yulStatements: [
      {
        type: 'YulSwitchStatement',
        expression: 'x',
        switchCases: [{ case: '0' }],
        default: true,
        body: {},
      },
    ],
  });
  expect(
    createParse((p) => p.assemblyStatement())(`assembly { function foo(x, y) -> a, b {} }`),
  ).toMatchObject({
    yulStatements: [
      {
        type: 'YulFunctionDefinition',
        name: 'foo',
        parameters: ['x', 'y'],
        returnParameters: ['a', 'b'],
        body: {},
      },
    ],
  });
});
