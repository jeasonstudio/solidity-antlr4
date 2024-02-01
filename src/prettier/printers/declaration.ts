import * as ast from '../../ast';
import { BasePrinter, Doc, PrintFunc } from './base';

export class PrinterDeclaration
  extends BasePrinter
  implements Record<`print${ast.DeclarationNodeType}`, PrintFunc<any>>
{
  printContractDefinition: PrintFunc<ast.ContractDefinition> = ({ node, print, path }) => {
    const groupId = Symbol(node.type);
    const parts: Doc[] = [];
    if (node.abstract && node.contractKind === 'contract') {
      parts.push('abstract', this.space, node.contractKind);
    } else {
      parts.push(node.contractKind);
    }
    parts.push(this.space, path.call(print, 'name'));

    if (node.baseContracts.length) {
      const bases: Doc[] = [
        this.builders.line,
        'is',
        this.space,
        this.builders.fill(this.paramater(path.map(print, 'baseContracts'))),
      ];
      parts.push(this.builders.indentIfBreak(bases, { groupId }));
    }

    const nodes = path.map((p) => [print(p), this.pangu(p)], 'nodes');

    return [
      this.builders.group(parts, { id: groupId }),
      this.builders.ifBreak(this.builders.line, this.space, { groupId }),
      this.block(
        [this.builders.breakParent, this.builders.join(this.builders.hardline, nodes)],
        !node.nodes.length,
      ),
    ];
  };
  printEnumDefinition: PrintFunc<ast.EnumDefinition> = ({ print, path, node }) => {
    const enumMember = this.paramater(path.map(print, 'members'));
    return [
      'enum',
      this.space,
      path.call(print, 'name'),
      this.space,
      this.block([enumMember, this.builders.breakParent], !node.members.length),
    ];
  };
  printErrorDefinition: PrintFunc<ast.ErrorDefinition> = ({ path, print }) => {
    return [
      'error',
      this.space,
      path.call(print, 'name'),
      this.tuple(this.paramater(path.map(print, 'parameters'))),
      this.semi,
    ];
  };
  printEventDefinition: PrintFunc<ast.EventDefinition> = ({ path, print }) => {
    return [
      'event',
      this.space,
      path.call(print, 'name'),
      this.tuple(this.paramater(path.map(print, 'parameters'))),
      this.semi,
    ];
  };
  printFunctionDefinition: PrintFunc<ast.FunctionDefinition> = ({ node, path, print }) => {
    const groupId = Symbol(node.type);

    const functionMeta: Doc[] = [];
    switch (node.functionKind) {
      case 'constructor':
      case 'fallback':
      case 'receive':
        functionMeta.push(node.functionKind);
        break;
      case 'function':
      default:
        functionMeta.push('function', this.space, path.call(print, 'name'));
        break;
    }
    const parameters = node.parameters?.length ? path.map(print, 'parameters') : [];
    const parameterSeparator = this.builders.ifBreak(
      [this.comma, this.builders.hardline],
      [this.comma, this.builders.line],
      { groupId },
    );
    functionMeta.push(this.tuple(this.paramater(parameters, parameterSeparator), groupId));

    const functionInfo: Doc[] = [];
    if (node.visibility !== null) functionInfo.push(node.visibility);
    if (node.stateMutability !== null) functionInfo.push(node.stateMutability);
    if (node.modifiers !== null && node.modifiers.length) {
      path.map((modifierPath) => functionInfo.push(print(modifierPath)), 'modifiers');
    }
    if (node.virtual === true) functionInfo.push('virtual');
    if (node.override !== null) {
      functionInfo.push(
        node.override.length
          ? ['override', this.tuple(this.paramater(path.map(print, 'override')))]
          : 'override',
      );
    }
    if (node.returnParameters !== null) {
      functionInfo.push(
        this.builders.group(
          ['returns', this.space, this.tuple(this.paramater(path.map(print, 'returnParameters')))],
          { shouldBreak: false },
        ),
      );
    }
    const line = this.builders.indentIfBreak(this.builders.line, { groupId });
    const functionInfoGroup = this.builders.group(this.builders.join(line, functionInfo), {
      id: groupId,
    });

    const parts: Doc[] = [
      this.builders.group(
        functionInfo.length ? [functionMeta, this.space, functionInfoGroup] : [functionMeta],
        {
          id: groupId,
        },
      ),
    ];
    if (node.body !== null) {
      parts.push(this.space, path.call(print, 'body'));
    } else {
      parts.push(this.semi);
    }
    return parts;
  };
  printModifierDefinition: PrintFunc<ast.ModifierDefinition> = ({ path, print, node }) => {
    return [
      'modifier',
      this.space,
      path.call(print, 'name'),
      this.tuple(node.parameters !== null ? this.paramater(path.map(print, 'parameters')) : ''),
      this.space,
      path.call(print, 'body'),
    ];
  };
  // printStateMutability: PrintFunc<ast.StateMutability> = ({ node }) => node.name || '';
  printStructDefinition: PrintFunc<ast.StructDefinition> = ({ node, path, print }) => {
    const structMember: Doc[] = [];
    if (node.members.length) {
      const content = this.builders.join(this.builders.line, path.map(print, 'members'));
      structMember.push(this.builders.breakParent, content);
    }
    return [
      'struct',
      this.space,
      path.call(print, 'name'),
      this.space,
      this.block(structMember, !structMember.length),
    ];
  };
  printStructMember: PrintFunc<ast.StructMember> = ({ path, print }) => {
    return [path.call(print, 'typeName'), this.space, path.call(print, 'name'), this.semi];
  };
  printUserDefinedValueTypeDefinition: PrintFunc<ast.UserDefinedValueTypeDefinition> = ({
    path,
    print,
  }) => {
    const content = this.builders.join(this.space, [
      'type',
      path.call(print, 'name'),
      'is',
      path.call(print, 'typeName'),
    ]);
    return [content, this.semi];
  };
  printVariableDeclaration: PrintFunc<ast.VariableDeclaration> = ({ node, path, print }) => {
    const parts: Doc[] = [path.call(print, 'typeName')];
    if (node.dataLocation !== null) parts.push(this.space, path.call(print, 'dataLocation'));
    if (node.public) parts.push(this.space, 'public');
    if (node.private) parts.push(this.space, 'private');
    if (node.internal) parts.push(this.space, 'internal');
    if (node.constant) parts.push(this.space, 'constant');
    if (node.indexed) parts.push(this.space, 'indexed');
    if (node.immutable) parts.push(this.space, 'immutable');
    if (node.override !== null) {
      parts.push(this.space, 'override');
      if (node.override.length) parts.push(this.tuple(this.paramater(path.map(print, 'override'))));
    }
    if (node.name !== null) parts.push(this.space, path.call(print, 'name'));
    if (node.expression !== null) {
      parts.push(
        this.space,
        '=',
        this.builders.ifBreak(this.builders.indent(this.builders.line), this.space),
        path.call(print, 'expression'),
      );
    }

    if (!node.parameter) parts.push(this.semi);
    return this.builders.group(parts);
  };
  // printVisibility: PrintFunc<ast.Visibility> = ({ node }) => node.name || '';

  // TODO: Implement for type
  printFunctionTypeName: PrintFunc<ast.FunctionTypeName> = this.printFunctionDefinition as any;
}
