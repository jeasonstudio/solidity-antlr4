import { LookUp } from '../ast/base';
import { SyntaxNode, SyntaxNodeType } from '../ast';
import { TraversePath, traverse } from './traverse';

export type VisitListener<T extends SyntaxNode = SyntaxNode> = (path: TraversePath<T>) => void;

export type VisitHandlers = {
  [K in SyntaxNodeType]?: VisitListener<LookUp<SyntaxNode, K>>;
} & {
  [K in SyntaxNodeType as `exit${K}`]?: VisitListener<LookUp<SyntaxNode, K>>;
} & {
  enter?: VisitListener<SyntaxNode>;
  exit?: VisitListener<SyntaxNode>;
};

export const visit = <T extends SyntaxNode>(ast: T, handlers: VisitHandlers): void => {
  traverse(ast, (p) => {
    const nodeType = p.node.type;
    handlers.enter?.(p);
    handlers[nodeType]?.(p as any);
    handlers[`exit${nodeType}`]?.(p as any);
    handlers.exit?.(p);
  });
};
