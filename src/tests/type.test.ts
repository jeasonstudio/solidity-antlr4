import { createParse } from './utils.test';

test('typeName', () => {
  expect(createParse((p) => p.typeName())(`address`)).toBe('address');
  expect(createParse((p) => p.typeName())(`bytes`)).toBe('bytes');
  expect(
    createParse((p) => p.typeName())(`function(address user) public pure returns(bool)`),
  ).toMatchObject({
    visibility: 'public',
    stateMutability: 'pure',
    parameters: [{ name: 'user', typeName: 'address' }],
    returnParameters: [{ name: null, typeName: 'bool' }],
  });
  expect(createParse((p) => p.typeName())(`mapping(address => uint)`)).toMatchObject({
    keyType: 'address',
    valueType: 'uint',
  });

  expect(createParse((p) => p.elementaryTypeName(true))(`address payable`)).toBe('address');
  expect(createParse((p) => p.typeName())(`uint128[]`)).toBe('uint128[]');
});
