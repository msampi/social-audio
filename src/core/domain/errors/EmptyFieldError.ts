import { DomainError } from './DomainError';
import { EmptyErrorMessage } from './EmptyErrorMessage';

export class EmptyFieldError extends DomainError {
  private _fieldName: string = '';

  constructor(fieldName: string) {
    const message = new EmptyErrorMessage(fieldName);
    super(message.toString());
    this._fieldName = fieldName;
  }

  get fieldName(): string {
    return this._fieldName;
  }
}
