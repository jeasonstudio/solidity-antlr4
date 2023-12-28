import { BaseNode } from './base';

export type UnionSyntaxNode<T extends Record<string, typeof BaseNode>> = InstanceType<T[keyof T]>;
export type UnionSyntaxNodeType<T extends Record<string, typeof BaseNode>> = keyof T;
export type LookUp<U extends { type: any }, T> = U extends infer P
  ? P extends { type: any }
    ? T extends P['type']
      ? P
      : never
    : never
  : never;
