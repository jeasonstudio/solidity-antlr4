import * as nodeMap from './index.node';
import { DeclarationNode } from './declaration';
import { ExpressionNode } from './expression';
import { MetaNode } from './meta';
import { StatementNode } from './statement';
import { TypeNode } from './type';
import { YulNode } from './yul';

export type SyntaxNode =
  | DeclarationNode
  | ExpressionNode
  | MetaNode
  | StatementNode
  | TypeNode
  | YulNode;

export type SyntaxNodeType = SyntaxNode['type'];

export const syntaxNodeTypes = Object.keys(nodeMap) as SyntaxNodeType[];

export * from './declaration';
export * from './expression';
export * from './meta';
export * from './statement';
export * from './type';
export * from './yul';
