import { AssignOp } from './assign-op';
import { Assignment } from './assignment';
import {
  AndOperation,
  AddSubOperation,
  BitAndOperation,
  BitOrOperation,
  BitXorOperation,
  EqualityComparison,
  ExpOperation,
  MulDivModOperation,
  ShiftOperation,
  OrderComparison,
  OrOperation,
} from './binary-operation';
import { BooleanLiteral } from './boolean-literal';
import { CallArgumentList } from './call-argument-list';
import { Conditional } from './conditional';
import { Expression } from './expression';
import { FunctionCallOptions } from './function-call-options';
import { FunctionCall } from './function-call';
import { HexStringLiteral } from './hex-string-literal';
import { Identifier } from './identifier';
import { IndexAccess } from './index-access';
import { IndexRangeAccess } from './index-range-access';
import { InlineArrayExpression } from './inline-array-expression';
import { InlineArray } from './inline-array';
import { Literal } from './literal';
import { MemberAccess } from './member-access';
import { NamedArgument } from './named-argument';
import { NewExpr } from './new-expr';
import { NumberLiteral, LiteralWithSubDenomination } from './number-literal';
import { PayableConversion } from './payable-conversion';
import { PrimaryExpression } from './primary-expression';
import { StringLiteral } from './string-literal';
import { TupleExpression } from './tuple-expression';
import { Tuple } from './tuple';
import { UnaryOperation, UnaryPrefixOperation, UnarySuffixOperation } from './unary-operation';
import { UnicodeStringLiteral } from './unicode-string-literal';
import { UserDefinableOperator } from './user-definable-operator';

export type ExpressionNode =
  | AssignOp
  | Assignment
  | BooleanLiteral
  | Conditional
  | FunctionCallOptions
  | FunctionCall
  | HexStringLiteral
  | Identifier
  | IndexAccess
  | IndexRangeAccess
  | MemberAccess
  | NamedArgument
  | NewExpr
  | NumberLiteral
  | PayableConversion
  | StringLiteral
  | UnaryOperation
  | UnicodeStringLiteral
  | UserDefinableOperator;

export type ExpressionNodeType =
  | 'AssignOp'
  | 'Assignment'
  | 'BooleanLiteral'
  | 'Conditional'
  | 'FunctionCallOptions'
  | 'FunctionCall'
  | 'HexStringLiteral'
  | 'Identifier'
  | 'IndexAccess'
  | 'IndexRangeAccess'
  | 'MemberAccess'
  | 'NamedArgument'
  | 'NewExpr'
  | 'NumberLiteral'
  | 'PayableConversion'
  | 'StringLiteral'
  | 'UnaryOperation'
  | 'UnicodeStringLiteral'
  | 'UserDefinableOperator';

export {
  AssignOp,
  Assignment,
  AndOperation,
  AddSubOperation,
  BitAndOperation,
  BitOrOperation,
  BitXorOperation,
  EqualityComparison,
  ExpOperation,
  MulDivModOperation,
  ShiftOperation,
  OrderComparison,
  OrOperation,
  BooleanLiteral,
  CallArgumentList,
  Conditional,
  Expression,
  FunctionCallOptions,
  FunctionCall,
  HexStringLiteral,
  Identifier,
  IndexAccess,
  IndexRangeAccess,
  InlineArrayExpression,
  InlineArray,
  Literal,
  MemberAccess,
  NamedArgument,
  NewExpr,
  NumberLiteral,
  LiteralWithSubDenomination,
  PayableConversion,
  PrimaryExpression,
  StringLiteral,
  TupleExpression,
  Tuple,
  UnaryOperation,
  UnaryPrefixOperation,
  UnarySuffixOperation,
  UnicodeStringLiteral,
  UserDefinableOperator,
};
