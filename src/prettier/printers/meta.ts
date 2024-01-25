import * as ast from '../../ast';
import { BasePrinter, Doc, PrintFunc } from './base';

export class PrinterMeta
  extends BasePrinter
  implements Record<`print${ast.MetaNodeType}`, PrintFunc<any>>
{
  printDataLocation: PrintFunc<ast.DataLocation> = ({ node }) => node.name;
  printIdentifierPath: PrintFunc<ast.IdentifierPath> = ({ path, print }) =>
    this.builders.join(this.dot, path.map(print, 'identifiers'));
  printImportAliases: PrintFunc<ast.ImportAliases> = ({ node, path, print }) => {
    const parts = [path.call(print, 'foreign')];
    if (node.local) parts.push(this.space, 'as', this.space, path.call(print, 'local'));
    return parts;
  };
  printImportDirective: PrintFunc<ast.ImportDirective> = ({ node, path, print }) => {
    let result: Doc = '';
    const importPath = path.call(print, 'path');
    if (node.unitAlias) {
      const unitAlias = path.call(print, 'unitAlias');
      if (node.importAll) {
        result = this.builders.join(this.space, [
          'import',
          '*',
          'as',
          unitAlias,
          'from',
          importPath,
        ]);
      } else {
        result = this.builders.join(this.space, ['import', importPath, 'as', unitAlias]);
      }
    } else if (node.symbolAliases.length) {
      result = this.builders.join(this.space, [
        'import',
        this.block(this.paramater(path.map(print, 'symbolAliases'))),
        'from',
        importPath,
      ]);
    } else {
      result = this.builders.join(this.space, ['import', importPath]);
    }
    return [result, this.semi];
  };
  printInheritanceSpecifier: PrintFunc<ast.InheritanceSpecifier> = ({ node, path, print }) => {
    const parts: Doc[] = [path.call(print, 'baseName')];
    if (node.arguments !== null) {
      const paramater = this.paramater(path.map(print, 'arguments'));
      parts.push(this.tuple(paramater));
    }
    return parts;
  };
  printModifierInvocation: PrintFunc<ast.ModifierInvocation> = ({ node, path, print }) => {
    const name = path.call(print, 'name');
    if (node.arguments === null) return name;
    return this.builders.group([name, this.tuple(this.paramater(path.map(print, 'arguments')))]);
  };
  printPath: PrintFunc<ast.Path> = ({ node }) => this.literal(node.name);
  printPragmaDirective: PrintFunc<ast.PragmaDirective> = ({ node }) => {
    const groupId = Symbol('pragma');
    const line = this.builders.indentIfBreak(this.builders.line, { groupId });
    const literal = this.builders.join(line, node.literals);
    return this.builders.group(['pragma', line, literal, this.semi], { id: groupId });
  };
  printSourceUnit: PrintFunc<ast.SourceUnit> = ({ path, print }) => {
    const contents: Doc[] = [];
    path.map((nodePath) => {
      contents.push(nodePath.call(print));
      contents.push(this.builders.hardline);
      if (
        nodePath.node?.type !== nodePath.next?.type ||
        nodePath.next?.type === 'ContractDefinition'
      ) {
        contents.push(this.builders.hardline);
      }
    }, 'nodes');
    return contents;
  };
  printUsingAliases: PrintFunc<ast.UsingAliases> = ({ node, path, print }) => {
    const parts: Doc[] = [path.call(print, 'name')];
    if (node.operator !== null)
      parts.push(this.space, 'as', this.space, path.call(print, 'operator'));
    return parts;
  };
  printUsingDirective: PrintFunc<ast.UsingDirective> = ({ node, path, print }) => {
    const content: Doc[] = [this.space];
    if (node.usingAliases !== null && node.usingAliases.length) {
      content.push(this.block(this.paramater(path.map(print, 'usingAliases'))));
    } else {
      content.push(path.call(print, 'libraryName'));
    }
    const typeName: Doc = node.typeName === '*' ? '*' : path.call(print as any, 'typeName');
    const globalFlag: Doc = node.global ? [this.space, 'global'] : '';
    return ['using', content, this.space, 'for', this.space, typeName, globalFlag, this.semi];
  };
}
