import * as nodeMap from './index.node';
import { UnionSyntaxNode, UnionSyntaxNodeType } from '../base';

export type YulNode = UnionSyntaxNode<typeof nodeMap>;
export type YulNodeType = UnionSyntaxNodeType<typeof nodeMap>;

export * from './yul-assignment';
export * from './yul-block';
export * from './yul-boolean';
export * from './yul-expression';
export * from './yul-for-statement';
export * from './yul-function-call';
export * from './yul-function-definition';
export * from './yul-if-statement';
export * from './yul-literal';
export * from './yul-path';
export * from './yul-statement';
export * from './yul-switch-case';
export * from './yul-switch-statement';
export * from './yul-variable-declaration';
