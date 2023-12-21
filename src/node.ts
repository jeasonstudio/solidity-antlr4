import { SourceUnit } from './ast/source-unit';
import { PragmaDirective } from './ast/pragma-directive';
import { ImportDirective } from './ast/import-directive';
import { ImportAliases } from './ast/import-aliases';
import { Path } from './ast/path';
import { SymbolAliases } from './ast/symbol-aliases';
import { ContractDefinition } from './ast/contract-definition';
import { InterfaceDefinition } from './ast/interface-definition';
import { LibraryDefinition } from './ast/library-definition';
import { InheritanceSpecifierList } from './ast/inheritance-specifier-list';
import { InheritanceSpecifier } from './ast/inheritance-specifier';
import { ContractBodyElement } from './ast/contract-body-element';
import { NamedArgument } from './ast/named-argument';
import { CallArgumentList } from './ast/call-argument-list';
import { IdentifierPath } from './ast/identifier-path';
import { ModifierInvocation } from './ast/modifier-invocation';
import { Visibility } from './ast/visibility';
import { ParameterList } from './ast/parameter-list';
import { ParameterDeclaration } from './ast/parameter-declaration';
import { ConstructorDefinition } from './ast/constructor-definition';
import { StateMutability } from './ast/state-mutability';
import { OverrideSpecifier } from './ast/override-specifier';
import { FunctionDefinition } from './ast/function-definition';
import { ModifierDefinition } from './ast/modifier-definition';
import { FallbackFunctionDefinition } from './ast/fallback-function-definition';
import { ReceiveFunctionDefinition } from './ast/receive-function-definition';
import { StructDefinition } from './ast/struct-definition';
import { StructMember } from './ast/struct-member';
import { EnumDefinition } from './ast/enum-definition';
import { UserDefinedValueTypeDefinition } from './ast/user-defined-value-type-definition';
import { StateVariableDeclaration } from './ast/state-variable-declaration';
import { ConstantVariableDeclaration } from './ast/constant-variable-declaration';
import { EventParameter } from './ast/event-parameter';
import { EventDefinition } from './ast/event-definition';
import { ErrorParameter } from './ast/error-parameter';
import { ErrorDefinition } from './ast/error-definition';
import { UserDefinableOperator } from './ast/user-definable-operator';
import { UsingDirective } from './ast/using-directive';
import { TypeName } from './ast/type-name';
import { ElementaryTypeName } from './ast/elementary-type-name';
import { FunctionTypeName } from './ast/function-type-name';
import { VariableDeclaration } from './ast/variable-declaration';
import { DataLocation } from './ast/data-location';
import { Expression } from './ast/expression';
import { AssignOp } from './ast/assign-op';
import { TupleExpression } from './ast/tuple-expression';
import { InlineArrayExpression } from './ast/inline-array-expression';
import { Identifier } from './ast/identifier';
import { Literal } from './ast/literal';
import { LiteralWithSubDenomination } from './ast/literal-with-sub-denomination';
import { BooleanLiteral } from './ast/boolean-literal';
import { StringLiteral } from './ast/string-literal';
import { HexStringLiteral } from './ast/hex-string-literal';
import { UnicodeStringLiteral } from './ast/unicode-string-literal';
import { NumberLiteral } from './ast/number-literal';
import { Block } from './ast/block';
import { UncheckedBlock } from './ast/unchecked-block';
import { Statement } from './ast/statement';
import { SimpleStatement } from './ast/simple-statement';
import { IfStatement } from './ast/if-statement';
import { ForStatement } from './ast/for-statement';
import { WhileStatement } from './ast/while-statement';
import { DoWhileStatement } from './ast/do-while-statement';
import { ContinueStatement } from './ast/continue-statement';
import { BreakStatement } from './ast/break-statement';
import { TryStatement } from './ast/try-statement';
import { CatchClause } from './ast/catch-clause';
import { ReturnStatement } from './ast/return-statement';
import { EmitStatement } from './ast/emit-statement';
import { RevertStatement } from './ast/revert-statement';
import { AssemblyStatement } from './ast/assembly-statement';
import { AssemblyFlags } from './ast/assembly-flags';
import { VariableDeclarationList } from './ast/variable-declaration-list';
import { VariableDeclarationTuple } from './ast/variable-declaration-tuple';
import { VariableDeclarationStatement } from './ast/variable-declaration-statement';
import { ExpressionStatement } from './ast/expression-statement';
import { MappingType } from './ast/mapping-type';
import { MappingKeyType } from './ast/mapping-key-type';
import { MemberAccess } from './ast/member-access';
import { YulStatement } from './ast/yul-statement';
import { YulBlock } from './ast/yul-block';
import { YulVariableDeclaration } from './ast/yul-variable-declaration';
import { YulAssignment } from './ast/yul-assignment';
import { YulIfStatement } from './ast/yul-if-statement';
import { YulForStatement } from './ast/yul-for-statement';
import { YulSwitchCase } from './ast/yul-switch-case';
import { YulSwitchStatement } from './ast/yul-switch-statement';
import { YulFunctionDefinition } from './ast/yul-function-definition';
import { YulPath } from './ast/yul-path';
import { YulFunctionCall } from './ast/yul-function-call';
import { YulBoolean } from './ast/yul-boolean';
import { YulLiteral } from './ast/yul-literal';
import { YulExpression } from './ast/yul-expression';
import { UnaryPrefixOperation } from './ast/unary-prefix-operation';
import { PrimaryExpression } from './ast/primary-expression';
import { OrderComparison } from './ast/order-comparison';
import { Conditional } from './ast/conditional';
import { PayableConversion } from './ast/payable-conversion';
import { Assignment } from './ast/assignment';
import { UnarySuffixOperation } from './ast/unary-suffix-operation';
import { ShiftOperation } from './ast/shift-operation';
import { BitAndOperation } from './ast/bit-and-operation';
import { FunctionCall } from './ast/function-call';
import { IndexRangeAccess } from './ast/index-range-access';
import { IndexAccess } from './ast/index-access';
import { AddSubOperation } from './ast/add-sub-operation';
import { BitOrOperation } from './ast/bit-or-operation';
import { ExpOperation } from './ast/exp-operation';
import { AndOperation } from './ast/and-operation';
import { InlineArray } from './ast/inline-array';
import { OrOperation } from './ast/or-operation';
import { MulDivModOperation } from './ast/mul-div-mod-operation';
import { FunctionCallOptions } from './ast/function-call-options';
import { NewExpr } from './ast/new-expr';
import { BitXorOperation } from './ast/bit-xor-operation';
import { Tuple } from './ast/tuple';
import { EqualityComparison } from './ast/equality-comparison';
import { MetaType } from './ast/meta-type';

export type ASTNode = SourceUnit | PragmaDirective | ImportDirective | ImportAliases | Path | SymbolAliases | ContractDefinition | InterfaceDefinition | LibraryDefinition | InheritanceSpecifierList | InheritanceSpecifier | ContractBodyElement | NamedArgument | CallArgumentList | IdentifierPath | ModifierInvocation | Visibility | ParameterList | ParameterDeclaration | ConstructorDefinition | StateMutability | OverrideSpecifier | FunctionDefinition | ModifierDefinition | FallbackFunctionDefinition | ReceiveFunctionDefinition | StructDefinition | StructMember | EnumDefinition | UserDefinedValueTypeDefinition | StateVariableDeclaration | ConstantVariableDeclaration | EventParameter | EventDefinition | ErrorParameter | ErrorDefinition | UserDefinableOperator | UsingDirective | TypeName | ElementaryTypeName | FunctionTypeName | VariableDeclaration | DataLocation | Expression | AssignOp | TupleExpression | InlineArrayExpression | Identifier | Literal | LiteralWithSubDenomination | BooleanLiteral | StringLiteral | HexStringLiteral | UnicodeStringLiteral | NumberLiteral | Block | UncheckedBlock | Statement | SimpleStatement | IfStatement | ForStatement | WhileStatement | DoWhileStatement | ContinueStatement | BreakStatement | TryStatement | CatchClause | ReturnStatement | EmitStatement | RevertStatement | AssemblyStatement | AssemblyFlags | VariableDeclarationList | VariableDeclarationTuple | VariableDeclarationStatement | ExpressionStatement | MappingType | MappingKeyType | MemberAccess | YulStatement | YulBlock | YulVariableDeclaration | YulAssignment | YulIfStatement | YulForStatement | YulSwitchCase | YulSwitchStatement | YulFunctionDefinition | YulPath | YulFunctionCall | YulBoolean | YulLiteral | YulExpression | UnaryPrefixOperation | PrimaryExpression | OrderComparison | Conditional | PayableConversion | Assignment | UnarySuffixOperation | ShiftOperation | BitAndOperation | FunctionCall | IndexRangeAccess | IndexAccess | AddSubOperation | BitOrOperation | ExpOperation | AndOperation | InlineArray | OrOperation | MulDivModOperation | FunctionCallOptions | NewExpr | BitXorOperation | Tuple | EqualityComparison | MetaType;
export type ASTNodeType = 'SourceUnit' | 'PragmaDirective' | 'ImportDirective' | 'ImportAliases' | 'Path' | 'SymbolAliases' | 'ContractDefinition' | 'InterfaceDefinition' | 'LibraryDefinition' | 'InheritanceSpecifierList' | 'InheritanceSpecifier' | 'ContractBodyElement' | 'NamedArgument' | 'CallArgumentList' | 'IdentifierPath' | 'ModifierInvocation' | 'Visibility' | 'ParameterList' | 'ParameterDeclaration' | 'ConstructorDefinition' | 'StateMutability' | 'OverrideSpecifier' | 'FunctionDefinition' | 'ModifierDefinition' | 'FallbackFunctionDefinition' | 'ReceiveFunctionDefinition' | 'StructDefinition' | 'StructMember' | 'EnumDefinition' | 'UserDefinedValueTypeDefinition' | 'StateVariableDeclaration' | 'ConstantVariableDeclaration' | 'EventParameter' | 'EventDefinition' | 'ErrorParameter' | 'ErrorDefinition' | 'UserDefinableOperator' | 'UsingDirective' | 'TypeName' | 'ElementaryTypeName' | 'FunctionTypeName' | 'VariableDeclaration' | 'DataLocation' | 'Expression' | 'AssignOp' | 'TupleExpression' | 'InlineArrayExpression' | 'Identifier' | 'Literal' | 'LiteralWithSubDenomination' | 'BooleanLiteral' | 'StringLiteral' | 'HexStringLiteral' | 'UnicodeStringLiteral' | 'NumberLiteral' | 'Block' | 'UncheckedBlock' | 'Statement' | 'SimpleStatement' | 'IfStatement' | 'ForStatement' | 'WhileStatement' | 'DoWhileStatement' | 'ContinueStatement' | 'BreakStatement' | 'TryStatement' | 'CatchClause' | 'ReturnStatement' | 'EmitStatement' | 'RevertStatement' | 'AssemblyStatement' | 'AssemblyFlags' | 'VariableDeclarationList' | 'VariableDeclarationTuple' | 'VariableDeclarationStatement' | 'ExpressionStatement' | 'MappingType' | 'MappingKeyType' | 'MemberAccess' | 'YulStatement' | 'YulBlock' | 'YulVariableDeclaration' | 'YulAssignment' | 'YulIfStatement' | 'YulForStatement' | 'YulSwitchCase' | 'YulSwitchStatement' | 'YulFunctionDefinition' | 'YulPath' | 'YulFunctionCall' | 'YulBoolean' | 'YulLiteral' | 'YulExpression' | 'UnaryPrefixOperation' | 'PrimaryExpression' | 'OrderComparison' | 'Conditional' | 'PayableConversion' | 'Assignment' | 'UnarySuffixOperation' | 'ShiftOperation' | 'BitAndOperation' | 'FunctionCall' | 'IndexRangeAccess' | 'IndexAccess' | 'AddSubOperation' | 'BitOrOperation' | 'ExpOperation' | 'AndOperation' | 'InlineArray' | 'OrOperation' | 'MulDivModOperation' | 'FunctionCallOptions' | 'NewExpr' | 'BitXorOperation' | 'Tuple' | 'EqualityComparison' | 'MetaType';
export { SourceUnit, PragmaDirective, ImportDirective, ImportAliases, Path, SymbolAliases, ContractDefinition, InterfaceDefinition, LibraryDefinition, InheritanceSpecifierList, InheritanceSpecifier, ContractBodyElement, NamedArgument, CallArgumentList, IdentifierPath, ModifierInvocation, Visibility, ParameterList, ParameterDeclaration, ConstructorDefinition, StateMutability, OverrideSpecifier, FunctionDefinition, ModifierDefinition, FallbackFunctionDefinition, ReceiveFunctionDefinition, StructDefinition, StructMember, EnumDefinition, UserDefinedValueTypeDefinition, StateVariableDeclaration, ConstantVariableDeclaration, EventParameter, EventDefinition, ErrorParameter, ErrorDefinition, UserDefinableOperator, UsingDirective, TypeName, ElementaryTypeName, FunctionTypeName, VariableDeclaration, DataLocation, Expression, AssignOp, TupleExpression, InlineArrayExpression, Identifier, Literal, LiteralWithSubDenomination, BooleanLiteral, StringLiteral, HexStringLiteral, UnicodeStringLiteral, NumberLiteral, Block, UncheckedBlock, Statement, SimpleStatement, IfStatement, ForStatement, WhileStatement, DoWhileStatement, ContinueStatement, BreakStatement, TryStatement, CatchClause, ReturnStatement, EmitStatement, RevertStatement, AssemblyStatement, AssemblyFlags, VariableDeclarationList, VariableDeclarationTuple, VariableDeclarationStatement, ExpressionStatement, MappingType, MappingKeyType, MemberAccess, YulStatement, YulBlock, YulVariableDeclaration, YulAssignment, YulIfStatement, YulForStatement, YulSwitchCase, YulSwitchStatement, YulFunctionDefinition, YulPath, YulFunctionCall, YulBoolean, YulLiteral, YulExpression, UnaryPrefixOperation, PrimaryExpression, OrderComparison, Conditional, PayableConversion, Assignment, UnarySuffixOperation, ShiftOperation, BitAndOperation, FunctionCall, IndexRangeAccess, IndexAccess, AddSubOperation, BitOrOperation, ExpOperation, AndOperation, InlineArray, OrOperation, MulDivModOperation, FunctionCallOptions, NewExpr, BitXorOperation, Tuple, EqualityComparison, MetaType };
