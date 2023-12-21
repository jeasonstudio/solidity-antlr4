import { createLog, createParse } from './utils';

test('variableDeclaration', () => {
  expect(createParse((p) => p.variableDeclaration())(`address memory user`)).toMatchObject({
    name: 'user',
    dataLocation: 'memory',
    typeName: 'address',
  });
  expect(createParse((p) => p.parameterDeclaration())(`address memory user`)).toMatchObject({
    name: 'user',
    dataLocation: 'memory',
    typeName: 'address',
  });
});

test('stateVariableDeclaration', () => {
  expect(
    createParse((p) => p.stateVariableDeclaration())(
      `uint internal immutable override(Foo) amount = 1;`,
    ),
  ).toMatchObject({
    name: 'amount',
    typeName: 'uint',
    internal: true,
    immutable: true,
    override: ['Foo'],
    expression: { value: '1' },
  });
  expect(
    createParse((p) => p.stateVariableDeclaration())(`uint public constant amount = 2;`),
  ).toMatchObject({
    name: 'amount',
    typeName: 'uint',
    public: true,
    constant: true,
    override: null,
    expression: { value: '2' },
  });
});

test('constantVariableDeclaration', () => {
  expect(
    createParse((p) => p.constantVariableDeclaration())(`uint128 constant amount = 100;`),
  ).toMatchObject({
    name: 'amount',
    typeName: 'uint128',
  });
});
