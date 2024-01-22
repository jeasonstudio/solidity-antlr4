import * as ast from '../../ast';
import { PrintFunc } from './base';

export class PrinterYul implements Record<`print${ast.YulNodeType}`, PrintFunc<any>> {
  printYulAssignment: PrintFunc<ast.YulAssignment>;
  printYulBlock: PrintFunc<ast.YulBlock>;
  printYulBoolean: PrintFunc<ast.YulBoolean>;
  printYulForStatement: PrintFunc<ast.YulForStatement>;
  printYulFunctionCall: PrintFunc<ast.YulFunctionCall>;
  printYulFunctionDefinition: PrintFunc<ast.YulFunctionDefinition>;
  printYulIfStatement: PrintFunc<ast.YulIfStatement>;
  printYulLiteral: PrintFunc<ast.YulLiteral>;
  printYulPath: PrintFunc<ast.YulPath>;
  printYulStatement: PrintFunc<ast.YulStatement>;
  printYulSwitchCase: PrintFunc<ast.YulSwitchCase>;
  printYulSwitchStatement: PrintFunc<ast.YulSwitchStatement>;
  printYulVariableDeclaration: PrintFunc<ast.YulVariableDeclaration>;
}
