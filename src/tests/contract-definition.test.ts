import { solidityASTVisitor as visitor } from '../visitor';
import { CharStreams, CommonTokenStream, SolidityLexer, SolidityParser } from '../grammar';

const parse = (input: string) => {
  const lexer = new SolidityLexer(CharStreams.fromString(input));
  const parser = new SolidityParser(new CommonTokenStream(lexer));
  return parser;
};

const pLibrary = (input: string) =>
  JSON.parse(JSON.stringify(parse(input).libraryDefinition().accept(visitor)));

test('libraryDefinition', () => {
  expect(pLibrary(`library Foo { address name; }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'library',
    nodes: [{ type: 'StateVariableDeclaration' }],
  });
});

const pInterface = (input: string) =>
  JSON.parse(JSON.stringify(parse(input).interfaceDefinition().accept(visitor)));

test('interfaceDefinition', () => {
  expect(pInterface(`interface Foo { address name; }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'interface',
    nodes: [{ type: 'StateVariableDeclaration' }],
  });
});

const pContract = (input: string) =>
  JSON.parse(JSON.stringify(parse(input).contractDefinition().accept(visitor)));

test('contractDefinition', () => {
  expect(pContract(`contract Foo { address name; }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'contract',
    abstract: false,
    nodes: [{ type: 'StateVariableDeclaration' }],
  });

  expect(pContract(`contract Foo { address name; }`)).toMatchObject({
    name: 'Foo',
    contractKind: 'contract',
    abstract: false,
    nodes: [{ type: 'StateVariableDeclaration' }],
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
