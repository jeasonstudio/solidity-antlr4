import * as ast from '../../ast';
import { BasePrinter, Doc, PrintFunc } from './base';

export class PrinterType
  extends BasePrinter
  implements Record<`print${ast.TypeNodeType}`, PrintFunc<any>>
{
  printElementaryTypeName: PrintFunc<ast.ElementaryTypeName> = ({ node }) => {
    const parts: Doc[] = [node.name];
    if (node.name === 'address' && node.payable) parts.push(this.space, 'payable');
    return parts;
  };
  printFunctionTypeName: PrintFunc<ast.FunctionTypeName>; // TODO: implement in declaration.ts
  printMappingKeyType: PrintFunc<ast.MappingKeyType> = ({ node }) => node.name;
  printMappingType: PrintFunc<ast.MappingType> = ({ path, print }) => {
    return [
      'mapping',
      this.tuple([
        path.call(print, 'keyType'),
        this.space,
        '=>',
        this.space,
        path.call(print, 'valueType'),
      ]),
    ];
  };
  printTypeName: PrintFunc<ast.TypeName> = (args) => {
    const { node, path, print } = args;
    if (node.type === 'TypeName') {
      return [path.call(print, 'baseType'), this.list(path.call(print, 'expression'))];
    }
    throw new Error('Unknown node type: ' + node.type); // unreachable
  };
}
