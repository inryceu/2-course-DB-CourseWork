export class GetUserByIdQuery {
  constructor(public readonly userId: number) {}
}

export class GetUserListQuery {
  constructor(
    public readonly page: number = 1,
    public readonly limit: number = 20,
    public readonly searchTerm?: string,
  ) {}
}
