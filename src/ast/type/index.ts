import * as nodeMap from './index.node';
import { UnionSyntaxNode, UnionSyntaxNodeType } from '../base';

export type TypeNode = UnionSyntaxNode<typeof nodeMap>;
export type TypeNodeType = UnionSyntaxNodeType<typeof nodeMap>;

export * from './elementary-type-name';
export * from './function-type-name';
export * from './mapping-key-type';
export * from './mapping-type';
export * from './meta-type';
export * from './type-name';
