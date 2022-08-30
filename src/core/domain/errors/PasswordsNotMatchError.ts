import { DomainError } from './DomainError';

export class PasswordsNotMatchError extends DomainError {
  private _fieldName: string = '';

  constructor(fieldName: string) {
    super('You password and confirmation does not match');
    this._fieldName = fieldName;
  }

  get fieldName(): string {
    return this._fieldName;
  }

}
