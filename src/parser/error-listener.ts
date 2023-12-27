import { Position } from '../ast/base';
import {
  ATNSimulator,
  BaseErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from '../antlr4';

export interface ParseError {
  message: string;
  position: Position;
}

export class SolidityErrorListener extends BaseErrorListener {
  errors: ParseError[] = [];

  syntaxError<S extends Token, T extends ATNSimulator>(
    _recognizer: Recognizer<T>,
    _offendingSymbol: S | null,
    line: number,
    column: number,
    msg: string,
    _e: RecognitionException | null,
  ): void {
    const error: ParseError = {
      position: Position.create(line, column),
      message: msg,
    };
    this.errors.push(error);
  }
}

export const solidityErrorListener = new SolidityErrorListener();
