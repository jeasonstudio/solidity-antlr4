import * as ast from '../../ast';
import { PrintFunc } from './base';

import { PrinterDeclaration } from './declaration';
import { PrinterExpression } from './expression';
import { PrinterMeta } from './meta';
import { PrinterStatement } from './statement';
import { PrinterType } from './type';
import { PrinterYul } from './yul';

export const printer: Record<`print${ast.SyntaxNodeType}`, PrintFunc<any>> = Object.assign(
  {},
  new PrinterDeclaration(),
  new PrinterExpression(),
  new PrinterMeta(),
  new PrinterStatement(),
  new PrinterType(),
  new PrinterYul(),
);
