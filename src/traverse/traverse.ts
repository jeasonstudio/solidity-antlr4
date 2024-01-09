import { SyntaxNode, SyntaxNodeType } from '../ast';
import { isSyntaxNode, keysInNode } from '../ast/base';
import { LookUp } from '../ast/utils';
import { matches as lodashMatches } from 'lodash-es';
import { PartialDeep } from 'type-fest';

export type TraverseFilter<T extends SyntaxNode = SyntaxNode> = PartialDeep<T>;

export type TraversePath<T extends SyntaxNode = SyntaxNode, FT extends SyntaxNode = SyntaxNode> = {
  node: T;
  parent?: FT;
  matches: (filter: TraverseFilter<T>, parentFilter?: TraverseFilter<FT>) => boolean;
};

export type TraverseListener<T extends SyntaxNode = SyntaxNode> = (path: TraversePath<T>) => void;

export type TraverseHandlers = {
  [K in SyntaxNodeType]?: TraverseListener<LookUp<SyntaxNode, K>>;
} & {
  [K in SyntaxNodeType as `exit${K}`]?: TraverseListener<LookUp<SyntaxNode, K>>;
} & {
  enter?: TraverseListener<SyntaxNode>;
  exit?: TraverseListener<SyntaxNode>;
};

export const createTraverse = (handlers: TraverseHandlers) => {
  const walker = (currentNode: SyntaxNode, parentNode?: SyntaxNode) => {
    if (!isSyntaxNode(currentNode)) return; // end of recursion

    const nodeType = currentNode.type as SyntaxNodeType;
    const path: TraversePath = {
      node: currentNode,
      parent: parentNode,
      matches: (filter, parentFilter) => {
        if (!parentFilter || !parentNode) {
          return lodashMatches(filter)(currentNode);
        }
        return lodashMatches(filter)(currentNode) && lodashMatches(parentFilter)(parentNode);
      },
    };

    // enter executes before all enterXxx
    handlers.enter?.(path);
    handlers[nodeType]?.(path as any);

    const keys = keysInNode(currentNode);
    for (let index = 0; index < keys.length; index += 1) {
      const valueInKey = currentNode[keys[index]];
      if (isSyntaxNode(valueInKey)) {
        walker(valueInKey, currentNode);
      } else if (Array.isArray(valueInKey) && valueInKey.some(isSyntaxNode)) {
        valueInKey.forEach((nextNode) => walker(nextNode, currentNode));
      }
      // else should be ignored
    }

    handlers[`exit${nodeType}`]?.(path as any);
    handlers.exit?.(path);
  };
  return walker;
};

export const traverse = (currentNode: SyntaxNode, handlers: TraverseHandlers) =>
  createTraverse(handlers)(currentNode);
