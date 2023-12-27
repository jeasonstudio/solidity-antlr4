import { DataLocation } from './data-location';
import { IdentifierPath } from './identifier-path';
import { ImportAliases } from './import-aliases';
import { ImportDirective } from './import-directive';
import { InheritanceSpecifierList } from './inheritance-specifier-list';
import { InheritanceSpecifier } from './inheritance-specifier';
import { ModifierInvocation } from './modifier-invocation';
import { OverrideSpecifier } from './override-specifier';
import { ParameterList } from './parameter-list';
import { Path } from './path';
import { PragmaDirective } from './pragma-directive';
import { SourceUnit } from './source-unit';
import { SymbolAliases } from './symbol-aliases';
import { UsingDirective } from './using-directive';

export type MetaNode =
  | DataLocation
  | IdentifierPath
  | ImportAliases
  | ImportDirective
  | InheritanceSpecifier
  | ModifierInvocation
  | Path
  | PragmaDirective
  | SourceUnit
  | UsingDirective;

export type MetaNodeType = MetaNode['type'];

export {
  DataLocation,
  IdentifierPath,
  ImportAliases,
  ImportDirective,
  InheritanceSpecifierList,
  InheritanceSpecifier,
  ModifierInvocation,
  OverrideSpecifier,
  ParameterList,
  Path,
  PragmaDirective,
  SourceUnit,
  SymbolAliases,
  UsingDirective,
};
