import { BinaryOperation } from './binary-operation';

export class Assignment extends BinaryOperation {
  // @ts-expect-error
  type = 'Assignment' as const;
}
