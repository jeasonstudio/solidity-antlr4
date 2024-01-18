import { PartialDeep } from 'type-fest';
import { SyntaxNode, SyntaxNodeType } from '../ast';
import { TraversePath, traverse } from './traverse';

export interface QueryOptions {
  queryAll?: boolean;
}

export enum SelectorCombinator {
  Child = '>',
  Inside = ' ',
  // After = '+',
  // Before = '~',
}

const getPathKey = (path: TraversePath<SyntaxNode>) => `${path.path}#${JSON.stringify(path.node)}`;

export type SelectorFilter = '*' | SyntaxNodeType | PartialDeep<SyntaxNode>;

export class Selector {
  public static create = (filter: SelectorFilter): Selector => {
    let target: PartialDeep<SyntaxNode> = {};
    if (typeof filter !== 'string') {
      target = filter;
    } else if (filter === '*') {
      target = {};
    } else {
      target = { type: filter as any };
    }
    return new Selector(target);
  };

  protected constructor(
    public filter: PartialDeep<SyntaxNode>,
    public next?: Selector,
    public combinator?: SelectorCombinator,
  ) {}

  public _prev?: Selector;
  public _getStartSelector = (): Selector => {
    return this._prev ? this._prev._getStartSelector() : this;
  };

  private chain = (combinator: SelectorCombinator, f: SelectorFilter): Selector => {
    this.combinator = combinator;
    const next = Selector.create(f);
    next._prev = this;
    this.next = next;
    return next;
  };

  public child = (f: SelectorFilter): Selector => {
    return this.chain(SelectorCombinator.Child, f);
  };

  public inside = (f: SelectorFilter): Selector => {
    return this.chain(SelectorCombinator.Inside, f);
  };

  public query = <T extends SyntaxNode = SyntaxNode>(
    node: SyntaxNode | null,
    options: QueryOptions = {},
  ): Record<string, TraversePath<T>> => {
    if (!node) return {};
    const result: Record<string, TraversePath<T>> = {};
    traverse(node, (path) => {
      if (path.matches(this.filter)) Object.assign(result, this.recursion<T>(path, options));
    });
    return result;
  };

  public recursion = <T extends SyntaxNode = SyntaxNode>(
    path: TraversePath<SyntaxNode>,
    options: QueryOptions = {},
  ): Record<string, TraversePath<T>> => {
    if (!path.matches(this.filter)) return {}; // should not happen
    const result: Record<string, TraversePath<T>> = {};

    if (!this.next) {
      result[getPathKey(path)] = path as any;
      return result;
    }

    if (this.combinator === SelectorCombinator.Child) {
      traverse(path.node, (p) => {
        if (p.depth === 1 && this.next) Object.assign(result, this.next!.recursion<T>(p, options));
      });
    } else if (this.combinator === SelectorCombinator.Inside) {
      traverse(path.node, (p) => {
        if (this.next) Object.assign(result, this.next!.recursion<T>(p, options));
      });
    }

    return result;
  };
}

export const createSelector = Selector.create;

const querySelectorInner = <T extends SyntaxNode = SyntaxNode>(
  ast: SyntaxNode | null,
  selector: Selector | Selector[],
  options: QueryOptions = {},
): T[] => {
  if (!ast) return [];

  const result: Record<string, TraversePath<T>> = {};
  const selectors = Array.isArray(selector) ? selector : [selector];

  for (let index = 0; index < selectors.length; index += 1) {
    const current = selectors[index];
    const startSelector = current._getStartSelector();
    Object.assign(result, startSelector.query<T>(ast, options));
  }

  return Object.values(result).map((p) => p.node);
};

export const querySelector = <T extends SyntaxNode = SyntaxNode>(
  ast: SyntaxNode | null,
  selector: Selector | Selector[],
): T | null => {
  return querySelectorInner<T>(ast, selector, { queryAll: false })?.[0] ?? null;
};

export const querySelectorAll = <T extends SyntaxNode = SyntaxNode>(
  ast: SyntaxNode | null,
  selector: Selector | Selector[],
): T[] => {
  return querySelectorInner<T>(ast, selector, { queryAll: true });
};
