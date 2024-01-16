import { SyntaxNode } from '../ast';
import { TraversePath, traverse } from './traverse';

export type SerializeHandler = (path: TraversePath<SyntaxNode>) => any;

export const serialize = <T extends SyntaxNode = SyntaxNode>(
  _ast: T,
  handler?: SerializeHandler,
): T => {
  return traverse(_ast, (p) => {
    if (handler) p.rewrite(handler(p));
  });
};
