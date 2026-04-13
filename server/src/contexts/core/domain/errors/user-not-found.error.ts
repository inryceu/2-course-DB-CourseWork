import { DomainError } from './domain.error';

export class UserNotFoundError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
