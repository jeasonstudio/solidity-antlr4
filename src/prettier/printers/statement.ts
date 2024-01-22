import * as ast from '../../ast';
import { PrintFunc } from './base';

export class PrinterStatement implements Record<`print${ast.StatementNodeType}`, PrintFunc<any>> {
  printAssemblyStatement: PrintFunc<ast.AssemblyStatement>;
  printBlock: PrintFunc<ast.Block>;
  printBreakStatement: PrintFunc<ast.BreakStatement>;
  printCatchClause: PrintFunc<ast.CatchClause>;
  printContinueStatement: PrintFunc<ast.ContinueStatement>;
  printDoWhileStatement: PrintFunc<ast.DoWhileStatement>;
  printEmitStatement: PrintFunc<ast.EmitStatement>;
  printForStatement: PrintFunc<ast.ForStatement>;
  printIfStatement: PrintFunc<ast.IfStatement>;
  printReturnStatement: PrintFunc<ast.ReturnStatement>;
  printRevertStatement: PrintFunc<ast.RevertStatement>;
  printTryStatement: PrintFunc<ast.TryStatement>;
  printVariableDeclarationStatement: PrintFunc<ast.VariableDeclarationStatement>;
  printWhileStatement: PrintFunc<ast.WhileStatement>;
}
