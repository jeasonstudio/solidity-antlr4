import * as nodeMap from './index.node';
import { UnionSyntaxNode, UnionSyntaxNodeType } from '../base';

export type DeclarationNode = UnionSyntaxNode<typeof nodeMap>;
export type DeclarationNodeType = UnionSyntaxNodeType<typeof nodeMap>;

export * from './contract-body-element';
export * from './contract-definition';
export * from './enum-definition';
export * from './error-definition';
export * from './event-definition';
export * from './function-definition';
export * from './modifier-definition';
export * from './state-mutability';
export * from './struct-definition';
export * from './struct-member';
export * from './user-defined-value-type-definition';
export * from './variable-declaration-list';
export * from './variable-declaration-tuple';
export * from './variable-declaration';
export * from './visibility';
