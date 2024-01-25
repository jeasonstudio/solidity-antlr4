import { Printer } from 'prettier';
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

  // check type
  if (!printer) {
    console.warn('---> Unknown node type: ' + node.type);
    return node.type;
  }

  if (node.comments?.length) {
    console.log(node.type, node.comments.length);
  }

  // print
  const document = printer({ path, options, print: _print, node });
  return document;
};
