import { ContractBodyElement } from './contract-body-element';
import { ContractDefinition, InterfaceDefinition, LibraryDefinition } from './contract-definition';
import { EnumDefinition } from './enum-definition';
import { ErrorDefinition } from './error-definition';
import { EventDefinition } from './event-definition';
import {
  ConstructorDefinition,
  FunctionDefinition,
  FallbackFunctionDefinition,
  ReceiveFunctionDefinition,
} from './function-definition';
import { ModifierDefinition } from './modifier-definition';
import { StateMutability } from './state-mutability';
import { StructDefinition } from './struct-definition';
import { StructMember } from './struct-member';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { VariableDeclarationList } from './variable-declaration-list';
import { VariableDeclarationTuple } from './variable-declaration-tuple';
import {
  VariableDeclaration,
  ParameterDeclaration,
  StateVariableDeclaration,
  ConstantVariableDeclaration,
  ErrorParameter,
  EventParameter,
} from './variable-declaration';
import { Visibility } from './visibility';

export type DeclarationNode =
  | ContractDefinition
  | EnumDefinition
  | ErrorDefinition
  | EventDefinition
  | FunctionDefinition
  | ModifierDefinition
  | StateMutability
  | StructDefinition
  | StructMember
  | UserDefinedValueTypeDefinition
  | VariableDeclaration
  | Visibility;

export type DeclarationNodeType =
  | 'ContractDefinition'
  | 'EnumDefinition'
  | 'ErrorDefinition'
  | 'EventDefinition'
  | 'FunctionDefinition'
  | 'ModifierDefinition'
  | 'StateMutability'
  | 'StructDefinition'
  | 'StructMember'
  | 'UserDefinedValueTypeDefinition'
  | 'VariableDeclaration'
  | 'Visibility';

export {
  ContractBodyElement,
  ContractDefinition,
  InterfaceDefinition,
  LibraryDefinition,
  EnumDefinition,
  ErrorDefinition,
  EventDefinition,
  ConstructorDefinition,
  FunctionDefinition,
  FallbackFunctionDefinition,
  ReceiveFunctionDefinition,
  ModifierDefinition,
  StateMutability,
  StructDefinition,
  StructMember,
  UserDefinedValueTypeDefinition,
  VariableDeclarationList,
  VariableDeclarationTuple,
  VariableDeclaration,
  ParameterDeclaration,
  StateVariableDeclaration,
  ConstantVariableDeclaration,
  ErrorParameter,
  EventParameter,
  Visibility,
};
