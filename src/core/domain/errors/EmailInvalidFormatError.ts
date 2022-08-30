import { DomainError } from './DomainError';

export class EmailInvalidFormatError extends DomainError {
  private _fieldName: string = '';

  constructor(fieldName: string) {
    super('Your email has not valid format');
    this._fieldName = fieldName;
  }

  get fieldName(): string {
    return this._fieldName;
  }

}
