import * as ast from '../../ast';
import { PrintFunc, h } from './base';

export class PrinterMeta implements Record<`print${ast.MetaNodeType}`, PrintFunc<any>> {
  printDataLocation: PrintFunc<ast.DataLocation>;
  printIdentifierPath: PrintFunc<ast.IdentifierPath> = ({ node, path, print }) => {
    return h.join(h.dot, path.map(print, 'identifiers'));
  };
  printImportAliases: PrintFunc<ast.ImportAliases>;
  printImportDirective: PrintFunc<ast.ImportDirective>;
  printInheritanceSpecifier: PrintFunc<ast.InheritanceSpecifier> = ({ node, path, print }) => {
    return h.join2('', [
      path.call(print, 'baseName'),
      node.arguments.length ? ['(', h.join2(h.separator, path.map(print, 'arguments')), ')'] : null,
    ]);
  };
  printModifierInvocation: PrintFunc<ast.ModifierInvocation>;
  printPath: PrintFunc<ast.Path>;
  printPragmaDirective: PrintFunc<ast.PragmaDirective> = ({ node }) => {
    return [h.fill(h.join(h.separator, ['pragma', ...node.literals])), h.comma, h.line];
  };
  printSourceUnit: PrintFunc<ast.SourceUnit> = ({ path, print }) => {
    return h.join(h.hardline, path.map(print, 'nodes'));
  };
  printUsingAliases: PrintFunc<ast.UsingAliases>;
  printUsingDirective: PrintFunc<ast.UsingDirective>;
}
