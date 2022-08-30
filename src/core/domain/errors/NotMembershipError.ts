import { DomainError } from './DomainError';

export class NotMembershipError extends DomainError {
  constructor() {
    super('Not membership error');
  }
}
