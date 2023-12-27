import { Position } from '../ast/base';
import {
  ATNSimulator,
  BaseErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from '../antlr4';

export class ParseError extends Error {
  constructor(
    public message: string,
    public position?: Position,
  ) {
    super(message, { cause: null });
  }
}

export class SolidityErrorListener extends BaseErrorListener {
  errors: ParseError[] = [];

  syntaxError<S extends Token, T extends ATNSimulator>(
    _recognizer: Recognizer<T>,
    _offendingSymbol: S | null,
    line: number,
    column: number,
    message: string,
    _exception: RecognitionException,
  ): void {
    this.errors.push(new ParseError(message, Position.create(line, column)));
  }

  throws = () => {
    if (!this.errors.length) return;
    throw this.errors[0];
  };
}

export const solidityErrorListener = new SolidityErrorListener();
