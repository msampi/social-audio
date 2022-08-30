import { DomainError } from './DomainError';

export class InvalidCredentialsError extends DomainError {
  constructor() {
    super('El usuario o la contraseña son incorrectos.');
  }
}
