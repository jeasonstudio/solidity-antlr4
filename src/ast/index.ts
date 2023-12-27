import { DeclarationNode, DeclarationNodeType } from './declaration';
import { ExpressionNode, ExpressionNodeType } from './expression';
import { MetaNode, MetaNodeType } from './meta';
import { StatementNode, StatementNodeType } from './statement';
import { TypeNode, TypeNodeType } from './type';
import { YulNode, YulNodeType } from './yul';

export type SyntaxNode =
  | DeclarationNode
  | ExpressionNode
  | MetaNode
  | StatementNode
  | TypeNode
  | YulNode;

export type SyntaxNodeType =
  | DeclarationNodeType
  | ExpressionNodeType
  | MetaNodeType
  | StatementNodeType
  | TypeNodeType
  | YulNodeType;

export * from './declaration';
export * from './expression';
export * from './meta';
export * from './statement';
export * from './type';
export * from './yul';
