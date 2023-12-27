import { createParse } from './utils.test';

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

test('libraryDefinition', () => {
  expect(createParse((p) => p.libraryDefinition())(`library Foo { address name; }`)).toMatchObject({
    type: 'ContractDefinition',
    contractKind: 'library',
    name: 'Foo',
    nodes: [{ type: 'VariableDeclaration' }],
  });
});

test('interfaceDefinition', () => {
  expect(
    createParse((p) => p.interfaceDefinition())(`interface Foo { address name; }`),
  ).toMatchObject({
    type: 'ContractDefinition',
    contractKind: 'interface',
    name: 'Foo',
    nodes: [{ type: 'VariableDeclaration' }],
  });
});

test('contractDefinition', () => {
  const pContract = createParse((p) => p.contractDefinition());

  expect(pContract(`contract Foo { address name; }`)).toMatchObject({
    type: 'ContractDefinition',
    contractKind: 'contract',
    name: 'Foo',
    abstract: false,
    nodes: [{ type: 'VariableDeclaration' }],
  });

  expect(pContract(`contract Foo { address name; }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'contract',
    abstract: false,
    nodes: [{ type: 'VariableDeclaration' }],
  });

  expect(pContract(`abstract contract Bar { }`)).toMatchObject({
    name: 'Bar',
    contractKind: 'contract',
    abstract: true,
    nodes: [],
  });

  expect(pContract(`contract Foo is X, Y.Z(100) { }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'contract',
    baseContracts: [{ baseName: 'X' }, { baseName: 'Y.Z' }],
  });
});

test('enumDefinition', () => {
  expect(
    createParse((p) => p.enumDefinition())(`enum TokenType { Fungible, NonFungible }`),
  ).toMatchObject({
    name: 'TokenType',
    members: ['Fungible', 'NonFungible'],
  });
});

test('errorDefinition', () => {
  expect(
    createParse((p) => p.errorDefinition())(`error MyError(address, uint amount);`),
  ).toMatchObject({
    name: 'MyError',
    parameters: [{ typeName: 'address' }, { typeName: 'uint', name: 'amount' }],
  });
});

test('eventDefinition', () => {
  expect(createParse((p) => p.eventDefinition())(`event Transfer() anonymous;`)).toMatchObject({
    name: 'Transfer',
    anonymous: true,
  });
  expect(
    createParse((p) => p.eventDefinition())(`event Transfer(address, uint indexed amount);`),
  ).toMatchObject({
    name: 'Transfer',
    parameters: [
      { indexed: false, typeName: 'address' },
      { indexed: true, typeName: 'uint', name: 'amount' },
    ],
  });
});

test('functionDefinition', () => {
  expect(
    createParse((p) => p.functionDefinition())(
      `function transfer(address calldata recipient, uint256 amount) public virtual override(Foo, Bar) onlyAdmin returns (bool) {}`,
    ),
  ).toMatchObject({
    name: 'transfer',
    functionKind: 'function',
    override: ['Foo', 'Bar'],
    virtual: true,
    visibility: 'public',
    stateMutability: null,
    modifiers: [{ name: 'onlyAdmin' }],
    returnParameters: [{ typeName: 'bool' }],
    parameters: [
      {
        name: 'recipient',
        typeName: 'address',
        dataLocation: 'calldata',
      },
      {
        name: 'amount',
        typeName: 'uint256',
      },
    ],
    body: {},
  });

  expect(
    createParse((p) => p.contractDefinition().contractBodyElement(0)!.constructorDefinition()!)(
      `contract F { constructor(string memory _name, string memory _text) X(_name) Y(_text) {} }`,
    ),
  ).toMatchObject({
    name: null,
    functionKind: 'constructor',
    override: null,
    virtual: false,
    visibility: null,
    stateMutability: 'payable',
    modifiers: [
      {
        name: 'X',
      },
      {
        name: 'Y',
      },
    ],
    parameters: [
      {
        name: '_name',
        dataLocation: 'memory',
        typeName: 'string',
      },
      {
        name: '_text',
        dataLocation: 'memory',
        typeName: 'string',
      },
    ],
  });
});

test('modifierDefinition', () => {
  expect(
    createParse((p) => p.modifierDefinition())(
      `modifier onlyAdmin(address sender) virtual override(Foo, Bar) {}`,
    ),
  ).toMatchObject({
    name: 'onlyAdmin',
    override: ['Foo', 'Bar'],
    virtual: true,
    parameters: [
      {
        name: 'sender',
        typeName: 'address',
      },
    ],
    body: {},
  });
});

test('userDefinedValueTypeDefinition', () => {
  expect(
    createParse((p) => p.userDefinedValueTypeDefinition())(`type Foo is uint256;`),
  ).toMatchObject({
    name: 'Foo',
    typeName: 'uint256',
  });
});

test('variableDeclarationTuple', () => {
  expect(
    createParse((p) => p.variableDeclarationTuple())(`(address calldata user, uint256 amount)`),
  ).toMatchObject([
    { name: 'user', typeName: 'address', dataLocation: 'calldata' },
    { name: 'amount', typeName: 'uint256' },
  ]);
});

test('structDefinition', () => {
  expect(
    createParse((p) => p.structDefinition())(`struct Coin { string obverse; string reverse; }`),
  ).toMatchObject({
    name: 'Coin',
    members: [
      { name: 'obverse', typeName: 'string' },
      { name: 'reverse', typeName: 'string' },
    ],
  });
});
