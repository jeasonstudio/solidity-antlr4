import type { Printer } from 'prettier';
import * as ast from '../../ast';
import { PrintFunc } from './base';

import { PrinterDeclaration } from './declaration';
import { PrinterExpression } from './expression';
import { PrinterMeta } from './meta';
import { PrinterStatement } from './statement';
import { PrinterType } from './type';
import { PrinterYul } from './yul';

export * from './comment';

export const print: Printer<any>['print'] = (path, options, _print) => {
  const node = path.node;
  // check exist
  if (node === null) return '';

  // check array
  if (Array.isArray(node)) return path.map(_print);

  const printerName = `print${node.type}` as `print${ast.SyntaxNodeType}`;
  const mixin: Record<`print${ast.SyntaxNodeType}`, PrintFunc> = Object.assign(
    {},
    new PrinterDeclaration(options, _print),
    new PrinterExpression(options, _print),
    new PrinterMeta(options, _print),
    new PrinterStatement(options, _print),
    new PrinterType(options, _print),
    new PrinterYul(options, _print),
  );
  const printer = mixin[printerName];
  if (!printer) throw new Error(`missing printer for node type "${node.type}"`);

  // print
  const document = printer({ path, options, print: _print, node });

  // debug
  // if (node.comments?.some((c) => !c.printed)) {
  //   console.log(node.type, node.comments?.length, node.comments);
  // }

  return document;
};
