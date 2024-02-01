import * as ast from '../../ast';
import { BasePrinter, Doc, PrintFunc } from './base';

export class PrinterStatement
  extends BasePrinter
  implements Record<`print${ast.StatementNodeType}`, PrintFunc<any>>
{
  printAssemblyStatement: PrintFunc<ast.AssemblyStatement> = ({ node, path, print }) => {
    const parts: Doc[] = ['assembly'];
    if (node.dialect !== null) {
      parts.push(this.space, this.quote, node.dialect, this.quote);
    }
    if (node.flags !== null) {
      parts.push(
        this.space,
        this.tuple(this.paramater((node.flags ?? []).map((f) => [this.quote, f, this.quote]))),
      );
    }

    const statements = path.map((p) => [print(p), this.pangu(p)], 'yulStatements');
    parts.push(
      this.space,
      this.block(
        this.builders.join(this.builders.hardline, statements),
        !node.yulStatements.length,
      ),
    );
    return this.builders.group(parts);
  };
  printBlock: PrintFunc<ast.Block> = ({ node, path, print }) => {
    const statements = path.map((p) => [print(p), this.pangu(p)], 'statements');
    return this.block(
      [this.builders.join(this.builders.line, statements), this.builders.breakParent],
      !node.statements.length,
    );
  };
  printBreakStatement: PrintFunc<ast.BreakStatement> = ({ node }) => [node.name, this.semi];
  printCatchClause: PrintFunc<ast.CatchClause> = ({ node, path, print }) => {
    const groupId = Symbol('catch');
    const parts: Doc[] = ['catch'];
    if (node.errorName !== null || node.parameters !== null) parts.push(this.space);
    if (node.errorName !== null) parts.push(path.call(print, 'errorName'));
    if (node.parameters !== null) {
      parts.push(this.tuple(this.paramater(path.map(print, 'parameters')), groupId));
    }
    return [this.builders.group(parts, { id: groupId }), this.space, path.call(print, 'body')];
  };
  printContinueStatement: PrintFunc<ast.ContinueStatement> = ({ node }) => [node.name, this.semi];
  printDoWhileStatement: PrintFunc<ast.DoWhileStatement> = ({ path, print }) => {
    const parts: Doc[] = ['while', this.space, this.tuple(path.call(print, 'condition'))];
    return ['do', this.space, path.call(print, 'body'), this.space, this.builders.group(parts)];
  };
  printEmitStatement: PrintFunc<ast.EmitStatement> = ({ path, print }) => {
    return this.builders.group([
      'emit',
      this.space,
      path.call(print, 'expression'),
      this.tuple(path.call(print, 'arguments')),
      this.semi,
    ]);
  };
  printExpressionStatement: PrintFunc<ast.ExpressionStatement> = ({ path, print }) => {
    return [path.call(print, 'expression'), this.semi];
  };
  printForStatement: PrintFunc<ast.ForStatement> = ({ node, path, print }) => {
    const parts: Doc[] = ['for'];
    const initialization =
      node.initializationExpression === null ? ';' : path.call(print, 'initializationExpression');
    const condition =
      node.conditionExpression === null ? ';' : path.call(print, 'conditionExpression');
    const loop = node.loopExpression === null ? '' : path.call(print, 'loopExpression');
    parts.push(
      this.space,
      this.tuple(this.builders.join(this.space, [initialization, condition, loop])),
    );
    parts.push(this.space, path.call(print, 'body'));
    return this.builders.group(parts);
  };
  printIfStatement: PrintFunc<ast.IfStatement> = ({ node, path, print }) => {
    const parts: Doc[] = [
      'if',
      this.space,
      this.tuple(path.call(print, 'condition')),
      this.space,
      path.call(print, 'ifStatement'),
    ];
    if (node.elseStatement !== null) {
      parts.push(this.space, 'else', this.space, path.call(print, 'elseStatement'));
    }
    return this.builders.group(parts);
  };
  printReturnStatement: PrintFunc<ast.ReturnStatement> = ({ node, path, print }) => {
    const parts: Doc[] = ['return'];
    if (node.expression !== null) {
      parts.push(this.space, path.call(print, 'expression'));
    }
    parts.push(this.semi);
    return this.builders.group(parts);
  };
  printRevertStatement: PrintFunc<ast.RevertStatement> = ({ path, print }) => {
    return this.builders.group([
      'revert',
      this.space,
      path.call(print, 'expression'),
      this.tuple(path.call(print, 'arguments')),
      this.semi,
    ]);
  };
  printTryStatement: PrintFunc<ast.TryStatement> = ({ node, print, path }) => {
    const parts: Doc[] = ['try', this.space, path.call(print, 'expression')];
    if (node.returnParameters !== null) {
      parts.push(this.space, [
        'returns',
        this.space,
        this.tuple(this.paramater(path.map(print, 'returnParameters'))),
      ]);
    }
    parts.push(this.space, path.call(print, 'body'));
    parts.push(this.space, this.builders.join(this.space, path.map(print, 'catchClauses')));
    parts.push(this.semi);
    return this.builders.group(parts);
  };
  printVariableDeclarationStatement: PrintFunc<ast.VariableDeclarationStatement> = ({
    node,
    path,
    print,
  }) => {
    const parts: Doc[] = [];
    if (node.variableTuple !== null) {
      parts.push(this.tuple(this.paramater(path.map(print, 'variableTuple'))));
    } else {
      parts.push(path.call(print, 'variable'));
    }
    if (node.expression !== null) {
      parts.push(this.space, '=', this.space, path.call(print, 'expression'));
    }
    parts.push(this.semi);
    return this.builders.group(parts);
  };
  printWhileStatement: PrintFunc<ast.WhileStatement> = ({ path, print }) => {
    const parts: Doc[] = ['while', this.space, this.tuple(path.call(print, 'condition'))];
    return [this.builders.group(parts), this.space, path.call(print, 'body')];
  };
}
