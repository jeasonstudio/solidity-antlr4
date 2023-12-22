export * from './base';
import { SourceUnit } from './source-unit';
import { PragmaDirective } from './pragma-directive';
import { ImportDirective } from './import-directive';
import { ImportAliases } from './import-aliases';
import { Path } from './path';
import { SymbolAliases } from './symbol-aliases';
import { ContractDefinition } from './contract-definition';
import { InterfaceDefinition } from './interface-definition';
import { LibraryDefinition } from './library-definition';
import { InheritanceSpecifierList } from './inheritance-specifier-list';
import { InheritanceSpecifier } from './inheritance-specifier';
import { ContractBodyElement } from './contract-body-element';
import { NamedArgument } from './named-argument';
import { CallArgumentList } from './call-argument-list';
import { IdentifierPath } from './identifier-path';
import { ModifierInvocation } from './modifier-invocation';
import { Visibility } from './visibility';
import { ParameterList } from './parameter-list';
import { ParameterDeclaration } from './parameter-declaration';
import { ConstructorDefinition } from './constructor-definition';
import { StateMutability } from './state-mutability';
import { OverrideSpecifier } from './override-specifier';
import { FunctionDefinition } from './function-definition';
import { ModifierDefinition } from './modifier-definition';
import { FallbackFunctionDefinition } from './fallback-function-definition';
import { ReceiveFunctionDefinition } from './receive-function-definition';
import { StructDefinition } from './struct-definition';
import { StructMember } from './struct-member';
import { EnumDefinition } from './enum-definition';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { StateVariableDeclaration } from './state-variable-declaration';
import { ConstantVariableDeclaration } from './constant-variable-declaration';
import { EventParameter } from './event-parameter';
import { EventDefinition } from './event-definition';
import { ErrorParameter } from './error-parameter';
import { ErrorDefinition } from './error-definition';
import { UserDefinableOperator } from './user-definable-operator';
import { UsingDirective } from './using-directive';
import { TypeName } from './type-name';
import { ElementaryTypeName } from './elementary-type-name';
import { FunctionTypeName } from './function-type-name';
import { VariableDeclaration } from './variable-declaration';
import { DataLocation } from './data-location';
import { Expression } from './expression';
import { AssignOp } from './assign-op';
import { TupleExpression } from './tuple-expression';
import { InlineArrayExpression } from './inline-array-expression';
import { Identifier } from './identifier';
import { Literal } from './literal';
import { LiteralWithSubDenomination } from './literal-with-sub-denomination';
import { BooleanLiteral } from './boolean-literal';
import { StringLiteral } from './string-literal';
import { HexStringLiteral } from './hex-string-literal';
import { UnicodeStringLiteral } from './unicode-string-literal';
import { NumberLiteral } from './number-literal';
import { Block } from './block';
import { UncheckedBlock } from './unchecked-block';
import { Statement } from './statement';
import { SimpleStatement } from './simple-statement';
import { IfStatement } from './if-statement';
import { ForStatement } from './for-statement';
import { WhileStatement } from './while-statement';
import { DoWhileStatement } from './do-while-statement';
import { ContinueStatement } from './continue-statement';
import { BreakStatement } from './break-statement';
import { TryStatement } from './try-statement';
import { CatchClause } from './catch-clause';
import { ReturnStatement } from './return-statement';
import { EmitStatement } from './emit-statement';
import { RevertStatement } from './revert-statement';
import { AssemblyStatement } from './assembly-statement';
import { AssemblyFlags } from './assembly-flags';
import { VariableDeclarationList } from './variable-declaration-list';
import { VariableDeclarationTuple } from './variable-declaration-tuple';
import { VariableDeclarationStatement } from './variable-declaration-statement';
import { ExpressionStatement } from './expression-statement';
import { MappingType } from './mapping-type';
import { MappingKeyType } from './mapping-key-type';
import { MemberAccess } from './member-access';
import { YulStatement } from './yul-statement';
import { YulBlock } from './yul-block';
import { YulVariableDeclaration } from './yul-variable-declaration';
import { YulAssignment } from './yul-assignment';
import { YulIfStatement } from './yul-if-statement';
import { YulForStatement } from './yul-for-statement';
import { YulSwitchCase } from './yul-switch-case';
import { YulSwitchStatement } from './yul-switch-statement';
import { YulFunctionDefinition } from './yul-function-definition';
import { YulPath } from './yul-path';
import { YulFunctionCall } from './yul-function-call';
import { YulBoolean } from './yul-boolean';
import { YulLiteral } from './yul-literal';
import { YulExpression } from './yul-expression';
import { UnaryPrefixOperation } from './unary-prefix-operation';
import { PrimaryExpression } from './primary-expression';
import { OrderComparison } from './order-comparison';
import { Conditional } from './conditional';
import { PayableConversion } from './payable-conversion';
import { Assignment } from './assignment';
import { UnarySuffixOperation } from './unary-suffix-operation';
import { ShiftOperation } from './shift-operation';
import { BitAndOperation } from './bit-and-operation';
import { FunctionCall } from './function-call';
import { IndexRangeAccess } from './index-range-access';
import { IndexAccess } from './index-access';
import { AddSubOperation } from './add-sub-operation';
import { BitOrOperation } from './bit-or-operation';
import { ExpOperation } from './exp-operation';
import { AndOperation } from './and-operation';
import { InlineArray } from './inline-array';
import { OrOperation } from './or-operation';
import { MulDivModOperation } from './mul-div-mod-operation';
import { FunctionCallOptions } from './function-call-options';
import { NewExpr } from './new-expr';
import { BitXorOperation } from './bit-xor-operation';
import { Tuple } from './tuple';
import { EqualityComparison } from './equality-comparison';
import { MetaType } from './meta-type';

export type ASTNode =
  | SourceUnit
  | PragmaDirective
  | ImportDirective
  | ImportAliases
  | Path
  | SymbolAliases
  | ContractDefinition
  | InterfaceDefinition
  | LibraryDefinition
  | InheritanceSpecifierList
  | InheritanceSpecifier
  | ContractBodyElement
  | NamedArgument
  | CallArgumentList
  | IdentifierPath
  | ModifierInvocation
  | Visibility
  | ParameterList
  | ParameterDeclaration
  | ConstructorDefinition
  | StateMutability
  | OverrideSpecifier
  | FunctionDefinition
  | ModifierDefinition
  | FallbackFunctionDefinition
  | ReceiveFunctionDefinition
  | StructDefinition
  | StructMember
  | EnumDefinition
  | UserDefinedValueTypeDefinition
  | StateVariableDeclaration
  | ConstantVariableDeclaration
  | EventParameter
  | EventDefinition
  | ErrorParameter
  | ErrorDefinition
  | UserDefinableOperator
  | UsingDirective
  | TypeName
  | ElementaryTypeName
  | FunctionTypeName
  | VariableDeclaration
  | DataLocation
  | Expression
  | AssignOp
  | TupleExpression
  | InlineArrayExpression
  | Identifier
  | Literal
  | LiteralWithSubDenomination
  | BooleanLiteral
  | StringLiteral
  | HexStringLiteral
  | UnicodeStringLiteral
  | NumberLiteral
  | Block
  | UncheckedBlock
  | Statement
  | SimpleStatement
  | IfStatement
  | ForStatement
  | WhileStatement
  | DoWhileStatement
  | ContinueStatement
  | BreakStatement
  | TryStatement
  | CatchClause
  | ReturnStatement
  | EmitStatement
  | RevertStatement
  | AssemblyStatement
  | AssemblyFlags
  | VariableDeclarationList
  | VariableDeclarationTuple
  | VariableDeclarationStatement
  | ExpressionStatement
  | MappingType
  | MappingKeyType
  | MemberAccess
  | YulStatement
  | YulBlock
  | YulVariableDeclaration
  | YulAssignment
  | YulIfStatement
  | YulForStatement
  | YulSwitchCase
  | YulSwitchStatement
  | YulFunctionDefinition
  | YulPath
  | YulFunctionCall
  | YulBoolean
  | YulLiteral
  | YulExpression
  | UnaryPrefixOperation
  | PrimaryExpression
  | OrderComparison
  | Conditional
  | PayableConversion
  | Assignment
  | UnarySuffixOperation
  | ShiftOperation
  | BitAndOperation
  | FunctionCall
  | IndexRangeAccess
  | IndexAccess
  | AddSubOperation
  | BitOrOperation
  | ExpOperation
  | AndOperation
  | InlineArray
  | OrOperation
  | MulDivModOperation
  | FunctionCallOptions
  | NewExpr
  | BitXorOperation
  | Tuple
  | EqualityComparison
  | MetaType;
export type ASTNodeType =
  | 'SourceUnit'
  | 'PragmaDirective'
  | 'ImportDirective'
  | 'ImportAliases'
  | 'Path'
  | 'SymbolAliases'
  | 'ContractDefinition'
  | 'InterfaceDefinition'
  | 'LibraryDefinition'
  | 'InheritanceSpecifierList'
  | 'InheritanceSpecifier'
  | 'ContractBodyElement'
  | 'NamedArgument'
  | 'CallArgumentList'
  | 'IdentifierPath'
  | 'ModifierInvocation'
  | 'Visibility'
  | 'ParameterList'
  | 'ParameterDeclaration'
  | 'ConstructorDefinition'
  | 'StateMutability'
  | 'OverrideSpecifier'
  | 'FunctionDefinition'
  | 'ModifierDefinition'
  | 'FallbackFunctionDefinition'
  | 'ReceiveFunctionDefinition'
  | 'StructDefinition'
  | 'StructMember'
  | 'EnumDefinition'
  | 'UserDefinedValueTypeDefinition'
  | 'StateVariableDeclaration'
  | 'ConstantVariableDeclaration'
  | 'EventParameter'
  | 'EventDefinition'
  | 'ErrorParameter'
  | 'ErrorDefinition'
  | 'UserDefinableOperator'
  | 'UsingDirective'
  | 'TypeName'
  | 'ElementaryTypeName'
  | 'FunctionTypeName'
  | 'VariableDeclaration'
  | 'DataLocation'
  | 'Expression'
  | 'AssignOp'
  | 'TupleExpression'
  | 'InlineArrayExpression'
  | 'Identifier'
  | 'Literal'
  | 'LiteralWithSubDenomination'
  | 'BooleanLiteral'
  | 'StringLiteral'
  | 'HexStringLiteral'
  | 'UnicodeStringLiteral'
  | 'NumberLiteral'
  | 'Block'
  | 'UncheckedBlock'
  | 'Statement'
  | 'SimpleStatement'
  | 'IfStatement'
  | 'ForStatement'
  | 'WhileStatement'
  | 'DoWhileStatement'
  | 'ContinueStatement'
  | 'BreakStatement'
  | 'TryStatement'
  | 'CatchClause'
  | 'ReturnStatement'
  | 'EmitStatement'
  | 'RevertStatement'
  | 'AssemblyStatement'
  | 'AssemblyFlags'
  | 'VariableDeclarationList'
  | 'VariableDeclarationTuple'
  | 'VariableDeclarationStatement'
  | 'ExpressionStatement'
  | 'MappingType'
  | 'MappingKeyType'
  | 'MemberAccess'
  | 'YulStatement'
  | 'YulBlock'
  | 'YulVariableDeclaration'
  | 'YulAssignment'
  | 'YulIfStatement'
  | 'YulForStatement'
  | 'YulSwitchCase'
  | 'YulSwitchStatement'
  | 'YulFunctionDefinition'
  | 'YulPath'
  | 'YulFunctionCall'
  | 'YulBoolean'
  | 'YulLiteral'
  | 'YulExpression'
  | 'UnaryPrefixOperation'
  | 'PrimaryExpression'
  | 'OrderComparison'
  | 'Conditional'
  | 'PayableConversion'
  | 'Assignment'
  | 'UnarySuffixOperation'
  | 'ShiftOperation'
  | 'BitAndOperation'
  | 'FunctionCall'
  | 'IndexRangeAccess'
  | 'IndexAccess'
  | 'AddSubOperation'
  | 'BitOrOperation'
  | 'ExpOperation'
  | 'AndOperation'
  | 'InlineArray'
  | 'OrOperation'
  | 'MulDivModOperation'
  | 'FunctionCallOptions'
  | 'NewExpr'
  | 'BitXorOperation'
  | 'Tuple'
  | 'EqualityComparison'
  | 'MetaType';
export {
  SourceUnit,
  PragmaDirective,
  ImportDirective,
  ImportAliases,
  Path,
  SymbolAliases,
  ContractDefinition,
  InterfaceDefinition,
  LibraryDefinition,
  InheritanceSpecifierList,
  InheritanceSpecifier,
  ContractBodyElement,
  NamedArgument,
  CallArgumentList,
  IdentifierPath,
  ModifierInvocation,
  Visibility,
  ParameterList,
  ParameterDeclaration,
  ConstructorDefinition,
  StateMutability,
  OverrideSpecifier,
  FunctionDefinition,
  ModifierDefinition,
  FallbackFunctionDefinition,
  ReceiveFunctionDefinition,
  StructDefinition,
  StructMember,
  EnumDefinition,
  UserDefinedValueTypeDefinition,
  StateVariableDeclaration,
  ConstantVariableDeclaration,
  EventParameter,
  EventDefinition,
  ErrorParameter,
  ErrorDefinition,
  UserDefinableOperator,
  UsingDirective,
  TypeName,
  ElementaryTypeName,
  FunctionTypeName,
  VariableDeclaration,
  DataLocation,
  Expression,
  AssignOp,
  TupleExpression,
  InlineArrayExpression,
  Identifier,
  Literal,
  LiteralWithSubDenomination,
  BooleanLiteral,
  StringLiteral,
  HexStringLiteral,
  UnicodeStringLiteral,
  NumberLiteral,
  Block,
  UncheckedBlock,
  Statement,
  SimpleStatement,
  IfStatement,
  ForStatement,
  WhileStatement,
  DoWhileStatement,
  ContinueStatement,
  BreakStatement,
  TryStatement,
  CatchClause,
  ReturnStatement,
  EmitStatement,
  RevertStatement,
  AssemblyStatement,
  AssemblyFlags,
  VariableDeclarationList,
  VariableDeclarationTuple,
  VariableDeclarationStatement,
  ExpressionStatement,
  MappingType,
  MappingKeyType,
  MemberAccess,
  YulStatement,
  YulBlock,
  YulVariableDeclaration,
  YulAssignment,
  YulIfStatement,
  YulForStatement,
  YulSwitchCase,
  YulSwitchStatement,
  YulFunctionDefinition,
  YulPath,
  YulFunctionCall,
  YulBoolean,
  YulLiteral,
  YulExpression,
  UnaryPrefixOperation,
  PrimaryExpression,
  OrderComparison,
  Conditional,
  PayableConversion,
  Assignment,
  UnarySuffixOperation,
  ShiftOperation,
  BitAndOperation,
  FunctionCall,
  IndexRangeAccess,
  IndexAccess,
  AddSubOperation,
  BitOrOperation,
  ExpOperation,
  AndOperation,
  InlineArray,
  OrOperation,
  MulDivModOperation,
  FunctionCallOptions,
  NewExpr,
  BitXorOperation,
  Tuple,
  EqualityComparison,
  MetaType,
};
