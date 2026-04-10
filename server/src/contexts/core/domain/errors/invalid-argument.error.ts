import { DomainError } from './domain.error';

export class InvalidArgumentError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
