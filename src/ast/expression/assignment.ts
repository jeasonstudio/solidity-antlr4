import { BinaryOperation } from './binary-operation';

export class Assignment extends BinaryOperation {
  type = 'Assignment' as const;
}
