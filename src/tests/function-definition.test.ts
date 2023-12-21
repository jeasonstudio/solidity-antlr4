import { createParse } from './utils';

const parseConstant = createParse((p) => p.constantVariableDeclaration());

test('constantVariableDeclaration', () => {
  expect(parseConstant(`uint128 constant amount = 100;`)).toMatchObject({
    name: 'amount',
    typeName: 'uint128',
  });
});

const parseFunc = createParse((p) => p.functionDefinition());

test('functionDefinition', () => {
  expect(
    parseFunc(
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
    visibility: 'internal',
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
