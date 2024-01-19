import * as nodeMap from './index.node';
import { UnionSyntaxNode, UnionSyntaxNodeType } from '../base';

export type StatementNode = UnionSyntaxNode<typeof nodeMap>;
export type StatementNodeType = UnionSyntaxNodeType<typeof nodeMap>;

export const statementNodeTypes = Object.keys(nodeMap) as StatementNodeType[];
export * from './assembly-flags';
export * from './assembly-statement';
export * from './block';
export * from './break-statement';
export * from './catch-clause';
export * from './continue-statement';
export * from './do-while-statement';
export * from './emit-statement';
export * from './expression-statement';
export * from './for-statement';
export * from './if-statement';
export * from './return-statement';
export * from './revert-statement';
export * from './simple-statement';
export * from './statement';
export * from './try-statement';
export * from './variable-declaration-statement';
export * from './while-statement';
