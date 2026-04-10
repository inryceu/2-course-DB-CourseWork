import { InvalidArgumentError } from '../errors/invalid-argument.error';

export class UserAge {
  private readonly _value: number;

  constructor(value: number) {
    if (value === undefined || value === null || value < 1 || value > 120) {
      throw new InvalidArgumentError('Age must be between 1 and 120');
    }
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
