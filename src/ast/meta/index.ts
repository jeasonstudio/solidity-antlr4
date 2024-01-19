import * as nodeMap from './index.node';
import { UnionSyntaxNode, UnionSyntaxNodeType } from '../base';

export type MetaNode = UnionSyntaxNode<typeof nodeMap>;
export type MetaNodeType = UnionSyntaxNodeType<typeof nodeMap>;

export const metaNodeTypes = Object.keys(nodeMap) as MetaNodeType[];
export * from './data-location';
export * from './identifier-path';
export * from './import-aliases';
export * from './import-directive';
export * from './inheritance-specifier-list';
export * from './inheritance-specifier';
export * from './modifier-invocation';
export * from './override-specifier';
export * from './parameter-list';
export * from './path';
export * from './pragma-directive';
export * from './source-unit';
export * from './symbol-aliases';
export * from './using-aliases';
export * from './using-directive';
