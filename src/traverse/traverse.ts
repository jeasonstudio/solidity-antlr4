import { SyntaxNode, SyntaxNodeType } from '../ast';
import { isSyntaxNode, keysInNode } from '../ast/base';

export type TraverseEnter = 'enter' | SyntaxNodeType;
export type TraverseExit = 'exit' | `exit${SyntaxNodeType}`;
export type TraverseEvent = TraverseEnter | TraverseExit;
export type TraverseListener = (currentNode: SyntaxNode, parentNode?: SyntaxNode) => void;

export const createTraverse = (handlers: Partial<Record<TraverseEvent, TraverseListener>>) => {
  const walker = (currentNode: SyntaxNode, parentNode?: SyntaxNode) => {
    if (!isSyntaxNode(currentNode)) return; // end of recursion

    const nodeType = currentNode.type as SyntaxNodeType;

    // enter executes before all enterXxx
    if (handlers.enter) handlers.enter!(currentNode, parentNode);
    if (handlers[nodeType]) handlers[nodeType]!(currentNode, parentNode);

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

    if (handlers[`exit${nodeType}`]) handlers[`exit${nodeType}`]!(currentNode, parentNode);
    if (handlers.exit) handlers.exit!(currentNode, parentNode);
  };
  return walker;
};

export const traverse = (
  currentNode: SyntaxNode,
  handlers: Partial<Record<TraverseEvent, TraverseListener>>,
  parentNode?: SyntaxNode,
) => createTraverse(handlers)(currentNode, parentNode);
