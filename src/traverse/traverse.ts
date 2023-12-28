import { SyntaxNode, SyntaxNodeType } from '../ast';
import { isSyntaxNode, keysInNode } from '../ast/base';
import { LookUp } from '../ast/utils';

export type TraversePath<T extends SyntaxNode = SyntaxNode> = {
  node: T;
  parent?: SyntaxNode;
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

    // enter executes before all enterXxx
    handlers.enter?.({ node: currentNode, parent: parentNode });
    handlers[nodeType]?.({ node: currentNode as never, parent: parentNode });

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

    handlers[`exit${nodeType}`]?.({ node: currentNode as never, parent: parentNode });
    handlers.exit?.({ node: currentNode, parent: parentNode });
  };
  return walker;
};

export const traverse = (
  currentNode: SyntaxNode,
  handlers: TraverseHandlers,
  parentNode?: SyntaxNode,
) => createTraverse(handlers)(currentNode, parentNode);
