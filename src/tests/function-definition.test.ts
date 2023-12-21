import { createLog, createParse } from './utils';

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
