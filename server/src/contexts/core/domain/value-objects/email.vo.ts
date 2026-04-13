import { InvalidArgumentError } from '../errors/invalid-argument.error';

export class Email {
  private readonly _value: string;

  constructor(value: string) {
    if (!value || !this.isValidEmail(value)) {
      throw new InvalidArgumentError(`Invalid email format: ${value}`);
    }
    this._value = value.toLowerCase();
  }

  get value(): string {
    return this._value;
  }

  private isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  public equals(other: Email): boolean {
    return this._value === other.value;
  }
}
