import { BaseNodeList } from '../base';
import {
  VariableDeclarationTupleContext,
  SolidityParserVisitor,
  VariableDeclarationContext,
} from '../../antlr4';
import { VariableDeclaration } from './variable-declaration';

export type VariableDeclarationTuple = (VariableDeclaration | null)[];

const isVarCtx = (ctx: any): ctx is VariableDeclarationContext =>
  ctx instanceof VariableDeclarationContext;

export const VariableDeclarationTuple = class extends BaseNodeList<VariableDeclaration | null> {
  type = 'VariableDeclarationTuple' as const;
  constructor(ctx: VariableDeclarationTupleContext, visitor: SolidityParserVisitor<any>) {
    const list: (VariableDeclarationContext | null)[] = [];
    const children = ctx.children ?? [];
    for (let index = 0; index < children.length; index += 1) {
      const current = children[index];
      const next = children[index + 1];
      if (!next) continue;
      if (!isVarCtx(current) && isVarCtx(next)) {
        list.push(next);
      } else if (!isVarCtx(current) && !isVarCtx(next)) {
        list.push(null);
      }
    }
    super(list, visitor, (current) => (current === null ? null : current.accept(visitor!)));
  }
};
