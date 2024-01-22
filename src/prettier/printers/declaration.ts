import * as ast from '../../ast';
import { PrintFunc, h } from './base';

export class PrinterDeclaration
  implements Record<`print${ast.DeclarationNodeType}`, PrintFunc<any>>
{
  printContractDefinition: PrintFunc<ast.ContractDefinition> = ({ node, print, path }) => {
    const baseContracts = !node.baseContracts.length
      ? null
      : ['is', h.separator, h.join2(h.paramSeparator, path.map(print, 'baseContracts'))];
    const contractMeta = h.join2(h.separator, [
      node.abstract ? 'abstract' : null,
      node.contractKind,
      path.call(print, 'name'),
      baseContracts,
    ]);
    const contractBody = node.nodes.length
      ? ['{', h.indent([h.hardline, path.map(print, 'nodes')]), h.hardline, '}']
      : '{}';
    return [contractMeta, h.separator, contractBody, h.line];
  };
  printEnumDefinition: PrintFunc<ast.EnumDefinition>;
  printErrorDefinition: PrintFunc<ast.ErrorDefinition>;
  printEventDefinition: PrintFunc<ast.EventDefinition>;
  printFunctionDefinition: PrintFunc<ast.FunctionDefinition>;
  printModifierDefinition: PrintFunc<ast.ModifierDefinition>;
  printStateMutability: PrintFunc<ast.StateMutability>;
  printStructDefinition: PrintFunc<ast.StructDefinition>;
  printStructMember: PrintFunc<ast.StructMember>;
  printUserDefinedValueTypeDefinition: PrintFunc<ast.UserDefinedValueTypeDefinition>;
  printVariableDeclaration: PrintFunc<ast.VariableDeclaration> = ({ node, path, print }) => {
    return h.join2(h.separator, [path.call(print, 'typeName')]);
  };
  printVisibility: PrintFunc<ast.Visibility>;
}
