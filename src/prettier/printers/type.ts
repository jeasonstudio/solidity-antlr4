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
  printTypeName: PrintFunc<ast.TypeName> = ({ node }) => {
    return '';
  };
}
