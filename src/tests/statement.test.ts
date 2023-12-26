import { createParse } from './utils.test';

test('ifStatement', () => {
  expect(createParse((p) => p.ifStatement())(`if (foo) {} else if (bar) {} else {}`)).toMatchObject(
    {
      condition: 'foo',
      ifStatement: {},
      elseStatement: {
        condition: 'bar',
        ifStatement: {},
        elseStatement: {},
      },
    },
  );
});

test('revertStatement', () => {
  expect(createParse((p) => p.revertStatement())(`revert Foo(name);`)).toMatchObject({
    expression: 'Foo',
    arguments: ['name'],
  });
});

test('returnStatement', () => {
  expect(createParse((p) => p.returnStatement())(`return name;`)).toMatchObject({
    expression: 'name',
  });
});

test('emitStatement', () => {
  expect(createParse((p) => p.emitStatement())(`emit Transfer(name);`)).toMatchObject({
    expression: 'Transfer',
    arguments: ['name'],
  });
});

test('assemblyStatement', () => {
  expect(
    createParse((p) => p.assemblyStatement())(`assembly "evmasm" ("foo", "bar") {}`),
  ).toMatchObject({
    flags: ['foo', 'bar'],
    dialect: 'evmasm',
  });
});

test('tryStatement', () => {
  expect(
    createParse((p) => p.tryStatement())(
      `try new Foo(owner) returns (Foo foo) {} catch Error(string memory reason) {} catch (bytes memory reason) {}`,
    ),
  ).toMatchObject({
    expression: { expression: { typeName: 'Foo' }, arguments: ['owner'] },
    returnParameters: [{ name: 'foo', typeName: 'Foo' }],
    body: {},
    catchClauses: [
      {
        errorName: 'Error',
        parameters: [{ name: 'reason', typeName: 'string', dataLocation: 'memory' }],
        body: {},
      },
      {
        parameters: [{ name: 'reason', typeName: 'bytes', dataLocation: 'memory' }],
        body: {},
      },
    ],
  });
});

test('whileStatement', () => {
  expect(createParse((p) => p.whileStatement())(`while (foo) {}`)).toMatchObject({
    condition: 'foo',
  });
  expect(createParse((p) => p.doWhileStatement())(`do {} while (foo);`)).toMatchObject({
    condition: 'foo',
  });
});

test('forStatement', () => {
  expect(createParse((p) => p.forStatement())(`for (uint i = 0; i < 10; i++) {}`)).toMatchObject({
    initializationExpression: { type: 'VariableDeclarationStatement' },
    conditionExpression: { expression: { operator: '<', left: 'i', right: { value: '10' } } },
    loopExpression: { operator: '++', left: 'i' },
  });
});

test('block', () => {
  expect(
    createParse((p) => p.block())(`{ break; unchecked { return; } { continue; } }`),
  ).toMatchObject({
    statements: [{}, {}],
    uncheckedBlocks: [{}],
  });
});
