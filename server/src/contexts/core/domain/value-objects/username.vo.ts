import { InvalidArgumentError } from '../errors/invalid-argument.error';

export class Username {
  private readonly _value: string;

  constructor(value: string) {
    if (!value || value.length < 3 || value.length > 20) {
      throw new InvalidArgumentError(
        'Username must be between 3 and 20 characters',
      );
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
