import { YulAssignment } from './yul-assignment';
import { YulBlock } from './yul-block';
import { YulBoolean } from './yul-boolean';
import { YulExpression } from './yul-expression';
import { YulForStatement } from './yul-for-statement';
import { YulFunctionCall } from './yul-function-call';
import { YulFunctionDefinition } from './yul-function-definition';
import { YulIfStatement } from './yul-if-statement';
import { YulLiteral } from './yul-literal';
import { YulPath } from './yul-path';
import { YulStatement } from './yul-statement';
import { YulSwitchCase } from './yul-switch-case';
import { YulSwitchStatement } from './yul-switch-statement';
import { YulVariableDeclaration } from './yul-variable-declaration';

export type YulNode =
  | YulAssignment
  | YulBlock
  | YulBoolean
  | YulExpression
  | YulForStatement
  | YulFunctionCall
  | YulFunctionDefinition
  | YulIfStatement
  | YulLiteral
  | YulPath
  | YulStatement
  | YulSwitchCase
  | YulSwitchStatement
  | YulVariableDeclaration;

export type YulNodeType =
  | 'YulAssignment'
  | 'YulBlock'
  | 'YulBoolean'
  | 'YulExpression'
  | 'YulForStatement'
  | 'YulFunctionCall'
  | 'YulFunctionDefinition'
  | 'YulIfStatement'
  | 'YulLiteral'
  | 'YulPath'
  | 'YulStatement'
  | 'YulSwitchCase'
  | 'YulSwitchStatement'
  | 'YulVariableDeclaration';

export {
  YulAssignment,
  YulBlock,
  YulBoolean,
  YulExpression,
  YulForStatement,
  YulFunctionCall,
  YulFunctionDefinition,
  YulIfStatement,
  YulLiteral,
  YulPath,
  YulStatement,
  YulSwitchCase,
  YulSwitchStatement,
  YulVariableDeclaration,
};
