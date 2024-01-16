/* eslint-disable prefer-const */
import { clone, matches as lodashMatches } from 'lodash-es';
import { SyntaxNode } from '../ast';
import { isSyntaxNode, isSyntaxNodeList, keysInNode } from '../ast/base';
import { PartialDeep } from 'type-fest';

export interface TraversePath<N extends SyntaxNode = SyntaxNode> {
  /**
   * The key of the node
   * @example "SourceUnit.ContractDefinition"
   */
  path: string;
  /**
   * The depth of the AST, starting from 0
   */
  depth: number;
  /**
   * If the node is in a list, the index of the node in the list
   */
  index: number | null;
  /**
   * Syntax Node form AST
   */
  node: N;
  /**
   * The parent path
   */
  parentPath: TraversePath | null;
  /**
   * Stop traversing
   */
  stop: () => void;
  /**
   * Rewrite the current node
   * @param value The new value to replace the current node
   */
  rewrite: (value: SyntaxNode | any) => void;
  /**
   * Is the current node matches the filter
   * @param filter The filter to match
   */
  matches: (filter: PartialDeep<N>) => boolean;
  /**
   * Get the flatten node list
   */
  getFlattenParents: (maxDepth?: number) => N[];
}

/**
 * Traverse
 * @param ast SyntaxNode Tree
 * @param callback like Array.map, but it will traverse the tree
 * @returns The new AST, the original AST will not be modified
 */
export const traverse = <T extends SyntaxNode>(
  ast: T,
  callback: (path: TraversePath) => void | (() => void),
): T => {
  let shouldStop: boolean = false;
  const stop = () => {
    shouldStop = true;
  };

  // inner recursion function
  const traverseInner = <U extends SyntaxNode>(
    tree: U | U[],
    parentPath: TraversePath | null,
    _index: number | null,
  ): U | U[] => {
    const depth = parentPath?.depth !== undefined ? parentPath.depth + 1 : 0;
    if (isSyntaxNodeList(tree)) {
      // Map format node list
      const nodeList: U[] = [];
      for (let index = 0; index < tree.length; index += 1) {
        if (shouldStop) break;
        nodeList.push(traverseInner(tree[index] as any, parentPath, index));
      }
      return nodeList;
    } else if (isSyntaxNode(tree)) {
      let node = clone(tree);
      const rewrite: TraversePath['rewrite'] = (newNode: any) => {
        node = newNode;
      };
      const matches: TraversePath['matches'] = (filter) => lodashMatches(filter)(node);
      const getFlattenParents: TraversePath['getFlattenParents'] = (
        maxDepth = Number.MAX_SAFE_INTEGER,
      ) => {
        const nodes: any[] = [];
        const recursion = (p: TraversePath) => {
          if (p.parentPath && nodes.length < maxDepth) {
            nodes.unshift(p.parentPath.node);
            recursion(p.parentPath);
          }
        };
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        recursion(path);
        return nodes;
      };

      const path: TraversePath = {
        path: parentPath?.path ? `${parentPath.path}.${node.type}` : node.type,
        depth,
        index: _index,
        node,
        parentPath,
        stop,
        rewrite,
        getFlattenParents,
        matches,
      };

      const exitCallback = callback(path);

      if (shouldStop) return node;
      if (!isSyntaxNode(node)) return node;

      const keys = keysInNode(node);
      for (let index = 0; index < keys.length; index += 1) {
        const valueInKey = node[keys[index]];
        if (isSyntaxNode(valueInKey) || isSyntaxNodeList(valueInKey)) {
          node[keys[index]] = traverseInner(valueInKey, path, null);
        } else {
          node[keys[index]] = valueInKey;
        }
      }

      // Exit callback executes after all
      if (exitCallback && typeof exitCallback === 'function') exitCallback();
      return node;
    }
    return tree;
  };
  return traverseInner(ast, null, null) as T;
};
