import * as ast from '../../ast';
import { PrintFunc, h } from './base';

export class PrinterType implements Record<`print${ast.TypeNodeType}`, PrintFunc<any>> {
  printElementaryTypeName: PrintFunc<ast.ElementaryTypeName> = ({ node }) => {
    return h.join2(h.separator, [node.name, node.payable ? 'payable' : null]);
  };
  printFunctionTypeName: PrintFunc<ast.FunctionTypeName>;
  printMappingKeyType: PrintFunc<ast.MappingKeyType>;
  printMappingType: PrintFunc<ast.MappingType>;
  printMetaType: PrintFunc<ast.MetaType>;
  printTypeName: PrintFunc<ast.TypeName> = (args) => {
    const { node, path, print } = args;
    if (node.type === 'TypeName') {
      return [path.call(print, 'baseType'), '[', path.call(print, 'expression'), ']'];
    }
    throw new Error('Unknown node type: ' + node.type);
  };
}
