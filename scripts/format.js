const list = [
  'SourceUnit',
  'PragmaDirective',
  'ImportDirective',
  'ImportAliases',
  'Path',
  'SymbolAliases',
  'ContractDefinition',
  'InterfaceDefinition',
  'LibraryDefinition',
  'InheritanceSpecifierList',
  'InheritanceSpecifier',
  'ContractBodyElement',
  'NamedArgument',
  'CallArgumentList',
  'IdentifierPath',
  'ModifierInvocation',
  'Visibility',
  'ParameterList',
  'ParameterDeclaration',
  'ConstructorDefinition',
  'StateMutability',
  'OverrideSpecifier',
  'FunctionDefinition',
  'ModifierDefinition',
  'FallbackFunctionDefinition',
  'ReceiveFunctionDefinition',
  'StructDefinition',
  'StructMember',
  'EnumDefinition',
  'UserDefinedValueTypeDefinition',
  'StateVariableDeclaration',
  'ConstantVariableDeclaration',
  'EventParameter',
  'EventDefinition',
  'ErrorParameter',
  'ErrorDefinition',
  'UserDefinableOperator',
  'UsingDirective',
  'TypeName',
  'ElementaryTypeName',
  'FunctionTypeName',
  'VariableDeclaration',
  'DataLocation',
  'Expression',
  'AssignOp',
  'TupleExpression',
  'InlineArrayExpression',
  'Identifier',
  'Literal',
  'LiteralWithSubDenomination',
  'BooleanLiteral',
  'StringLiteral',
  'HexStringLiteral',
  'UnicodeStringLiteral',
  'NumberLiteral',
  'Block',
  'UncheckedBlock',
  'Statement',
  'SimpleStatement',
  'IfStatement',
  'ForStatement',
  'WhileStatement',
  'DoWhileStatement',
  'ContinueStatement',
  'BreakStatement',
  'TryStatement',
  'CatchClause',
  'ReturnStatement',
  'EmitStatement',
  'RevertStatement',
  'AssemblyStatement',
  'AssemblyFlags',
  'VariableDeclarationList',
  'VariableDeclarationTuple',
  'VariableDeclarationStatement',
  'ExpressionStatement',
  'MappingType',
  'MappingKeyType',
  'MemberAccess',
  'YulStatement',
  'YulBlock',
  'YulVariableDeclaration',
  'YulAssignment',
  'YulIfStatement',
  'YulForStatement',
  'YulSwitchCase',
  'YulSwitchStatement',
  'YulFunctionDefinition',
  'YulPath',
  'YulFunctionCall',
  'YulBoolean',
  'YulLiteral',
  'YulExpression',
  'UnaryPrefixOperation',
  'PrimaryExpression',
  'OrderComparison',
  'Conditional',
  'PayableConversion',
  'Assignment',
  'UnarySuffixOperation',
  'ShiftOperation',
  'BitAndOperation',
  'FunctionCall',
  'IndexRangeAccess',
  'IndexAccess',
  'AddSubOperation',
  'BitOrOperation',
  'ExpOperation',
  'AndOperation',
  'InlineArray',
  'OrOperation',
  'MulDivModOperation',
  'FunctionCallOptions',
  'NewExpr',
  'BitXorOperation',
  'Tuple',
  'EqualityComparison',
  'MetaType',
];

const template = (name) => `import { BaseNode } from './base';
import { ${name}Context, SolidityParserVisitor } from '../grammar';

export class ${name} extends BaseNode {
  type = '${name}';
  public constructor(ctx: ${name}Context, visitor: SolidityParserVisitor<BaseNode>) {
    super(ctx, visitor);
  }
}
`;

const filename = (name) => {
  const [f, ...s] = name.split('');
  const newName =
    f.toLowerCase() + s.join('').replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return newName;
};

const fs = require('fs');
const path = require('path');

list.forEach((name) => {
  const fn = filename(name);
  const filePath = path.resolve(__dirname, '../src/ast', fn + '.ts');
  const fileContent = template(name);

  // console.log(filePath);
  // fs.writeFileSync(filePath, fileContent, 'utf8');
});

// fs.writeFileSync(
//   path.resolve(__dirname, 'index.ts'),
//   `export * from './base';\n${imports.join('\n')}\n`,
//   'utf8',
// );

// fs.writeFileSync(
//   path.resolve(__dirname, '../src/node.ts'),
//   `${list.map((name) => `import { ${name} } from './ast/${filename(name)}';`).join('\n')}

// export type ASTNode = ${list.join(' | ')};
// export type ASTNodeType = ${list.map((n) => `'${n}'`).join(' | ')};
// export { ${list.join(', ')} };
// `,
//   'utf-8',
// );

fs.writeFileSync(
  path.resolve(__dirname, '../src/visitor.ts'),
  `import * as parser from './grammar';
import * as ast from './node';

export class SolidityASTVisitor extends parser.SolidityParserVisitor<ast.ASTNode> {
  ${list.map(n => `visit${n} = (ctx: parser.${n}Context) => new ast.${n}(ctx, this);`).join('\n\t')}
}

export const solidityASTVisitor = new SolidityASTVisitor();
`,
  'utf-8',
);
