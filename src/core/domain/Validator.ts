import { DomainError } from './errors/DomainError';

export class Validator {

  empty(field: string, error: DomainError): void {
    if (field === '') {
      throw error;
    }
  }

  emailFormat(field: string, error: DomainError): void {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegex.test(field);
    if (!isValid) {throw error;}
  }

  notEqualFields(field1: string, field2: string, error: DomainError) {
    if (field1 !== field2) {
      throw error;
    }
  }

}
