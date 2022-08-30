import { CallService } from '../domain/CallService';
import { SessionStorage } from '../domain/SessionStorage';
import { EmptyFieldError } from '../domain/errors/EmptyFieldError';
import { EmailInvalidFormatError } from '../domain/errors/EmailInvalidFormatError';
import { Validator } from '../domain/Validator';
import { CredentialsType, SessionData } from '../domain/Types';
import { LoginIntent } from '../domain/LoginIntent';

export default class Logout {
  private sessionStorage: SessionStorage;

  constructor(sessionStorage: SessionStorage) {
    this.sessionStorage = sessionStorage;
  }

  async execute(): Promise<void> {
    return this.sessionStorage.remove();
  }
}
