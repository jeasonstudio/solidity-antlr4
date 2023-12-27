import { SyntaxNode } from '../ast';
import { isSyntaxNode, keysInNode } from '../ast/base';

export type SerializeHandler<R extends any = SyntaxNode> = (ast: SyntaxNode) => R;

export const serialize = <R = SyntaxNode, T extends SyntaxNode = SyntaxNode>(
  _ast: T | T[],
  handler?: SerializeHandler<R>,
): R => {
  if (Array.isArray(_ast)) {
    const result: any[] = [];
    for (let index = 0; index < _ast.length; index += 1) {
      result.push(serialize(_ast[index], handler));
    }
    return result as R;
  }

  const ast = handler ? handler(_ast) : (_ast as unknown as R);
  if (!isSyntaxNode(ast)) return ast;

  const keys = keysInNode<any>(ast);
  return Object.fromEntries(keys.map((key) => [key, serialize(ast[key], handler)])) as any;
};
