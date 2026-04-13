
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model achievements
 * 
 */
export type achievements = $Result.DefaultSelection<Prisma.$achievementsPayload>
/**
 * Model devs
 * 
 */
export type devs = $Result.DefaultSelection<Prisma.$devsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model friends
 * 
 */
export type friends = $Result.DefaultSelection<Prisma.$friendsPayload>
/**
 * Model game_dev_connection
 * 
 */
export type game_dev_connection = $Result.DefaultSelection<Prisma.$game_dev_connectionPayload>
/**
 * Model game_news
 * 
 */
export type game_news = $Result.DefaultSelection<Prisma.$game_newsPayload>
/**
 * Model game_tag_connection
 * 
 */
export type game_tag_connection = $Result.DefaultSelection<Prisma.$game_tag_connectionPayload>
/**
 * Model games
 * 
 */
export type games = $Result.DefaultSelection<Prisma.$gamesPayload>
/**
 * Model libraries
 * 
 */
export type libraries = $Result.DefaultSelection<Prisma.$librariesPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model saves
 * 
 */
export type saves = $Result.DefaultSelection<Prisma.$savesPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model user_achieve_connection
 * 
 */
export type user_achieve_connection = $Result.DefaultSelection<Prisma.$user_achieve_connectionPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const dev_type: {
  developer: 'developer',
  publisher: 'publisher',
  both: 'both'
};

export type dev_type = (typeof dev_type)[keyof typeof dev_type]


export const download_type: {
  installed: 'installed',
  not_installed: 'not_installed',
  in_progress: 'in_progress'
};

export type download_type = (typeof download_type)[keyof typeof download_type]


export const ev_type: {
  sale: 'sale',
  giveaway: 'giveaway',
  free_weekend: 'free_weekend'
};

export type ev_type = (typeof ev_type)[keyof typeof ev_type]


export const fr_status: {
  pending: 'pending',
  accepted: 'accepted',
  blocked: 'blocked'
};

export type fr_status = (typeof fr_status)[keyof typeof fr_status]


export const own_type: {
  rented: 'rented',
  wishlist: 'wishlist',
  purchased: 'purchased'
};

export type own_type = (typeof own_type)[keyof typeof own_type]

}

export type dev_type = $Enums.dev_type

export const dev_type: typeof $Enums.dev_type

export type download_type = $Enums.download_type

export const download_type: typeof $Enums.download_type

export type ev_type = $Enums.ev_type

export const ev_type: typeof $Enums.ev_type

export type fr_status = $Enums.fr_status

export const fr_status: typeof $Enums.fr_status

export type own_type = $Enums.own_type

export const own_type: typeof $Enums.own_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Achievements
 * const achievements = await prisma.achievements.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievements.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.achievements`: Exposes CRUD operations for the **achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.achievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devs`: Exposes CRUD operations for the **devs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devs
    * const devs = await prisma.devs.findMany()
    * ```
    */
  get devs(): Prisma.devsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game_dev_connection`: Exposes CRUD operations for the **game_dev_connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Game_dev_connections
    * const game_dev_connections = await prisma.game_dev_connection.findMany()
    * ```
    */
  get game_dev_connection(): Prisma.game_dev_connectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game_news`: Exposes CRUD operations for the **game_news** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Game_news
    * const game_news = await prisma.game_news.findMany()
    * ```
    */
  get game_news(): Prisma.game_newsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game_tag_connection`: Exposes CRUD operations for the **game_tag_connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Game_tag_connections
    * const game_tag_connections = await prisma.game_tag_connection.findMany()
    * ```
    */
  get game_tag_connection(): Prisma.game_tag_connectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.games`: Exposes CRUD operations for the **games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.gamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libraries`: Exposes CRUD operations for the **libraries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.libraries.findMany()
    * ```
    */
  get libraries(): Prisma.librariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saves`: Exposes CRUD operations for the **saves** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saves
    * const saves = await prisma.saves.findMany()
    * ```
    */
  get saves(): Prisma.savesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_achieve_connection`: Exposes CRUD operations for the **user_achieve_connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_achieve_connections
    * const user_achieve_connections = await prisma.user_achieve_connection.findMany()
    * ```
    */
  get user_achieve_connection(): Prisma.user_achieve_connectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    achievements: 'achievements',
    devs: 'devs',
    events: 'events',
    friends: 'friends',
    game_dev_connection: 'game_dev_connection',
    game_news: 'game_news',
    game_tag_connection: 'game_tag_connection',
    games: 'games',
    libraries: 'libraries',
    reviews: 'reviews',
    saves: 'saves',
    tags: 'tags',
    user_achieve_connection: 'user_achieve_connection',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "achievements" | "devs" | "events" | "friends" | "game_dev_connection" | "game_news" | "game_tag_connection" | "games" | "libraries" | "reviews" | "saves" | "tags" | "user_achieve_connection" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      achievements: {
        payload: Prisma.$achievementsPayload<ExtArgs>
        fields: Prisma.achievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.achievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.achievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findFirst: {
            args: Prisma.achievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.achievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findMany: {
            args: Prisma.achievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          create: {
            args: Prisma.achievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          createMany: {
            args: Prisma.achievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.achievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          delete: {
            args: Prisma.achievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          update: {
            args: Prisma.achievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          deleteMany: {
            args: Prisma.achievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.achievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.achievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          upsert: {
            args: Prisma.achievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.achievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.achievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      devs: {
        payload: Prisma.$devsPayload<ExtArgs>
        fields: Prisma.devsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.devsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.devsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          findFirst: {
            args: Prisma.devsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.devsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          findMany: {
            args: Prisma.devsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>[]
          }
          create: {
            args: Prisma.devsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          createMany: {
            args: Prisma.devsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.devsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>[]
          }
          delete: {
            args: Prisma.devsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          update: {
            args: Prisma.devsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          deleteMany: {
            args: Prisma.devsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.devsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.devsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>[]
          }
          upsert: {
            args: Prisma.devsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devsPayload>
          }
          aggregate: {
            args: Prisma.DevsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevs>
          }
          groupBy: {
            args: Prisma.devsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevsGroupByOutputType>[]
          }
          count: {
            args: Prisma.devsCountArgs<ExtArgs>
            result: $Utils.Optional<DevsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      friends: {
        payload: Prisma.$friendsPayload<ExtArgs>
        fields: Prisma.friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findFirst: {
            args: Prisma.friendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findMany: {
            args: Prisma.friendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          create: {
            args: Prisma.friendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          createMany: {
            args: Prisma.friendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.friendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          delete: {
            args: Prisma.friendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          update: {
            args: Prisma.friendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          deleteMany: {
            args: Prisma.friendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.friendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.friendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          upsert: {
            args: Prisma.friendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.friendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      game_dev_connection: {
        payload: Prisma.$game_dev_connectionPayload<ExtArgs>
        fields: Prisma.game_dev_connectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.game_dev_connectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.game_dev_connectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          findFirst: {
            args: Prisma.game_dev_connectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.game_dev_connectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          findMany: {
            args: Prisma.game_dev_connectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>[]
          }
          create: {
            args: Prisma.game_dev_connectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          createMany: {
            args: Prisma.game_dev_connectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.game_dev_connectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>[]
          }
          delete: {
            args: Prisma.game_dev_connectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          update: {
            args: Prisma.game_dev_connectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          deleteMany: {
            args: Prisma.game_dev_connectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.game_dev_connectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.game_dev_connectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>[]
          }
          upsert: {
            args: Prisma.game_dev_connectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_dev_connectionPayload>
          }
          aggregate: {
            args: Prisma.Game_dev_connectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame_dev_connection>
          }
          groupBy: {
            args: Prisma.game_dev_connectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Game_dev_connectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.game_dev_connectionCountArgs<ExtArgs>
            result: $Utils.Optional<Game_dev_connectionCountAggregateOutputType> | number
          }
        }
      }
      game_news: {
        payload: Prisma.$game_newsPayload<ExtArgs>
        fields: Prisma.game_newsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.game_newsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.game_newsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          findFirst: {
            args: Prisma.game_newsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.game_newsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          findMany: {
            args: Prisma.game_newsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>[]
          }
          create: {
            args: Prisma.game_newsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          createMany: {
            args: Prisma.game_newsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.game_newsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>[]
          }
          delete: {
            args: Prisma.game_newsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          update: {
            args: Prisma.game_newsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          deleteMany: {
            args: Prisma.game_newsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.game_newsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.game_newsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>[]
          }
          upsert: {
            args: Prisma.game_newsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_newsPayload>
          }
          aggregate: {
            args: Prisma.Game_newsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame_news>
          }
          groupBy: {
            args: Prisma.game_newsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Game_newsGroupByOutputType>[]
          }
          count: {
            args: Prisma.game_newsCountArgs<ExtArgs>
            result: $Utils.Optional<Game_newsCountAggregateOutputType> | number
          }
        }
      }
      game_tag_connection: {
        payload: Prisma.$game_tag_connectionPayload<ExtArgs>
        fields: Prisma.game_tag_connectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.game_tag_connectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.game_tag_connectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          findFirst: {
            args: Prisma.game_tag_connectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.game_tag_connectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          findMany: {
            args: Prisma.game_tag_connectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>[]
          }
          create: {
            args: Prisma.game_tag_connectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          createMany: {
            args: Prisma.game_tag_connectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.game_tag_connectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>[]
          }
          delete: {
            args: Prisma.game_tag_connectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          update: {
            args: Prisma.game_tag_connectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          deleteMany: {
            args: Prisma.game_tag_connectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.game_tag_connectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.game_tag_connectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>[]
          }
          upsert: {
            args: Prisma.game_tag_connectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$game_tag_connectionPayload>
          }
          aggregate: {
            args: Prisma.Game_tag_connectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame_tag_connection>
          }
          groupBy: {
            args: Prisma.game_tag_connectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Game_tag_connectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.game_tag_connectionCountArgs<ExtArgs>
            result: $Utils.Optional<Game_tag_connectionCountAggregateOutputType> | number
          }
        }
      }
      games: {
        payload: Prisma.$gamesPayload<ExtArgs>
        fields: Prisma.gamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          findFirst: {
            args: Prisma.gamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          findMany: {
            args: Prisma.gamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>[]
          }
          create: {
            args: Prisma.gamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          createMany: {
            args: Prisma.gamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>[]
          }
          delete: {
            args: Prisma.gamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          update: {
            args: Prisma.gamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          deleteMany: {
            args: Prisma.gamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>[]
          }
          upsert: {
            args: Prisma.gamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.gamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
          }
        }
      }
      libraries: {
        payload: Prisma.$librariesPayload<ExtArgs>
        fields: Prisma.librariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.librariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.librariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          findFirst: {
            args: Prisma.librariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.librariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          findMany: {
            args: Prisma.librariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>[]
          }
          create: {
            args: Prisma.librariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          createMany: {
            args: Prisma.librariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.librariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>[]
          }
          delete: {
            args: Prisma.librariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          update: {
            args: Prisma.librariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          deleteMany: {
            args: Prisma.librariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.librariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.librariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>[]
          }
          upsert: {
            args: Prisma.librariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librariesPayload>
          }
          aggregate: {
            args: Prisma.LibrariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraries>
          }
          groupBy: {
            args: Prisma.librariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibrariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.librariesCountArgs<ExtArgs>
            result: $Utils.Optional<LibrariesCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      saves: {
        payload: Prisma.$savesPayload<ExtArgs>
        fields: Prisma.savesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.savesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.savesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          findFirst: {
            args: Prisma.savesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.savesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          findMany: {
            args: Prisma.savesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>[]
          }
          create: {
            args: Prisma.savesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          createMany: {
            args: Prisma.savesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.savesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>[]
          }
          delete: {
            args: Prisma.savesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          update: {
            args: Prisma.savesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          deleteMany: {
            args: Prisma.savesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.savesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.savesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>[]
          }
          upsert: {
            args: Prisma.savesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savesPayload>
          }
          aggregate: {
            args: Prisma.SavesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaves>
          }
          groupBy: {
            args: Prisma.savesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavesGroupByOutputType>[]
          }
          count: {
            args: Prisma.savesCountArgs<ExtArgs>
            result: $Utils.Optional<SavesCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      user_achieve_connection: {
        payload: Prisma.$user_achieve_connectionPayload<ExtArgs>
        fields: Prisma.user_achieve_connectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_achieve_connectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_achieve_connectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          findFirst: {
            args: Prisma.user_achieve_connectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_achieve_connectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          findMany: {
            args: Prisma.user_achieve_connectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>[]
          }
          create: {
            args: Prisma.user_achieve_connectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          createMany: {
            args: Prisma.user_achieve_connectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_achieve_connectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>[]
          }
          delete: {
            args: Prisma.user_achieve_connectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          update: {
            args: Prisma.user_achieve_connectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          deleteMany: {
            args: Prisma.user_achieve_connectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_achieve_connectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_achieve_connectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>[]
          }
          upsert: {
            args: Prisma.user_achieve_connectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_achieve_connectionPayload>
          }
          aggregate: {
            args: Prisma.User_achieve_connectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_achieve_connection>
          }
          groupBy: {
            args: Prisma.user_achieve_connectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_achieve_connectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_achieve_connectionCountArgs<ExtArgs>
            result: $Utils.Optional<User_achieve_connectionCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    achievements?: achievementsOmit
    devs?: devsOmit
    events?: eventsOmit
    friends?: friendsOmit
    game_dev_connection?: game_dev_connectionOmit
    game_news?: game_newsOmit
    game_tag_connection?: game_tag_connectionOmit
    games?: gamesOmit
    libraries?: librariesOmit
    reviews?: reviewsOmit
    saves?: savesOmit
    tags?: tagsOmit
    user_achieve_connection?: user_achieve_connectionOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AchievementsCountOutputType
   */

  export type AchievementsCountOutputType = {
    user_achieve_connection: number
  }

  export type AchievementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_achieve_connection?: boolean | AchievementsCountOutputTypeCountUser_achieve_connectionArgs
  }

  // Custom InputTypes
  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementsCountOutputType
     */
    select?: AchievementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeCountUser_achieve_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_achieve_connectionWhereInput
  }


  /**
   * Count Type DevsCountOutputType
   */

  export type DevsCountOutputType = {
    game_dev_connection: number
  }

  export type DevsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_dev_connection?: boolean | DevsCountOutputTypeCountGame_dev_connectionArgs
  }

  // Custom InputTypes
  /**
   * DevsCountOutputType without action
   */
  export type DevsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevsCountOutputType
     */
    select?: DevsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DevsCountOutputType without action
   */
  export type DevsCountOutputTypeCountGame_dev_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_dev_connectionWhereInput
  }


  /**
   * Count Type GamesCountOutputType
   */

  export type GamesCountOutputType = {
    achievements: number
    events: number
    game_dev_connection: number
    game_news: number
    game_tag_connection: number
    other_games: number
    libraries: number
    reviews: number
    saves: number
  }

  export type GamesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | GamesCountOutputTypeCountAchievementsArgs
    events?: boolean | GamesCountOutputTypeCountEventsArgs
    game_dev_connection?: boolean | GamesCountOutputTypeCountGame_dev_connectionArgs
    game_news?: boolean | GamesCountOutputTypeCountGame_newsArgs
    game_tag_connection?: boolean | GamesCountOutputTypeCountGame_tag_connectionArgs
    other_games?: boolean | GamesCountOutputTypeCountOther_gamesArgs
    libraries?: boolean | GamesCountOutputTypeCountLibrariesArgs
    reviews?: boolean | GamesCountOutputTypeCountReviewsArgs
    saves?: boolean | GamesCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamesCountOutputType
     */
    select?: GamesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementsWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountGame_dev_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_dev_connectionWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountGame_newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_newsWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountGame_tag_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_tag_connectionWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountOther_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librariesWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savesWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    game_tag_connection: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_tag_connection?: boolean | TagsCountOutputTypeCountGame_tag_connectionArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountGame_tag_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_tag_connectionWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    friends_friends_friend_idTousers: number
    friends_friends_user_idTousers: number
    libraries: number
    reviews: number
    saves: number
    user_achieve_connection: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_friends_friend_idTousers?: boolean | UsersCountOutputTypeCountFriends_friends_friend_idTousersArgs
    friends_friends_user_idTousers?: boolean | UsersCountOutputTypeCountFriends_friends_user_idTousersArgs
    libraries?: boolean | UsersCountOutputTypeCountLibrariesArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    saves?: boolean | UsersCountOutputTypeCountSavesArgs
    user_achieve_connection?: boolean | UsersCountOutputTypeCountUser_achieve_connectionArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends_friends_friend_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends_friends_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librariesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_achieve_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_achieve_connectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type AchievementsSumAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: number | null
    game_id: number | null
    title: string | null
    icon: string | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: number | null
    game_id: number | null
    title: string | null
    icon: string | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    game_id: number
    title: number
    icon: number
    _all: number
  }


  export type AchievementsAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type AchievementsSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type AchievementsMinAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    icon?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    icon?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    icon?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to aggregate.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type achievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementsWhereInput
    orderBy?: achievementsOrderByWithAggregationInput | achievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: achievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _avg?: AchievementsAvgAggregateInputType
    _sum?: AchievementsSumAggregateInputType
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: number
    game_id: number
    title: string
    icon: string
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends achievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type achievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    icon?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    user_achieve_connection?: boolean | achievements$user_achieve_connectionArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    icon?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    icon?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectScalar = {
    id?: boolean
    game_id?: boolean
    title?: boolean
    icon?: boolean
  }

  export type achievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "game_id" | "title" | "icon", ExtArgs["result"]["achievements"]>
  export type achievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    user_achieve_connection?: boolean | achievements$user_achieve_connectionArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type achievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type achievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }

  export type $achievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "achievements"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
      user_achieve_connection: Prisma.$user_achieve_connectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: number
      title: string
      icon: string
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type achievementsGetPayload<S extends boolean | null | undefined | achievementsDefaultArgs> = $Result.GetResult<Prisma.$achievementsPayload, S>

  type achievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<achievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface achievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['achievements'], meta: { name: 'achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {achievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends achievementsFindUniqueArgs>(args: SelectSubset<T, achievementsFindUniqueArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {achievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends achievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, achievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends achievementsFindFirstArgs>(args?: SelectSubset<T, achievementsFindFirstArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends achievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, achievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends achievementsFindManyArgs>(args?: SelectSubset<T, achievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievements.
     * @param {achievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends achievementsCreateArgs>(args: SelectSubset<T, achievementsCreateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {achievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends achievementsCreateManyArgs>(args?: SelectSubset<T, achievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {achievementsCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends achievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, achievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievements.
     * @param {achievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends achievementsDeleteArgs>(args: SelectSubset<T, achievementsDeleteArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievements.
     * @param {achievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends achievementsUpdateArgs>(args: SelectSubset<T, achievementsUpdateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {achievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends achievementsDeleteManyArgs>(args?: SelectSubset<T, achievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends achievementsUpdateManyArgs>(args: SelectSubset<T, achievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {achievementsUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends achievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, achievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievements.
     * @param {achievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends achievementsUpsertArgs>(args: SelectSubset<T, achievementsUpsertArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends achievementsCountArgs>(
      args?: Subset<T, achievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends achievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: achievementsGroupByArgs['orderBy'] }
        : { orderBy?: achievementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, achievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the achievements model
   */
  readonly fields: achievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__achievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_achieve_connection<T extends achievements$user_achieve_connectionArgs<ExtArgs> = {}>(args?: Subset<T, achievements$user_achieve_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the achievements model
   */
  interface achievementsFieldRefs {
    readonly id: FieldRef<"achievements", 'Int'>
    readonly game_id: FieldRef<"achievements", 'Int'>
    readonly title: FieldRef<"achievements", 'String'>
    readonly icon: FieldRef<"achievements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * achievements findUnique
   */
  export type achievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findUniqueOrThrow
   */
  export type achievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findFirst
   */
  export type achievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findFirstOrThrow
   */
  export type achievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findMany
   */
  export type achievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements create
   */
  export type achievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a achievements.
     */
    data: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
  }

  /**
   * achievements createMany
   */
  export type achievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * achievements createManyAndReturn
   */
  export type achievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * achievements update
   */
  export type achievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a achievements.
     */
    data: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
    /**
     * Choose, which achievements to update.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements updateMany
   */
  export type achievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
  }

  /**
   * achievements updateManyAndReturn
   */
  export type achievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * achievements upsert
   */
  export type achievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the achievements to update in case it exists.
     */
    where: achievementsWhereUniqueInput
    /**
     * In case the achievements found by the `where` argument doesn't exist, create a new achievements with this data.
     */
    create: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
    /**
     * In case the achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
  }

  /**
   * achievements delete
   */
  export type achievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter which achievements to delete.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements deleteMany
   */
  export type achievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to delete
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to delete.
     */
    limit?: number
  }

  /**
   * achievements.user_achieve_connection
   */
  export type achievements$user_achieve_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    where?: user_achieve_connectionWhereInput
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    cursor?: user_achieve_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_achieve_connectionScalarFieldEnum | User_achieve_connectionScalarFieldEnum[]
  }

  /**
   * achievements without action
   */
  export type achievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
  }


  /**
   * Model devs
   */

  export type AggregateDevs = {
    _count: DevsCountAggregateOutputType | null
    _avg: DevsAvgAggregateOutputType | null
    _sum: DevsSumAggregateOutputType | null
    _min: DevsMinAggregateOutputType | null
    _max: DevsMaxAggregateOutputType | null
  }

  export type DevsAvgAggregateOutputType = {
    id: number | null
  }

  export type DevsSumAggregateOutputType = {
    id: number | null
  }

  export type DevsMinAggregateOutputType = {
    id: number | null
    dev_name: string | null
    logo: string | null
    dev_type: $Enums.dev_type | null
  }

  export type DevsMaxAggregateOutputType = {
    id: number | null
    dev_name: string | null
    logo: string | null
    dev_type: $Enums.dev_type | null
  }

  export type DevsCountAggregateOutputType = {
    id: number
    dev_name: number
    contacts: number
    logo: number
    dev_type: number
    _all: number
  }


  export type DevsAvgAggregateInputType = {
    id?: true
  }

  export type DevsSumAggregateInputType = {
    id?: true
  }

  export type DevsMinAggregateInputType = {
    id?: true
    dev_name?: true
    logo?: true
    dev_type?: true
  }

  export type DevsMaxAggregateInputType = {
    id?: true
    dev_name?: true
    logo?: true
    dev_type?: true
  }

  export type DevsCountAggregateInputType = {
    id?: true
    dev_name?: true
    contacts?: true
    logo?: true
    dev_type?: true
    _all?: true
  }

  export type DevsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devs to aggregate.
     */
    where?: devsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devsOrderByWithRelationInput | devsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: devsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devs
    **/
    _count?: true | DevsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevsMaxAggregateInputType
  }

  export type GetDevsAggregateType<T extends DevsAggregateArgs> = {
        [P in keyof T & keyof AggregateDevs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevs[P]>
      : GetScalarType<T[P], AggregateDevs[P]>
  }




  export type devsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devsWhereInput
    orderBy?: devsOrderByWithAggregationInput | devsOrderByWithAggregationInput[]
    by: DevsScalarFieldEnum[] | DevsScalarFieldEnum
    having?: devsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevsCountAggregateInputType | true
    _avg?: DevsAvgAggregateInputType
    _sum?: DevsSumAggregateInputType
    _min?: DevsMinAggregateInputType
    _max?: DevsMaxAggregateInputType
  }

  export type DevsGroupByOutputType = {
    id: number
    dev_name: string
    contacts: JsonValue
    logo: string | null
    dev_type: $Enums.dev_type
    _count: DevsCountAggregateOutputType | null
    _avg: DevsAvgAggregateOutputType | null
    _sum: DevsSumAggregateOutputType | null
    _min: DevsMinAggregateOutputType | null
    _max: DevsMaxAggregateOutputType | null
  }

  type GetDevsGroupByPayload<T extends devsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevsGroupByOutputType[P]>
            : GetScalarType<T[P], DevsGroupByOutputType[P]>
        }
      >
    >


  export type devsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dev_name?: boolean
    contacts?: boolean
    logo?: boolean
    dev_type?: boolean
    game_dev_connection?: boolean | devs$game_dev_connectionArgs<ExtArgs>
    _count?: boolean | DevsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devs"]>

  export type devsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dev_name?: boolean
    contacts?: boolean
    logo?: boolean
    dev_type?: boolean
  }, ExtArgs["result"]["devs"]>

  export type devsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dev_name?: boolean
    contacts?: boolean
    logo?: boolean
    dev_type?: boolean
  }, ExtArgs["result"]["devs"]>

  export type devsSelectScalar = {
    id?: boolean
    dev_name?: boolean
    contacts?: boolean
    logo?: boolean
    dev_type?: boolean
  }

  export type devsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dev_name" | "contacts" | "logo" | "dev_type", ExtArgs["result"]["devs"]>
  export type devsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_dev_connection?: boolean | devs$game_dev_connectionArgs<ExtArgs>
    _count?: boolean | DevsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type devsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type devsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $devsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "devs"
    objects: {
      game_dev_connection: Prisma.$game_dev_connectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dev_name: string
      contacts: Prisma.JsonValue
      logo: string | null
      dev_type: $Enums.dev_type
    }, ExtArgs["result"]["devs"]>
    composites: {}
  }

  type devsGetPayload<S extends boolean | null | undefined | devsDefaultArgs> = $Result.GetResult<Prisma.$devsPayload, S>

  type devsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<devsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevsCountAggregateInputType | true
    }

  export interface devsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['devs'], meta: { name: 'devs' } }
    /**
     * Find zero or one Devs that matches the filter.
     * @param {devsFindUniqueArgs} args - Arguments to find a Devs
     * @example
     * // Get one Devs
     * const devs = await prisma.devs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends devsFindUniqueArgs>(args: SelectSubset<T, devsFindUniqueArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {devsFindUniqueOrThrowArgs} args - Arguments to find a Devs
     * @example
     * // Get one Devs
     * const devs = await prisma.devs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends devsFindUniqueOrThrowArgs>(args: SelectSubset<T, devsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsFindFirstArgs} args - Arguments to find a Devs
     * @example
     * // Get one Devs
     * const devs = await prisma.devs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends devsFindFirstArgs>(args?: SelectSubset<T, devsFindFirstArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsFindFirstOrThrowArgs} args - Arguments to find a Devs
     * @example
     * // Get one Devs
     * const devs = await prisma.devs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends devsFindFirstOrThrowArgs>(args?: SelectSubset<T, devsFindFirstOrThrowArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devs
     * const devs = await prisma.devs.findMany()
     * 
     * // Get first 10 Devs
     * const devs = await prisma.devs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devsWithIdOnly = await prisma.devs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends devsFindManyArgs>(args?: SelectSubset<T, devsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devs.
     * @param {devsCreateArgs} args - Arguments to create a Devs.
     * @example
     * // Create one Devs
     * const Devs = await prisma.devs.create({
     *   data: {
     *     // ... data to create a Devs
     *   }
     * })
     * 
     */
    create<T extends devsCreateArgs>(args: SelectSubset<T, devsCreateArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devs.
     * @param {devsCreateManyArgs} args - Arguments to create many Devs.
     * @example
     * // Create many Devs
     * const devs = await prisma.devs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends devsCreateManyArgs>(args?: SelectSubset<T, devsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devs and returns the data saved in the database.
     * @param {devsCreateManyAndReturnArgs} args - Arguments to create many Devs.
     * @example
     * // Create many Devs
     * const devs = await prisma.devs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devs and only return the `id`
     * const devsWithIdOnly = await prisma.devs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends devsCreateManyAndReturnArgs>(args?: SelectSubset<T, devsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devs.
     * @param {devsDeleteArgs} args - Arguments to delete one Devs.
     * @example
     * // Delete one Devs
     * const Devs = await prisma.devs.delete({
     *   where: {
     *     // ... filter to delete one Devs
     *   }
     * })
     * 
     */
    delete<T extends devsDeleteArgs>(args: SelectSubset<T, devsDeleteArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devs.
     * @param {devsUpdateArgs} args - Arguments to update one Devs.
     * @example
     * // Update one Devs
     * const devs = await prisma.devs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends devsUpdateArgs>(args: SelectSubset<T, devsUpdateArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devs.
     * @param {devsDeleteManyArgs} args - Arguments to filter Devs to delete.
     * @example
     * // Delete a few Devs
     * const { count } = await prisma.devs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends devsDeleteManyArgs>(args?: SelectSubset<T, devsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devs
     * const devs = await prisma.devs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends devsUpdateManyArgs>(args: SelectSubset<T, devsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devs and returns the data updated in the database.
     * @param {devsUpdateManyAndReturnArgs} args - Arguments to update many Devs.
     * @example
     * // Update many Devs
     * const devs = await prisma.devs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devs and only return the `id`
     * const devsWithIdOnly = await prisma.devs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends devsUpdateManyAndReturnArgs>(args: SelectSubset<T, devsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devs.
     * @param {devsUpsertArgs} args - Arguments to update or create a Devs.
     * @example
     * // Update or create a Devs
     * const devs = await prisma.devs.upsert({
     *   create: {
     *     // ... data to create a Devs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devs we want to update
     *   }
     * })
     */
    upsert<T extends devsUpsertArgs>(args: SelectSubset<T, devsUpsertArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsCountArgs} args - Arguments to filter Devs to count.
     * @example
     * // Count the number of Devs
     * const count = await prisma.devs.count({
     *   where: {
     *     // ... the filter for the Devs we want to count
     *   }
     * })
    **/
    count<T extends devsCountArgs>(
      args?: Subset<T, devsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevsAggregateArgs>(args: Subset<T, DevsAggregateArgs>): Prisma.PrismaPromise<GetDevsAggregateType<T>>

    /**
     * Group by Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends devsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: devsGroupByArgs['orderBy'] }
        : { orderBy?: devsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, devsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the devs model
   */
  readonly fields: devsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for devs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__devsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game_dev_connection<T extends devs$game_dev_connectionArgs<ExtArgs> = {}>(args?: Subset<T, devs$game_dev_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the devs model
   */
  interface devsFieldRefs {
    readonly id: FieldRef<"devs", 'Int'>
    readonly dev_name: FieldRef<"devs", 'String'>
    readonly contacts: FieldRef<"devs", 'Json'>
    readonly logo: FieldRef<"devs", 'String'>
    readonly dev_type: FieldRef<"devs", 'dev_type'>
  }
    

  // Custom InputTypes
  /**
   * devs findUnique
   */
  export type devsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where: devsWhereUniqueInput
  }

  /**
   * devs findUniqueOrThrow
   */
  export type devsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where: devsWhereUniqueInput
  }

  /**
   * devs findFirst
   */
  export type devsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where?: devsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devsOrderByWithRelationInput | devsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devs.
     */
    cursor?: devsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devs.
     */
    distinct?: DevsScalarFieldEnum | DevsScalarFieldEnum[]
  }

  /**
   * devs findFirstOrThrow
   */
  export type devsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where?: devsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devsOrderByWithRelationInput | devsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devs.
     */
    cursor?: devsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devs.
     */
    distinct?: DevsScalarFieldEnum | DevsScalarFieldEnum[]
  }

  /**
   * devs findMany
   */
  export type devsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where?: devsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devsOrderByWithRelationInput | devsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devs.
     */
    cursor?: devsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    distinct?: DevsScalarFieldEnum | DevsScalarFieldEnum[]
  }

  /**
   * devs create
   */
  export type devsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * The data needed to create a devs.
     */
    data: XOR<devsCreateInput, devsUncheckedCreateInput>
  }

  /**
   * devs createMany
   */
  export type devsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devs.
     */
    data: devsCreateManyInput | devsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * devs createManyAndReturn
   */
  export type devsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * The data used to create many devs.
     */
    data: devsCreateManyInput | devsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * devs update
   */
  export type devsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * The data needed to update a devs.
     */
    data: XOR<devsUpdateInput, devsUncheckedUpdateInput>
    /**
     * Choose, which devs to update.
     */
    where: devsWhereUniqueInput
  }

  /**
   * devs updateMany
   */
  export type devsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devs.
     */
    data: XOR<devsUpdateManyMutationInput, devsUncheckedUpdateManyInput>
    /**
     * Filter which devs to update
     */
    where?: devsWhereInput
    /**
     * Limit how many devs to update.
     */
    limit?: number
  }

  /**
   * devs updateManyAndReturn
   */
  export type devsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * The data used to update devs.
     */
    data: XOR<devsUpdateManyMutationInput, devsUncheckedUpdateManyInput>
    /**
     * Filter which devs to update
     */
    where?: devsWhereInput
    /**
     * Limit how many devs to update.
     */
    limit?: number
  }

  /**
   * devs upsert
   */
  export type devsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * The filter to search for the devs to update in case it exists.
     */
    where: devsWhereUniqueInput
    /**
     * In case the devs found by the `where` argument doesn't exist, create a new devs with this data.
     */
    create: XOR<devsCreateInput, devsUncheckedCreateInput>
    /**
     * In case the devs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<devsUpdateInput, devsUncheckedUpdateInput>
  }

  /**
   * devs delete
   */
  export type devsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
    /**
     * Filter which devs to delete.
     */
    where: devsWhereUniqueInput
  }

  /**
   * devs deleteMany
   */
  export type devsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devs to delete
     */
    where?: devsWhereInput
    /**
     * Limit how many devs to delete.
     */
    limit?: number
  }

  /**
   * devs.game_dev_connection
   */
  export type devs$game_dev_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    where?: game_dev_connectionWhereInput
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    cursor?: game_dev_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_dev_connectionScalarFieldEnum | Game_dev_connectionScalarFieldEnum[]
  }

  /**
   * devs without action
   */
  export type devsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devs
     */
    select?: devsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devs
     */
    omit?: devsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devsInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
    discount: Decimal | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    game_id: number | null
    discount: Decimal | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    game_id: number | null
    discount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    type: $Enums.ev_type | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    game_id: number | null
    discount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    type: $Enums.ev_type | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    game_id: number
    discount: number
    start_date: number
    end_date: number
    type: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    game_id?: true
    discount?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    game_id?: true
    discount?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    game_id?: true
    discount?: true
    start_date?: true
    end_date?: true
    type?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    game_id?: true
    discount?: true
    start_date?: true
    end_date?: true
    type?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    game_id?: true
    discount?: true
    start_date?: true
    end_date?: true
    type?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    game_id: number
    discount: Decimal | null
    start_date: Date
    end_date: Date
    type: $Enums.ev_type
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    discount?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    discount?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    discount?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    game_id?: boolean
    discount?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "game_id" | "discount" | "start_date" | "end_date" | "type", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: number
      discount: Prisma.Decimal | null
      start_date: Date
      end_date: Date
      type: $Enums.ev_type
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly game_id: FieldRef<"events", 'Int'>
    readonly discount: FieldRef<"events", 'Decimal'>
    readonly start_date: FieldRef<"events", 'DateTime'>
    readonly end_date: FieldRef<"events", 'DateTime'>
    readonly type: FieldRef<"events", 'ev_type'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsAvgAggregateOutputType = {
    user_id: number | null
    friend_id: number | null
  }

  export type FriendsSumAggregateOutputType = {
    user_id: number | null
    friend_id: number | null
  }

  export type FriendsMinAggregateOutputType = {
    user_id: number | null
    friend_id: number | null
    status: $Enums.fr_status | null
  }

  export type FriendsMaxAggregateOutputType = {
    user_id: number | null
    friend_id: number | null
    status: $Enums.fr_status | null
  }

  export type FriendsCountAggregateOutputType = {
    user_id: number
    friend_id: number
    status: number
    _all: number
  }


  export type FriendsAvgAggregateInputType = {
    user_id?: true
    friend_id?: true
  }

  export type FriendsSumAggregateInputType = {
    user_id?: true
    friend_id?: true
  }

  export type FriendsMinAggregateInputType = {
    user_id?: true
    friend_id?: true
    status?: true
  }

  export type FriendsMaxAggregateInputType = {
    user_id?: true
    friend_id?: true
    status?: true
  }

  export type FriendsCountAggregateInputType = {
    user_id?: true
    friend_id?: true
    status?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to aggregate.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithAggregationInput | friendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _avg?: FriendsAvgAggregateInputType
    _sum?: FriendsSumAggregateInputType
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    user_id: number
    friend_id: number
    status: $Enums.fr_status
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectScalar = {
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
  }

  export type friendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "friend_id" | "status", ExtArgs["result"]["friends"]>
  export type friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_friend_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends"
    objects: {
      users_friends_friend_idTousers: Prisma.$usersPayload<ExtArgs>
      users_friends_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      friend_id: number
      status: $Enums.fr_status
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type friendsGetPayload<S extends boolean | null | undefined | friendsDefaultArgs> = $Result.GetResult<Prisma.$friendsPayload, S>

  type friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<friendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends'], meta: { name: 'friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends friendsFindUniqueArgs>(args: SelectSubset<T, friendsFindUniqueArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs>(args: SelectSubset<T, friendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends friendsFindFirstArgs>(args?: SelectSubset<T, friendsFindFirstArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs>(args?: SelectSubset<T, friendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const friendsWithUser_idOnly = await prisma.friends.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends friendsFindManyArgs>(args?: SelectSubset<T, friendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends friendsCreateArgs>(args: SelectSubset<T, friendsCreateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends friendsCreateManyArgs>(args?: SelectSubset<T, friendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {friendsCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `user_id`
     * const friendsWithUser_idOnly = await prisma.friends.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends friendsCreateManyAndReturnArgs>(args?: SelectSubset<T, friendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends friendsDeleteArgs>(args: SelectSubset<T, friendsDeleteArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends friendsUpdateArgs>(args: SelectSubset<T, friendsUpdateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends friendsDeleteManyArgs>(args?: SelectSubset<T, friendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends friendsUpdateManyArgs>(args: SelectSubset<T, friendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {friendsUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `user_id`
     * const friendsWithUser_idOnly = await prisma.friends.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends friendsUpdateManyAndReturnArgs>(args: SelectSubset<T, friendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends friendsUpsertArgs>(args: SelectSubset<T, friendsUpsertArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendsGroupByArgs['orderBy'] }
        : { orderBy?: friendsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends model
   */
  readonly fields: friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_friends_friend_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_friends_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the friends model
   */
  interface friendsFieldRefs {
    readonly user_id: FieldRef<"friends", 'Int'>
    readonly friend_id: FieldRef<"friends", 'Int'>
    readonly status: FieldRef<"friends", 'fr_status'>
  }
    

  // Custom InputTypes
  /**
   * friends findUnique
   */
  export type friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findFirst
   */
  export type friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findMany
   */
  export type friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends create
   */
  export type friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a friends.
     */
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }

  /**
   * friends createMany
   */
  export type friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * friends createManyAndReturn
   */
  export type friendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * friends update
   */
  export type friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a friends.
     */
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to update.
     */
    limit?: number
  }

  /**
   * friends updateManyAndReturn
   */
  export type friendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * friends upsert
   */
  export type friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the friends to update in case it exists.
     */
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     */
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }

  /**
   * friends delete
   */
  export type friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter which friends to delete.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to delete
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to delete.
     */
    limit?: number
  }

  /**
   * friends without action
   */
  export type friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
  }


  /**
   * Model game_dev_connection
   */

  export type AggregateGame_dev_connection = {
    _count: Game_dev_connectionCountAggregateOutputType | null
    _avg: Game_dev_connectionAvgAggregateOutputType | null
    _sum: Game_dev_connectionSumAggregateOutputType | null
    _min: Game_dev_connectionMinAggregateOutputType | null
    _max: Game_dev_connectionMaxAggregateOutputType | null
  }

  export type Game_dev_connectionAvgAggregateOutputType = {
    game_id: number | null
    dev_id: number | null
  }

  export type Game_dev_connectionSumAggregateOutputType = {
    game_id: number | null
    dev_id: number | null
  }

  export type Game_dev_connectionMinAggregateOutputType = {
    game_id: number | null
    dev_id: number | null
  }

  export type Game_dev_connectionMaxAggregateOutputType = {
    game_id: number | null
    dev_id: number | null
  }

  export type Game_dev_connectionCountAggregateOutputType = {
    game_id: number
    dev_id: number
    _all: number
  }


  export type Game_dev_connectionAvgAggregateInputType = {
    game_id?: true
    dev_id?: true
  }

  export type Game_dev_connectionSumAggregateInputType = {
    game_id?: true
    dev_id?: true
  }

  export type Game_dev_connectionMinAggregateInputType = {
    game_id?: true
    dev_id?: true
  }

  export type Game_dev_connectionMaxAggregateInputType = {
    game_id?: true
    dev_id?: true
  }

  export type Game_dev_connectionCountAggregateInputType = {
    game_id?: true
    dev_id?: true
    _all?: true
  }

  export type Game_dev_connectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_dev_connection to aggregate.
     */
    where?: game_dev_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_dev_connections to fetch.
     */
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: game_dev_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_dev_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_dev_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned game_dev_connections
    **/
    _count?: true | Game_dev_connectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Game_dev_connectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Game_dev_connectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Game_dev_connectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Game_dev_connectionMaxAggregateInputType
  }

  export type GetGame_dev_connectionAggregateType<T extends Game_dev_connectionAggregateArgs> = {
        [P in keyof T & keyof AggregateGame_dev_connection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_dev_connection[P]>
      : GetScalarType<T[P], AggregateGame_dev_connection[P]>
  }




  export type game_dev_connectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_dev_connectionWhereInput
    orderBy?: game_dev_connectionOrderByWithAggregationInput | game_dev_connectionOrderByWithAggregationInput[]
    by: Game_dev_connectionScalarFieldEnum[] | Game_dev_connectionScalarFieldEnum
    having?: game_dev_connectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Game_dev_connectionCountAggregateInputType | true
    _avg?: Game_dev_connectionAvgAggregateInputType
    _sum?: Game_dev_connectionSumAggregateInputType
    _min?: Game_dev_connectionMinAggregateInputType
    _max?: Game_dev_connectionMaxAggregateInputType
  }

  export type Game_dev_connectionGroupByOutputType = {
    game_id: number
    dev_id: number
    _count: Game_dev_connectionCountAggregateOutputType | null
    _avg: Game_dev_connectionAvgAggregateOutputType | null
    _sum: Game_dev_connectionSumAggregateOutputType | null
    _min: Game_dev_connectionMinAggregateOutputType | null
    _max: Game_dev_connectionMaxAggregateOutputType | null
  }

  type GetGame_dev_connectionGroupByPayload<T extends game_dev_connectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_dev_connectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Game_dev_connectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_dev_connectionGroupByOutputType[P]>
            : GetScalarType<T[P], Game_dev_connectionGroupByOutputType[P]>
        }
      >
    >


  export type game_dev_connectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    dev_id?: boolean
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_dev_connection"]>

  export type game_dev_connectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    dev_id?: boolean
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_dev_connection"]>

  export type game_dev_connectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    dev_id?: boolean
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_dev_connection"]>

  export type game_dev_connectionSelectScalar = {
    game_id?: boolean
    dev_id?: boolean
  }

  export type game_dev_connectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"game_id" | "dev_id", ExtArgs["result"]["game_dev_connection"]>
  export type game_dev_connectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type game_dev_connectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type game_dev_connectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devs?: boolean | devsDefaultArgs<ExtArgs>
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }

  export type $game_dev_connectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game_dev_connection"
    objects: {
      devs: Prisma.$devsPayload<ExtArgs>
      games: Prisma.$gamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      game_id: number
      dev_id: number
    }, ExtArgs["result"]["game_dev_connection"]>
    composites: {}
  }

  type game_dev_connectionGetPayload<S extends boolean | null | undefined | game_dev_connectionDefaultArgs> = $Result.GetResult<Prisma.$game_dev_connectionPayload, S>

  type game_dev_connectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<game_dev_connectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Game_dev_connectionCountAggregateInputType | true
    }

  export interface game_dev_connectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game_dev_connection'], meta: { name: 'game_dev_connection' } }
    /**
     * Find zero or one Game_dev_connection that matches the filter.
     * @param {game_dev_connectionFindUniqueArgs} args - Arguments to find a Game_dev_connection
     * @example
     * // Get one Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends game_dev_connectionFindUniqueArgs>(args: SelectSubset<T, game_dev_connectionFindUniqueArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game_dev_connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {game_dev_connectionFindUniqueOrThrowArgs} args - Arguments to find a Game_dev_connection
     * @example
     * // Get one Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends game_dev_connectionFindUniqueOrThrowArgs>(args: SelectSubset<T, game_dev_connectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_dev_connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionFindFirstArgs} args - Arguments to find a Game_dev_connection
     * @example
     * // Get one Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends game_dev_connectionFindFirstArgs>(args?: SelectSubset<T, game_dev_connectionFindFirstArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_dev_connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionFindFirstOrThrowArgs} args - Arguments to find a Game_dev_connection
     * @example
     * // Get one Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends game_dev_connectionFindFirstOrThrowArgs>(args?: SelectSubset<T, game_dev_connectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Game_dev_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_dev_connections
     * const game_dev_connections = await prisma.game_dev_connection.findMany()
     * 
     * // Get first 10 Game_dev_connections
     * const game_dev_connections = await prisma.game_dev_connection.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const game_dev_connectionWithGame_idOnly = await prisma.game_dev_connection.findMany({ select: { game_id: true } })
     * 
     */
    findMany<T extends game_dev_connectionFindManyArgs>(args?: SelectSubset<T, game_dev_connectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game_dev_connection.
     * @param {game_dev_connectionCreateArgs} args - Arguments to create a Game_dev_connection.
     * @example
     * // Create one Game_dev_connection
     * const Game_dev_connection = await prisma.game_dev_connection.create({
     *   data: {
     *     // ... data to create a Game_dev_connection
     *   }
     * })
     * 
     */
    create<T extends game_dev_connectionCreateArgs>(args: SelectSubset<T, game_dev_connectionCreateArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Game_dev_connections.
     * @param {game_dev_connectionCreateManyArgs} args - Arguments to create many Game_dev_connections.
     * @example
     * // Create many Game_dev_connections
     * const game_dev_connection = await prisma.game_dev_connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends game_dev_connectionCreateManyArgs>(args?: SelectSubset<T, game_dev_connectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Game_dev_connections and returns the data saved in the database.
     * @param {game_dev_connectionCreateManyAndReturnArgs} args - Arguments to create many Game_dev_connections.
     * @example
     * // Create many Game_dev_connections
     * const game_dev_connection = await prisma.game_dev_connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Game_dev_connections and only return the `game_id`
     * const game_dev_connectionWithGame_idOnly = await prisma.game_dev_connection.createManyAndReturn({
     *   select: { game_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends game_dev_connectionCreateManyAndReturnArgs>(args?: SelectSubset<T, game_dev_connectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game_dev_connection.
     * @param {game_dev_connectionDeleteArgs} args - Arguments to delete one Game_dev_connection.
     * @example
     * // Delete one Game_dev_connection
     * const Game_dev_connection = await prisma.game_dev_connection.delete({
     *   where: {
     *     // ... filter to delete one Game_dev_connection
     *   }
     * })
     * 
     */
    delete<T extends game_dev_connectionDeleteArgs>(args: SelectSubset<T, game_dev_connectionDeleteArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game_dev_connection.
     * @param {game_dev_connectionUpdateArgs} args - Arguments to update one Game_dev_connection.
     * @example
     * // Update one Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends game_dev_connectionUpdateArgs>(args: SelectSubset<T, game_dev_connectionUpdateArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Game_dev_connections.
     * @param {game_dev_connectionDeleteManyArgs} args - Arguments to filter Game_dev_connections to delete.
     * @example
     * // Delete a few Game_dev_connections
     * const { count } = await prisma.game_dev_connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends game_dev_connectionDeleteManyArgs>(args?: SelectSubset<T, game_dev_connectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_dev_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_dev_connections
     * const game_dev_connection = await prisma.game_dev_connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends game_dev_connectionUpdateManyArgs>(args: SelectSubset<T, game_dev_connectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_dev_connections and returns the data updated in the database.
     * @param {game_dev_connectionUpdateManyAndReturnArgs} args - Arguments to update many Game_dev_connections.
     * @example
     * // Update many Game_dev_connections
     * const game_dev_connection = await prisma.game_dev_connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Game_dev_connections and only return the `game_id`
     * const game_dev_connectionWithGame_idOnly = await prisma.game_dev_connection.updateManyAndReturn({
     *   select: { game_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends game_dev_connectionUpdateManyAndReturnArgs>(args: SelectSubset<T, game_dev_connectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game_dev_connection.
     * @param {game_dev_connectionUpsertArgs} args - Arguments to update or create a Game_dev_connection.
     * @example
     * // Update or create a Game_dev_connection
     * const game_dev_connection = await prisma.game_dev_connection.upsert({
     *   create: {
     *     // ... data to create a Game_dev_connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_dev_connection we want to update
     *   }
     * })
     */
    upsert<T extends game_dev_connectionUpsertArgs>(args: SelectSubset<T, game_dev_connectionUpsertArgs<ExtArgs>>): Prisma__game_dev_connectionClient<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Game_dev_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionCountArgs} args - Arguments to filter Game_dev_connections to count.
     * @example
     * // Count the number of Game_dev_connections
     * const count = await prisma.game_dev_connection.count({
     *   where: {
     *     // ... the filter for the Game_dev_connections we want to count
     *   }
     * })
    **/
    count<T extends game_dev_connectionCountArgs>(
      args?: Subset<T, game_dev_connectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_dev_connectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game_dev_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_dev_connectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Game_dev_connectionAggregateArgs>(args: Subset<T, Game_dev_connectionAggregateArgs>): Prisma.PrismaPromise<GetGame_dev_connectionAggregateType<T>>

    /**
     * Group by Game_dev_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_dev_connectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends game_dev_connectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_dev_connectionGroupByArgs['orderBy'] }
        : { orderBy?: game_dev_connectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, game_dev_connectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGame_dev_connectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game_dev_connection model
   */
  readonly fields: game_dev_connectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_dev_connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_dev_connectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devs<T extends devsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, devsDefaultArgs<ExtArgs>>): Prisma__devsClient<$Result.GetResult<Prisma.$devsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the game_dev_connection model
   */
  interface game_dev_connectionFieldRefs {
    readonly game_id: FieldRef<"game_dev_connection", 'Int'>
    readonly dev_id: FieldRef<"game_dev_connection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * game_dev_connection findUnique
   */
  export type game_dev_connectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_dev_connection to fetch.
     */
    where: game_dev_connectionWhereUniqueInput
  }

  /**
   * game_dev_connection findUniqueOrThrow
   */
  export type game_dev_connectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_dev_connection to fetch.
     */
    where: game_dev_connectionWhereUniqueInput
  }

  /**
   * game_dev_connection findFirst
   */
  export type game_dev_connectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_dev_connection to fetch.
     */
    where?: game_dev_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_dev_connections to fetch.
     */
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_dev_connections.
     */
    cursor?: game_dev_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_dev_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_dev_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_dev_connections.
     */
    distinct?: Game_dev_connectionScalarFieldEnum | Game_dev_connectionScalarFieldEnum[]
  }

  /**
   * game_dev_connection findFirstOrThrow
   */
  export type game_dev_connectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_dev_connection to fetch.
     */
    where?: game_dev_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_dev_connections to fetch.
     */
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_dev_connections.
     */
    cursor?: game_dev_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_dev_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_dev_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_dev_connections.
     */
    distinct?: Game_dev_connectionScalarFieldEnum | Game_dev_connectionScalarFieldEnum[]
  }

  /**
   * game_dev_connection findMany
   */
  export type game_dev_connectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_dev_connections to fetch.
     */
    where?: game_dev_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_dev_connections to fetch.
     */
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing game_dev_connections.
     */
    cursor?: game_dev_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_dev_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_dev_connections.
     */
    skip?: number
    distinct?: Game_dev_connectionScalarFieldEnum | Game_dev_connectionScalarFieldEnum[]
  }

  /**
   * game_dev_connection create
   */
  export type game_dev_connectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * The data needed to create a game_dev_connection.
     */
    data: XOR<game_dev_connectionCreateInput, game_dev_connectionUncheckedCreateInput>
  }

  /**
   * game_dev_connection createMany
   */
  export type game_dev_connectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_dev_connections.
     */
    data: game_dev_connectionCreateManyInput | game_dev_connectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game_dev_connection createManyAndReturn
   */
  export type game_dev_connectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * The data used to create many game_dev_connections.
     */
    data: game_dev_connectionCreateManyInput | game_dev_connectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_dev_connection update
   */
  export type game_dev_connectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * The data needed to update a game_dev_connection.
     */
    data: XOR<game_dev_connectionUpdateInput, game_dev_connectionUncheckedUpdateInput>
    /**
     * Choose, which game_dev_connection to update.
     */
    where: game_dev_connectionWhereUniqueInput
  }

  /**
   * game_dev_connection updateMany
   */
  export type game_dev_connectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_dev_connections.
     */
    data: XOR<game_dev_connectionUpdateManyMutationInput, game_dev_connectionUncheckedUpdateManyInput>
    /**
     * Filter which game_dev_connections to update
     */
    where?: game_dev_connectionWhereInput
    /**
     * Limit how many game_dev_connections to update.
     */
    limit?: number
  }

  /**
   * game_dev_connection updateManyAndReturn
   */
  export type game_dev_connectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * The data used to update game_dev_connections.
     */
    data: XOR<game_dev_connectionUpdateManyMutationInput, game_dev_connectionUncheckedUpdateManyInput>
    /**
     * Filter which game_dev_connections to update
     */
    where?: game_dev_connectionWhereInput
    /**
     * Limit how many game_dev_connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_dev_connection upsert
   */
  export type game_dev_connectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * The filter to search for the game_dev_connection to update in case it exists.
     */
    where: game_dev_connectionWhereUniqueInput
    /**
     * In case the game_dev_connection found by the `where` argument doesn't exist, create a new game_dev_connection with this data.
     */
    create: XOR<game_dev_connectionCreateInput, game_dev_connectionUncheckedCreateInput>
    /**
     * In case the game_dev_connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_dev_connectionUpdateInput, game_dev_connectionUncheckedUpdateInput>
  }

  /**
   * game_dev_connection delete
   */
  export type game_dev_connectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    /**
     * Filter which game_dev_connection to delete.
     */
    where: game_dev_connectionWhereUniqueInput
  }

  /**
   * game_dev_connection deleteMany
   */
  export type game_dev_connectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_dev_connections to delete
     */
    where?: game_dev_connectionWhereInput
    /**
     * Limit how many game_dev_connections to delete.
     */
    limit?: number
  }

  /**
   * game_dev_connection without action
   */
  export type game_dev_connectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
  }


  /**
   * Model game_news
   */

  export type AggregateGame_news = {
    _count: Game_newsCountAggregateOutputType | null
    _avg: Game_newsAvgAggregateOutputType | null
    _sum: Game_newsSumAggregateOutputType | null
    _min: Game_newsMinAggregateOutputType | null
    _max: Game_newsMaxAggregateOutputType | null
  }

  export type Game_newsAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type Game_newsSumAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type Game_newsMinAggregateOutputType = {
    id: number | null
    game_id: number | null
    title: string | null
    content: string | null
    published_at: Date | null
  }

  export type Game_newsMaxAggregateOutputType = {
    id: number | null
    game_id: number | null
    title: string | null
    content: string | null
    published_at: Date | null
  }

  export type Game_newsCountAggregateOutputType = {
    id: number
    game_id: number
    title: number
    content: number
    published_at: number
    _all: number
  }


  export type Game_newsAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type Game_newsSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type Game_newsMinAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    content?: true
    published_at?: true
  }

  export type Game_newsMaxAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    content?: true
    published_at?: true
  }

  export type Game_newsCountAggregateInputType = {
    id?: true
    game_id?: true
    title?: true
    content?: true
    published_at?: true
    _all?: true
  }

  export type Game_newsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_news to aggregate.
     */
    where?: game_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_news to fetch.
     */
    orderBy?: game_newsOrderByWithRelationInput | game_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: game_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned game_news
    **/
    _count?: true | Game_newsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Game_newsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Game_newsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Game_newsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Game_newsMaxAggregateInputType
  }

  export type GetGame_newsAggregateType<T extends Game_newsAggregateArgs> = {
        [P in keyof T & keyof AggregateGame_news]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_news[P]>
      : GetScalarType<T[P], AggregateGame_news[P]>
  }




  export type game_newsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_newsWhereInput
    orderBy?: game_newsOrderByWithAggregationInput | game_newsOrderByWithAggregationInput[]
    by: Game_newsScalarFieldEnum[] | Game_newsScalarFieldEnum
    having?: game_newsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Game_newsCountAggregateInputType | true
    _avg?: Game_newsAvgAggregateInputType
    _sum?: Game_newsSumAggregateInputType
    _min?: Game_newsMinAggregateInputType
    _max?: Game_newsMaxAggregateInputType
  }

  export type Game_newsGroupByOutputType = {
    id: number
    game_id: number
    title: string
    content: string
    published_at: Date
    _count: Game_newsCountAggregateOutputType | null
    _avg: Game_newsAvgAggregateOutputType | null
    _sum: Game_newsSumAggregateOutputType | null
    _min: Game_newsMinAggregateOutputType | null
    _max: Game_newsMaxAggregateOutputType | null
  }

  type GetGame_newsGroupByPayload<T extends game_newsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_newsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Game_newsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_newsGroupByOutputType[P]>
            : GetScalarType<T[P], Game_newsGroupByOutputType[P]>
        }
      >
    >


  export type game_newsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    content?: boolean
    published_at?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_news"]>

  export type game_newsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    content?: boolean
    published_at?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_news"]>

  export type game_newsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    title?: boolean
    content?: boolean
    published_at?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_news"]>

  export type game_newsSelectScalar = {
    id?: boolean
    game_id?: boolean
    title?: boolean
    content?: boolean
    published_at?: boolean
  }

  export type game_newsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "game_id" | "title" | "content" | "published_at", ExtArgs["result"]["game_news"]>
  export type game_newsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type game_newsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }
  export type game_newsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
  }

  export type $game_newsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game_news"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: number
      title: string
      content: string
      published_at: Date
    }, ExtArgs["result"]["game_news"]>
    composites: {}
  }

  type game_newsGetPayload<S extends boolean | null | undefined | game_newsDefaultArgs> = $Result.GetResult<Prisma.$game_newsPayload, S>

  type game_newsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<game_newsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Game_newsCountAggregateInputType | true
    }

  export interface game_newsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game_news'], meta: { name: 'game_news' } }
    /**
     * Find zero or one Game_news that matches the filter.
     * @param {game_newsFindUniqueArgs} args - Arguments to find a Game_news
     * @example
     * // Get one Game_news
     * const game_news = await prisma.game_news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends game_newsFindUniqueArgs>(args: SelectSubset<T, game_newsFindUniqueArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game_news that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {game_newsFindUniqueOrThrowArgs} args - Arguments to find a Game_news
     * @example
     * // Get one Game_news
     * const game_news = await prisma.game_news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends game_newsFindUniqueOrThrowArgs>(args: SelectSubset<T, game_newsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_news that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsFindFirstArgs} args - Arguments to find a Game_news
     * @example
     * // Get one Game_news
     * const game_news = await prisma.game_news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends game_newsFindFirstArgs>(args?: SelectSubset<T, game_newsFindFirstArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_news that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsFindFirstOrThrowArgs} args - Arguments to find a Game_news
     * @example
     * // Get one Game_news
     * const game_news = await prisma.game_news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends game_newsFindFirstOrThrowArgs>(args?: SelectSubset<T, game_newsFindFirstOrThrowArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Game_news that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_news
     * const game_news = await prisma.game_news.findMany()
     * 
     * // Get first 10 Game_news
     * const game_news = await prisma.game_news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const game_newsWithIdOnly = await prisma.game_news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends game_newsFindManyArgs>(args?: SelectSubset<T, game_newsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game_news.
     * @param {game_newsCreateArgs} args - Arguments to create a Game_news.
     * @example
     * // Create one Game_news
     * const Game_news = await prisma.game_news.create({
     *   data: {
     *     // ... data to create a Game_news
     *   }
     * })
     * 
     */
    create<T extends game_newsCreateArgs>(args: SelectSubset<T, game_newsCreateArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Game_news.
     * @param {game_newsCreateManyArgs} args - Arguments to create many Game_news.
     * @example
     * // Create many Game_news
     * const game_news = await prisma.game_news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends game_newsCreateManyArgs>(args?: SelectSubset<T, game_newsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Game_news and returns the data saved in the database.
     * @param {game_newsCreateManyAndReturnArgs} args - Arguments to create many Game_news.
     * @example
     * // Create many Game_news
     * const game_news = await prisma.game_news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Game_news and only return the `id`
     * const game_newsWithIdOnly = await prisma.game_news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends game_newsCreateManyAndReturnArgs>(args?: SelectSubset<T, game_newsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game_news.
     * @param {game_newsDeleteArgs} args - Arguments to delete one Game_news.
     * @example
     * // Delete one Game_news
     * const Game_news = await prisma.game_news.delete({
     *   where: {
     *     // ... filter to delete one Game_news
     *   }
     * })
     * 
     */
    delete<T extends game_newsDeleteArgs>(args: SelectSubset<T, game_newsDeleteArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game_news.
     * @param {game_newsUpdateArgs} args - Arguments to update one Game_news.
     * @example
     * // Update one Game_news
     * const game_news = await prisma.game_news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends game_newsUpdateArgs>(args: SelectSubset<T, game_newsUpdateArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Game_news.
     * @param {game_newsDeleteManyArgs} args - Arguments to filter Game_news to delete.
     * @example
     * // Delete a few Game_news
     * const { count } = await prisma.game_news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends game_newsDeleteManyArgs>(args?: SelectSubset<T, game_newsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_news
     * const game_news = await prisma.game_news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends game_newsUpdateManyArgs>(args: SelectSubset<T, game_newsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_news and returns the data updated in the database.
     * @param {game_newsUpdateManyAndReturnArgs} args - Arguments to update many Game_news.
     * @example
     * // Update many Game_news
     * const game_news = await prisma.game_news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Game_news and only return the `id`
     * const game_newsWithIdOnly = await prisma.game_news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends game_newsUpdateManyAndReturnArgs>(args: SelectSubset<T, game_newsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game_news.
     * @param {game_newsUpsertArgs} args - Arguments to update or create a Game_news.
     * @example
     * // Update or create a Game_news
     * const game_news = await prisma.game_news.upsert({
     *   create: {
     *     // ... data to create a Game_news
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_news we want to update
     *   }
     * })
     */
    upsert<T extends game_newsUpsertArgs>(args: SelectSubset<T, game_newsUpsertArgs<ExtArgs>>): Prisma__game_newsClient<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Game_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsCountArgs} args - Arguments to filter Game_news to count.
     * @example
     * // Count the number of Game_news
     * const count = await prisma.game_news.count({
     *   where: {
     *     // ... the filter for the Game_news we want to count
     *   }
     * })
    **/
    count<T extends game_newsCountArgs>(
      args?: Subset<T, game_newsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_newsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_newsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Game_newsAggregateArgs>(args: Subset<T, Game_newsAggregateArgs>): Prisma.PrismaPromise<GetGame_newsAggregateType<T>>

    /**
     * Group by Game_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_newsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends game_newsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_newsGroupByArgs['orderBy'] }
        : { orderBy?: game_newsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, game_newsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGame_newsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game_news model
   */
  readonly fields: game_newsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_news.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_newsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the game_news model
   */
  interface game_newsFieldRefs {
    readonly id: FieldRef<"game_news", 'Int'>
    readonly game_id: FieldRef<"game_news", 'Int'>
    readonly title: FieldRef<"game_news", 'String'>
    readonly content: FieldRef<"game_news", 'String'>
    readonly published_at: FieldRef<"game_news", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * game_news findUnique
   */
  export type game_newsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter, which game_news to fetch.
     */
    where: game_newsWhereUniqueInput
  }

  /**
   * game_news findUniqueOrThrow
   */
  export type game_newsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter, which game_news to fetch.
     */
    where: game_newsWhereUniqueInput
  }

  /**
   * game_news findFirst
   */
  export type game_newsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter, which game_news to fetch.
     */
    where?: game_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_news to fetch.
     */
    orderBy?: game_newsOrderByWithRelationInput | game_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_news.
     */
    cursor?: game_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_news.
     */
    distinct?: Game_newsScalarFieldEnum | Game_newsScalarFieldEnum[]
  }

  /**
   * game_news findFirstOrThrow
   */
  export type game_newsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter, which game_news to fetch.
     */
    where?: game_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_news to fetch.
     */
    orderBy?: game_newsOrderByWithRelationInput | game_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_news.
     */
    cursor?: game_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_news.
     */
    distinct?: Game_newsScalarFieldEnum | Game_newsScalarFieldEnum[]
  }

  /**
   * game_news findMany
   */
  export type game_newsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter, which game_news to fetch.
     */
    where?: game_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_news to fetch.
     */
    orderBy?: game_newsOrderByWithRelationInput | game_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing game_news.
     */
    cursor?: game_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_news.
     */
    skip?: number
    distinct?: Game_newsScalarFieldEnum | Game_newsScalarFieldEnum[]
  }

  /**
   * game_news create
   */
  export type game_newsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * The data needed to create a game_news.
     */
    data: XOR<game_newsCreateInput, game_newsUncheckedCreateInput>
  }

  /**
   * game_news createMany
   */
  export type game_newsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_news.
     */
    data: game_newsCreateManyInput | game_newsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game_news createManyAndReturn
   */
  export type game_newsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * The data used to create many game_news.
     */
    data: game_newsCreateManyInput | game_newsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_news update
   */
  export type game_newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * The data needed to update a game_news.
     */
    data: XOR<game_newsUpdateInput, game_newsUncheckedUpdateInput>
    /**
     * Choose, which game_news to update.
     */
    where: game_newsWhereUniqueInput
  }

  /**
   * game_news updateMany
   */
  export type game_newsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_news.
     */
    data: XOR<game_newsUpdateManyMutationInput, game_newsUncheckedUpdateManyInput>
    /**
     * Filter which game_news to update
     */
    where?: game_newsWhereInput
    /**
     * Limit how many game_news to update.
     */
    limit?: number
  }

  /**
   * game_news updateManyAndReturn
   */
  export type game_newsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * The data used to update game_news.
     */
    data: XOR<game_newsUpdateManyMutationInput, game_newsUncheckedUpdateManyInput>
    /**
     * Filter which game_news to update
     */
    where?: game_newsWhereInput
    /**
     * Limit how many game_news to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_news upsert
   */
  export type game_newsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * The filter to search for the game_news to update in case it exists.
     */
    where: game_newsWhereUniqueInput
    /**
     * In case the game_news found by the `where` argument doesn't exist, create a new game_news with this data.
     */
    create: XOR<game_newsCreateInput, game_newsUncheckedCreateInput>
    /**
     * In case the game_news was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_newsUpdateInput, game_newsUncheckedUpdateInput>
  }

  /**
   * game_news delete
   */
  export type game_newsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    /**
     * Filter which game_news to delete.
     */
    where: game_newsWhereUniqueInput
  }

  /**
   * game_news deleteMany
   */
  export type game_newsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_news to delete
     */
    where?: game_newsWhereInput
    /**
     * Limit how many game_news to delete.
     */
    limit?: number
  }

  /**
   * game_news without action
   */
  export type game_newsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
  }


  /**
   * Model game_tag_connection
   */

  export type AggregateGame_tag_connection = {
    _count: Game_tag_connectionCountAggregateOutputType | null
    _avg: Game_tag_connectionAvgAggregateOutputType | null
    _sum: Game_tag_connectionSumAggregateOutputType | null
    _min: Game_tag_connectionMinAggregateOutputType | null
    _max: Game_tag_connectionMaxAggregateOutputType | null
  }

  export type Game_tag_connectionAvgAggregateOutputType = {
    game_id: number | null
    tag_id: number | null
  }

  export type Game_tag_connectionSumAggregateOutputType = {
    game_id: number | null
    tag_id: number | null
  }

  export type Game_tag_connectionMinAggregateOutputType = {
    game_id: number | null
    tag_id: number | null
  }

  export type Game_tag_connectionMaxAggregateOutputType = {
    game_id: number | null
    tag_id: number | null
  }

  export type Game_tag_connectionCountAggregateOutputType = {
    game_id: number
    tag_id: number
    _all: number
  }


  export type Game_tag_connectionAvgAggregateInputType = {
    game_id?: true
    tag_id?: true
  }

  export type Game_tag_connectionSumAggregateInputType = {
    game_id?: true
    tag_id?: true
  }

  export type Game_tag_connectionMinAggregateInputType = {
    game_id?: true
    tag_id?: true
  }

  export type Game_tag_connectionMaxAggregateInputType = {
    game_id?: true
    tag_id?: true
  }

  export type Game_tag_connectionCountAggregateInputType = {
    game_id?: true
    tag_id?: true
    _all?: true
  }

  export type Game_tag_connectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_tag_connection to aggregate.
     */
    where?: game_tag_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tag_connections to fetch.
     */
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: game_tag_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tag_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tag_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned game_tag_connections
    **/
    _count?: true | Game_tag_connectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Game_tag_connectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Game_tag_connectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Game_tag_connectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Game_tag_connectionMaxAggregateInputType
  }

  export type GetGame_tag_connectionAggregateType<T extends Game_tag_connectionAggregateArgs> = {
        [P in keyof T & keyof AggregateGame_tag_connection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_tag_connection[P]>
      : GetScalarType<T[P], AggregateGame_tag_connection[P]>
  }




  export type game_tag_connectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_tag_connectionWhereInput
    orderBy?: game_tag_connectionOrderByWithAggregationInput | game_tag_connectionOrderByWithAggregationInput[]
    by: Game_tag_connectionScalarFieldEnum[] | Game_tag_connectionScalarFieldEnum
    having?: game_tag_connectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Game_tag_connectionCountAggregateInputType | true
    _avg?: Game_tag_connectionAvgAggregateInputType
    _sum?: Game_tag_connectionSumAggregateInputType
    _min?: Game_tag_connectionMinAggregateInputType
    _max?: Game_tag_connectionMaxAggregateInputType
  }

  export type Game_tag_connectionGroupByOutputType = {
    game_id: number
    tag_id: number
    _count: Game_tag_connectionCountAggregateOutputType | null
    _avg: Game_tag_connectionAvgAggregateOutputType | null
    _sum: Game_tag_connectionSumAggregateOutputType | null
    _min: Game_tag_connectionMinAggregateOutputType | null
    _max: Game_tag_connectionMaxAggregateOutputType | null
  }

  type GetGame_tag_connectionGroupByPayload<T extends game_tag_connectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_tag_connectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Game_tag_connectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_tag_connectionGroupByOutputType[P]>
            : GetScalarType<T[P], Game_tag_connectionGroupByOutputType[P]>
        }
      >
    >


  export type game_tag_connectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    tag_id?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_tag_connection"]>

  export type game_tag_connectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    tag_id?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_tag_connection"]>

  export type game_tag_connectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    tag_id?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game_tag_connection"]>

  export type game_tag_connectionSelectScalar = {
    game_id?: boolean
    tag_id?: boolean
  }

  export type game_tag_connectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"game_id" | "tag_id", ExtArgs["result"]["game_tag_connection"]>
  export type game_tag_connectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type game_tag_connectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type game_tag_connectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $game_tag_connectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game_tag_connection"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      game_id: number
      tag_id: number
    }, ExtArgs["result"]["game_tag_connection"]>
    composites: {}
  }

  type game_tag_connectionGetPayload<S extends boolean | null | undefined | game_tag_connectionDefaultArgs> = $Result.GetResult<Prisma.$game_tag_connectionPayload, S>

  type game_tag_connectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<game_tag_connectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Game_tag_connectionCountAggregateInputType | true
    }

  export interface game_tag_connectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game_tag_connection'], meta: { name: 'game_tag_connection' } }
    /**
     * Find zero or one Game_tag_connection that matches the filter.
     * @param {game_tag_connectionFindUniqueArgs} args - Arguments to find a Game_tag_connection
     * @example
     * // Get one Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends game_tag_connectionFindUniqueArgs>(args: SelectSubset<T, game_tag_connectionFindUniqueArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game_tag_connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {game_tag_connectionFindUniqueOrThrowArgs} args - Arguments to find a Game_tag_connection
     * @example
     * // Get one Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends game_tag_connectionFindUniqueOrThrowArgs>(args: SelectSubset<T, game_tag_connectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_tag_connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionFindFirstArgs} args - Arguments to find a Game_tag_connection
     * @example
     * // Get one Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends game_tag_connectionFindFirstArgs>(args?: SelectSubset<T, game_tag_connectionFindFirstArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game_tag_connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionFindFirstOrThrowArgs} args - Arguments to find a Game_tag_connection
     * @example
     * // Get one Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends game_tag_connectionFindFirstOrThrowArgs>(args?: SelectSubset<T, game_tag_connectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Game_tag_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_tag_connections
     * const game_tag_connections = await prisma.game_tag_connection.findMany()
     * 
     * // Get first 10 Game_tag_connections
     * const game_tag_connections = await prisma.game_tag_connection.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const game_tag_connectionWithGame_idOnly = await prisma.game_tag_connection.findMany({ select: { game_id: true } })
     * 
     */
    findMany<T extends game_tag_connectionFindManyArgs>(args?: SelectSubset<T, game_tag_connectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game_tag_connection.
     * @param {game_tag_connectionCreateArgs} args - Arguments to create a Game_tag_connection.
     * @example
     * // Create one Game_tag_connection
     * const Game_tag_connection = await prisma.game_tag_connection.create({
     *   data: {
     *     // ... data to create a Game_tag_connection
     *   }
     * })
     * 
     */
    create<T extends game_tag_connectionCreateArgs>(args: SelectSubset<T, game_tag_connectionCreateArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Game_tag_connections.
     * @param {game_tag_connectionCreateManyArgs} args - Arguments to create many Game_tag_connections.
     * @example
     * // Create many Game_tag_connections
     * const game_tag_connection = await prisma.game_tag_connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends game_tag_connectionCreateManyArgs>(args?: SelectSubset<T, game_tag_connectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Game_tag_connections and returns the data saved in the database.
     * @param {game_tag_connectionCreateManyAndReturnArgs} args - Arguments to create many Game_tag_connections.
     * @example
     * // Create many Game_tag_connections
     * const game_tag_connection = await prisma.game_tag_connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Game_tag_connections and only return the `game_id`
     * const game_tag_connectionWithGame_idOnly = await prisma.game_tag_connection.createManyAndReturn({
     *   select: { game_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends game_tag_connectionCreateManyAndReturnArgs>(args?: SelectSubset<T, game_tag_connectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game_tag_connection.
     * @param {game_tag_connectionDeleteArgs} args - Arguments to delete one Game_tag_connection.
     * @example
     * // Delete one Game_tag_connection
     * const Game_tag_connection = await prisma.game_tag_connection.delete({
     *   where: {
     *     // ... filter to delete one Game_tag_connection
     *   }
     * })
     * 
     */
    delete<T extends game_tag_connectionDeleteArgs>(args: SelectSubset<T, game_tag_connectionDeleteArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game_tag_connection.
     * @param {game_tag_connectionUpdateArgs} args - Arguments to update one Game_tag_connection.
     * @example
     * // Update one Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends game_tag_connectionUpdateArgs>(args: SelectSubset<T, game_tag_connectionUpdateArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Game_tag_connections.
     * @param {game_tag_connectionDeleteManyArgs} args - Arguments to filter Game_tag_connections to delete.
     * @example
     * // Delete a few Game_tag_connections
     * const { count } = await prisma.game_tag_connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends game_tag_connectionDeleteManyArgs>(args?: SelectSubset<T, game_tag_connectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_tag_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_tag_connections
     * const game_tag_connection = await prisma.game_tag_connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends game_tag_connectionUpdateManyArgs>(args: SelectSubset<T, game_tag_connectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_tag_connections and returns the data updated in the database.
     * @param {game_tag_connectionUpdateManyAndReturnArgs} args - Arguments to update many Game_tag_connections.
     * @example
     * // Update many Game_tag_connections
     * const game_tag_connection = await prisma.game_tag_connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Game_tag_connections and only return the `game_id`
     * const game_tag_connectionWithGame_idOnly = await prisma.game_tag_connection.updateManyAndReturn({
     *   select: { game_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends game_tag_connectionUpdateManyAndReturnArgs>(args: SelectSubset<T, game_tag_connectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game_tag_connection.
     * @param {game_tag_connectionUpsertArgs} args - Arguments to update or create a Game_tag_connection.
     * @example
     * // Update or create a Game_tag_connection
     * const game_tag_connection = await prisma.game_tag_connection.upsert({
     *   create: {
     *     // ... data to create a Game_tag_connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_tag_connection we want to update
     *   }
     * })
     */
    upsert<T extends game_tag_connectionUpsertArgs>(args: SelectSubset<T, game_tag_connectionUpsertArgs<ExtArgs>>): Prisma__game_tag_connectionClient<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Game_tag_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionCountArgs} args - Arguments to filter Game_tag_connections to count.
     * @example
     * // Count the number of Game_tag_connections
     * const count = await prisma.game_tag_connection.count({
     *   where: {
     *     // ... the filter for the Game_tag_connections we want to count
     *   }
     * })
    **/
    count<T extends game_tag_connectionCountArgs>(
      args?: Subset<T, game_tag_connectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_tag_connectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game_tag_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_tag_connectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Game_tag_connectionAggregateArgs>(args: Subset<T, Game_tag_connectionAggregateArgs>): Prisma.PrismaPromise<GetGame_tag_connectionAggregateType<T>>

    /**
     * Group by Game_tag_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_tag_connectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends game_tag_connectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_tag_connectionGroupByArgs['orderBy'] }
        : { orderBy?: game_tag_connectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, game_tag_connectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGame_tag_connectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game_tag_connection model
   */
  readonly fields: game_tag_connectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_tag_connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_tag_connectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the game_tag_connection model
   */
  interface game_tag_connectionFieldRefs {
    readonly game_id: FieldRef<"game_tag_connection", 'Int'>
    readonly tag_id: FieldRef<"game_tag_connection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * game_tag_connection findUnique
   */
  export type game_tag_connectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_tag_connection to fetch.
     */
    where: game_tag_connectionWhereUniqueInput
  }

  /**
   * game_tag_connection findUniqueOrThrow
   */
  export type game_tag_connectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_tag_connection to fetch.
     */
    where: game_tag_connectionWhereUniqueInput
  }

  /**
   * game_tag_connection findFirst
   */
  export type game_tag_connectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_tag_connection to fetch.
     */
    where?: game_tag_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tag_connections to fetch.
     */
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_tag_connections.
     */
    cursor?: game_tag_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tag_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tag_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_tag_connections.
     */
    distinct?: Game_tag_connectionScalarFieldEnum | Game_tag_connectionScalarFieldEnum[]
  }

  /**
   * game_tag_connection findFirstOrThrow
   */
  export type game_tag_connectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_tag_connection to fetch.
     */
    where?: game_tag_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tag_connections to fetch.
     */
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for game_tag_connections.
     */
    cursor?: game_tag_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tag_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tag_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of game_tag_connections.
     */
    distinct?: Game_tag_connectionScalarFieldEnum | Game_tag_connectionScalarFieldEnum[]
  }

  /**
   * game_tag_connection findMany
   */
  export type game_tag_connectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter, which game_tag_connections to fetch.
     */
    where?: game_tag_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of game_tag_connections to fetch.
     */
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing game_tag_connections.
     */
    cursor?: game_tag_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` game_tag_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` game_tag_connections.
     */
    skip?: number
    distinct?: Game_tag_connectionScalarFieldEnum | Game_tag_connectionScalarFieldEnum[]
  }

  /**
   * game_tag_connection create
   */
  export type game_tag_connectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * The data needed to create a game_tag_connection.
     */
    data: XOR<game_tag_connectionCreateInput, game_tag_connectionUncheckedCreateInput>
  }

  /**
   * game_tag_connection createMany
   */
  export type game_tag_connectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_tag_connections.
     */
    data: game_tag_connectionCreateManyInput | game_tag_connectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game_tag_connection createManyAndReturn
   */
  export type game_tag_connectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * The data used to create many game_tag_connections.
     */
    data: game_tag_connectionCreateManyInput | game_tag_connectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_tag_connection update
   */
  export type game_tag_connectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * The data needed to update a game_tag_connection.
     */
    data: XOR<game_tag_connectionUpdateInput, game_tag_connectionUncheckedUpdateInput>
    /**
     * Choose, which game_tag_connection to update.
     */
    where: game_tag_connectionWhereUniqueInput
  }

  /**
   * game_tag_connection updateMany
   */
  export type game_tag_connectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_tag_connections.
     */
    data: XOR<game_tag_connectionUpdateManyMutationInput, game_tag_connectionUncheckedUpdateManyInput>
    /**
     * Filter which game_tag_connections to update
     */
    where?: game_tag_connectionWhereInput
    /**
     * Limit how many game_tag_connections to update.
     */
    limit?: number
  }

  /**
   * game_tag_connection updateManyAndReturn
   */
  export type game_tag_connectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * The data used to update game_tag_connections.
     */
    data: XOR<game_tag_connectionUpdateManyMutationInput, game_tag_connectionUncheckedUpdateManyInput>
    /**
     * Filter which game_tag_connections to update
     */
    where?: game_tag_connectionWhereInput
    /**
     * Limit how many game_tag_connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * game_tag_connection upsert
   */
  export type game_tag_connectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * The filter to search for the game_tag_connection to update in case it exists.
     */
    where: game_tag_connectionWhereUniqueInput
    /**
     * In case the game_tag_connection found by the `where` argument doesn't exist, create a new game_tag_connection with this data.
     */
    create: XOR<game_tag_connectionCreateInput, game_tag_connectionUncheckedCreateInput>
    /**
     * In case the game_tag_connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_tag_connectionUpdateInput, game_tag_connectionUncheckedUpdateInput>
  }

  /**
   * game_tag_connection delete
   */
  export type game_tag_connectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    /**
     * Filter which game_tag_connection to delete.
     */
    where: game_tag_connectionWhereUniqueInput
  }

  /**
   * game_tag_connection deleteMany
   */
  export type game_tag_connectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_tag_connections to delete
     */
    where?: game_tag_connectionWhereInput
    /**
     * Limit how many game_tag_connections to delete.
     */
    limit?: number
  }

  /**
   * game_tag_connection without action
   */
  export type game_tag_connectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
  }


  /**
   * Model games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    base_game_id: number | null
  }

  export type GamesSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    base_game_id: number | null
  }

  export type GamesMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: Decimal | null
    release_date: Date | null
    age_rating: string | null
    cover: string | null
    description: string | null
    base_game_id: number | null
    is_multiplayer: boolean | null
  }

  export type GamesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: Decimal | null
    release_date: Date | null
    age_rating: string | null
    cover: string | null
    description: string | null
    base_game_id: number | null
    is_multiplayer: boolean | null
  }

  export type GamesCountAggregateOutputType = {
    id: number
    title: number
    price: number
    release_date: number
    age_rating: number
    cover: number
    description: number
    system_requirements: number
    base_game_id: number
    is_multiplayer: number
    _all: number
  }


  export type GamesAvgAggregateInputType = {
    id?: true
    price?: true
    base_game_id?: true
  }

  export type GamesSumAggregateInputType = {
    id?: true
    price?: true
    base_game_id?: true
  }

  export type GamesMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    release_date?: true
    age_rating?: true
    cover?: true
    description?: true
    base_game_id?: true
    is_multiplayer?: true
  }

  export type GamesMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    release_date?: true
    age_rating?: true
    cover?: true
    description?: true
    base_game_id?: true
    is_multiplayer?: true
  }

  export type GamesCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    release_date?: true
    age_rating?: true
    cover?: true
    description?: true
    system_requirements?: true
    base_game_id?: true
    is_multiplayer?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to aggregate.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type gamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithAggregationInput | gamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: gamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _avg?: GamesAvgAggregateInputType
    _sum?: GamesSumAggregateInputType
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    id: number
    title: string
    price: Decimal | null
    release_date: Date
    age_rating: string
    cover: string
    description: string | null
    system_requirements: JsonValue
    base_game_id: number | null
    is_multiplayer: boolean
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends gamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type gamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    release_date?: boolean
    age_rating?: boolean
    cover?: boolean
    description?: boolean
    system_requirements?: boolean
    base_game_id?: boolean
    is_multiplayer?: boolean
    achievements?: boolean | games$achievementsArgs<ExtArgs>
    events?: boolean | games$eventsArgs<ExtArgs>
    game_dev_connection?: boolean | games$game_dev_connectionArgs<ExtArgs>
    game_news?: boolean | games$game_newsArgs<ExtArgs>
    game_tag_connection?: boolean | games$game_tag_connectionArgs<ExtArgs>
    games?: boolean | games$gamesArgs<ExtArgs>
    other_games?: boolean | games$other_gamesArgs<ExtArgs>
    libraries?: boolean | games$librariesArgs<ExtArgs>
    reviews?: boolean | games$reviewsArgs<ExtArgs>
    saves?: boolean | games$savesArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type gamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    release_date?: boolean
    age_rating?: boolean
    cover?: boolean
    description?: boolean
    system_requirements?: boolean
    base_game_id?: boolean
    is_multiplayer?: boolean
    games?: boolean | games$gamesArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type gamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    release_date?: boolean
    age_rating?: boolean
    cover?: boolean
    description?: boolean
    system_requirements?: boolean
    base_game_id?: boolean
    is_multiplayer?: boolean
    games?: boolean | games$gamesArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type gamesSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    release_date?: boolean
    age_rating?: boolean
    cover?: boolean
    description?: boolean
    system_requirements?: boolean
    base_game_id?: boolean
    is_multiplayer?: boolean
  }

  export type gamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "release_date" | "age_rating" | "cover" | "description" | "system_requirements" | "base_game_id" | "is_multiplayer", ExtArgs["result"]["games"]>
  export type gamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | games$achievementsArgs<ExtArgs>
    events?: boolean | games$eventsArgs<ExtArgs>
    game_dev_connection?: boolean | games$game_dev_connectionArgs<ExtArgs>
    game_news?: boolean | games$game_newsArgs<ExtArgs>
    game_tag_connection?: boolean | games$game_tag_connectionArgs<ExtArgs>
    games?: boolean | games$gamesArgs<ExtArgs>
    other_games?: boolean | games$other_gamesArgs<ExtArgs>
    libraries?: boolean | games$librariesArgs<ExtArgs>
    reviews?: boolean | games$reviewsArgs<ExtArgs>
    saves?: boolean | games$savesArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | games$gamesArgs<ExtArgs>
  }
  export type gamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | games$gamesArgs<ExtArgs>
  }

  export type $gamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "games"
    objects: {
      achievements: Prisma.$achievementsPayload<ExtArgs>[]
      events: Prisma.$eventsPayload<ExtArgs>[]
      game_dev_connection: Prisma.$game_dev_connectionPayload<ExtArgs>[]
      game_news: Prisma.$game_newsPayload<ExtArgs>[]
      game_tag_connection: Prisma.$game_tag_connectionPayload<ExtArgs>[]
      games: Prisma.$gamesPayload<ExtArgs> | null
      other_games: Prisma.$gamesPayload<ExtArgs>[]
      libraries: Prisma.$librariesPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      saves: Prisma.$savesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: Prisma.Decimal | null
      release_date: Date
      age_rating: string
      cover: string
      description: string | null
      system_requirements: Prisma.JsonValue
      base_game_id: number | null
      is_multiplayer: boolean
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type gamesGetPayload<S extends boolean | null | undefined | gamesDefaultArgs> = $Result.GetResult<Prisma.$gamesPayload, S>

  type gamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface gamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['games'], meta: { name: 'games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {gamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gamesFindUniqueArgs>(args: SelectSubset<T, gamesFindUniqueArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gamesFindUniqueOrThrowArgs>(args: SelectSubset<T, gamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gamesFindFirstArgs>(args?: SelectSubset<T, gamesFindFirstArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gamesFindFirstOrThrowArgs>(args?: SelectSubset<T, gamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gamesFindManyArgs>(args?: SelectSubset<T, gamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {gamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends gamesCreateArgs>(args: SelectSubset<T, gamesCreateArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {gamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gamesCreateManyArgs>(args?: SelectSubset<T, gamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {gamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gamesCreateManyAndReturnArgs>(args?: SelectSubset<T, gamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Games.
     * @param {gamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends gamesDeleteArgs>(args: SelectSubset<T, gamesDeleteArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {gamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gamesUpdateArgs>(args: SelectSubset<T, gamesUpdateArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {gamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gamesDeleteManyArgs>(args?: SelectSubset<T, gamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gamesUpdateManyArgs>(args: SelectSubset<T, gamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {gamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends gamesUpdateManyAndReturnArgs>(args: SelectSubset<T, gamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Games.
     * @param {gamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends gamesUpsertArgs>(args: SelectSubset<T, gamesUpsertArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gamesCountArgs>(
      args?: Subset<T, gamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gamesGroupByArgs['orderBy'] }
        : { orderBy?: gamesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the games model
   */
  readonly fields: gamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievements<T extends games$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, games$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends games$eventsArgs<ExtArgs> = {}>(args?: Subset<T, games$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game_dev_connection<T extends games$game_dev_connectionArgs<ExtArgs> = {}>(args?: Subset<T, games$game_dev_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_dev_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game_news<T extends games$game_newsArgs<ExtArgs> = {}>(args?: Subset<T, games$game_newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_newsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game_tag_connection<T extends games$game_tag_connectionArgs<ExtArgs> = {}>(args?: Subset<T, games$game_tag_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games<T extends games$gamesArgs<ExtArgs> = {}>(args?: Subset<T, games$gamesArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_games<T extends games$other_gamesArgs<ExtArgs> = {}>(args?: Subset<T, games$other_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libraries<T extends games$librariesArgs<ExtArgs> = {}>(args?: Subset<T, games$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends games$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, games$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends games$savesArgs<ExtArgs> = {}>(args?: Subset<T, games$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the games model
   */
  interface gamesFieldRefs {
    readonly id: FieldRef<"games", 'Int'>
    readonly title: FieldRef<"games", 'String'>
    readonly price: FieldRef<"games", 'Decimal'>
    readonly release_date: FieldRef<"games", 'DateTime'>
    readonly age_rating: FieldRef<"games", 'String'>
    readonly cover: FieldRef<"games", 'String'>
    readonly description: FieldRef<"games", 'String'>
    readonly system_requirements: FieldRef<"games", 'Json'>
    readonly base_game_id: FieldRef<"games", 'Int'>
    readonly is_multiplayer: FieldRef<"games", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * games findUnique
   */
  export type gamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games findUniqueOrThrow
   */
  export type gamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games findFirst
   */
  export type gamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games findFirstOrThrow
   */
  export type gamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games findMany
   */
  export type gamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games create
   */
  export type gamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The data needed to create a games.
     */
    data: XOR<gamesCreateInput, gamesUncheckedCreateInput>
  }

  /**
   * games createMany
   */
  export type gamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gamesCreateManyInput | gamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * games createManyAndReturn
   */
  export type gamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * The data used to create many games.
     */
    data: gamesCreateManyInput | gamesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * games update
   */
  export type gamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The data needed to update a games.
     */
    data: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
    /**
     * Choose, which games to update.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games updateMany
   */
  export type gamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gamesWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * games updateManyAndReturn
   */
  export type gamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * The data used to update games.
     */
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gamesWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * games upsert
   */
  export type gamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The filter to search for the games to update in case it exists.
     */
    where: gamesWhereUniqueInput
    /**
     * In case the games found by the `where` argument doesn't exist, create a new games with this data.
     */
    create: XOR<gamesCreateInput, gamesUncheckedCreateInput>
    /**
     * In case the games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
  }

  /**
   * games delete
   */
  export type gamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter which games to delete.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games deleteMany
   */
  export type gamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gamesWhereInput
    /**
     * Limit how many games to delete.
     */
    limit?: number
  }

  /**
   * games.achievements
   */
  export type games$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    where?: achievementsWhereInput
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    cursor?: achievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * games.events
   */
  export type games$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * games.game_dev_connection
   */
  export type games$game_dev_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_dev_connection
     */
    select?: game_dev_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_dev_connection
     */
    omit?: game_dev_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_dev_connectionInclude<ExtArgs> | null
    where?: game_dev_connectionWhereInput
    orderBy?: game_dev_connectionOrderByWithRelationInput | game_dev_connectionOrderByWithRelationInput[]
    cursor?: game_dev_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_dev_connectionScalarFieldEnum | Game_dev_connectionScalarFieldEnum[]
  }

  /**
   * games.game_news
   */
  export type games$game_newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_news
     */
    select?: game_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_news
     */
    omit?: game_newsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_newsInclude<ExtArgs> | null
    where?: game_newsWhereInput
    orderBy?: game_newsOrderByWithRelationInput | game_newsOrderByWithRelationInput[]
    cursor?: game_newsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_newsScalarFieldEnum | Game_newsScalarFieldEnum[]
  }

  /**
   * games.game_tag_connection
   */
  export type games$game_tag_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    where?: game_tag_connectionWhereInput
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    cursor?: game_tag_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_tag_connectionScalarFieldEnum | Game_tag_connectionScalarFieldEnum[]
  }

  /**
   * games.games
   */
  export type games$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    where?: gamesWhereInput
  }

  /**
   * games.other_games
   */
  export type games$other_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    cursor?: gamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games.libraries
   */
  export type games$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    where?: librariesWhereInput
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    cursor?: librariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * games.reviews
   */
  export type games$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * games.saves
   */
  export type games$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    where?: savesWhereInput
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    cursor?: savesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavesScalarFieldEnum | SavesScalarFieldEnum[]
  }

  /**
   * games without action
   */
  export type gamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
  }


  /**
   * Model libraries
   */

  export type AggregateLibraries = {
    _count: LibrariesCountAggregateOutputType | null
    _avg: LibrariesAvgAggregateOutputType | null
    _sum: LibrariesSumAggregateOutputType | null
    _min: LibrariesMinAggregateOutputType | null
    _max: LibrariesMaxAggregateOutputType | null
  }

  export type LibrariesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    hours_played: number | null
  }

  export type LibrariesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    hours_played: number | null
  }

  export type LibrariesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    hours_played: number | null
    ownership: $Enums.own_type | null
    download_status: $Enums.download_type | null
  }

  export type LibrariesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    hours_played: number | null
    ownership: $Enums.own_type | null
    download_status: $Enums.download_type | null
  }

  export type LibrariesCountAggregateOutputType = {
    id: number
    user_id: number
    game_id: number
    hours_played: number
    ownership: number
    download_status: number
    _all: number
  }


  export type LibrariesAvgAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    hours_played?: true
  }

  export type LibrariesSumAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    hours_played?: true
  }

  export type LibrariesMinAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    hours_played?: true
    ownership?: true
    download_status?: true
  }

  export type LibrariesMaxAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    hours_played?: true
    ownership?: true
    download_status?: true
  }

  export type LibrariesCountAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    hours_played?: true
    ownership?: true
    download_status?: true
    _all?: true
  }

  export type LibrariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libraries to aggregate.
     */
    where?: librariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libraries to fetch.
     */
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: librariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned libraries
    **/
    _count?: true | LibrariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibrariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibrariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibrariesMaxAggregateInputType
  }

  export type GetLibrariesAggregateType<T extends LibrariesAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraries[P]>
      : GetScalarType<T[P], AggregateLibraries[P]>
  }




  export type librariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librariesWhereInput
    orderBy?: librariesOrderByWithAggregationInput | librariesOrderByWithAggregationInput[]
    by: LibrariesScalarFieldEnum[] | LibrariesScalarFieldEnum
    having?: librariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibrariesCountAggregateInputType | true
    _avg?: LibrariesAvgAggregateInputType
    _sum?: LibrariesSumAggregateInputType
    _min?: LibrariesMinAggregateInputType
    _max?: LibrariesMaxAggregateInputType
  }

  export type LibrariesGroupByOutputType = {
    id: number
    user_id: number
    game_id: number
    hours_played: number
    ownership: $Enums.own_type
    download_status: $Enums.download_type | null
    _count: LibrariesCountAggregateOutputType | null
    _avg: LibrariesAvgAggregateOutputType | null
    _sum: LibrariesSumAggregateOutputType | null
    _min: LibrariesMinAggregateOutputType | null
    _max: LibrariesMaxAggregateOutputType | null
  }

  type GetLibrariesGroupByPayload<T extends librariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibrariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrariesGroupByOutputType[P]>
            : GetScalarType<T[P], LibrariesGroupByOutputType[P]>
        }
      >
    >


  export type librariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    hours_played?: boolean
    ownership?: boolean
    download_status?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraries"]>

  export type librariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    hours_played?: boolean
    ownership?: boolean
    download_status?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraries"]>

  export type librariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    hours_played?: boolean
    ownership?: boolean
    download_status?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraries"]>

  export type librariesSelectScalar = {
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    hours_played?: boolean
    ownership?: boolean
    download_status?: boolean
  }

  export type librariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "game_id" | "hours_played" | "ownership" | "download_status", ExtArgs["result"]["libraries"]>
  export type librariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type librariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type librariesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $librariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "libraries"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      game_id: number
      hours_played: number
      ownership: $Enums.own_type
      download_status: $Enums.download_type | null
    }, ExtArgs["result"]["libraries"]>
    composites: {}
  }

  type librariesGetPayload<S extends boolean | null | undefined | librariesDefaultArgs> = $Result.GetResult<Prisma.$librariesPayload, S>

  type librariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<librariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibrariesCountAggregateInputType | true
    }

  export interface librariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['libraries'], meta: { name: 'libraries' } }
    /**
     * Find zero or one Libraries that matches the filter.
     * @param {librariesFindUniqueArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends librariesFindUniqueArgs>(args: SelectSubset<T, librariesFindUniqueArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libraries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {librariesFindUniqueOrThrowArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends librariesFindUniqueOrThrowArgs>(args: SelectSubset<T, librariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesFindFirstArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends librariesFindFirstArgs>(args?: SelectSubset<T, librariesFindFirstArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libraries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesFindFirstOrThrowArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends librariesFindFirstOrThrowArgs>(args?: SelectSubset<T, librariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.libraries.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.libraries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const librariesWithIdOnly = await prisma.libraries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends librariesFindManyArgs>(args?: SelectSubset<T, librariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libraries.
     * @param {librariesCreateArgs} args - Arguments to create a Libraries.
     * @example
     * // Create one Libraries
     * const Libraries = await prisma.libraries.create({
     *   data: {
     *     // ... data to create a Libraries
     *   }
     * })
     * 
     */
    create<T extends librariesCreateArgs>(args: SelectSubset<T, librariesCreateArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {librariesCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const libraries = await prisma.libraries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends librariesCreateManyArgs>(args?: SelectSubset<T, librariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {librariesCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const libraries = await prisma.libraries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const librariesWithIdOnly = await prisma.libraries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends librariesCreateManyAndReturnArgs>(args?: SelectSubset<T, librariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libraries.
     * @param {librariesDeleteArgs} args - Arguments to delete one Libraries.
     * @example
     * // Delete one Libraries
     * const Libraries = await prisma.libraries.delete({
     *   where: {
     *     // ... filter to delete one Libraries
     *   }
     * })
     * 
     */
    delete<T extends librariesDeleteArgs>(args: SelectSubset<T, librariesDeleteArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libraries.
     * @param {librariesUpdateArgs} args - Arguments to update one Libraries.
     * @example
     * // Update one Libraries
     * const libraries = await prisma.libraries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends librariesUpdateArgs>(args: SelectSubset<T, librariesUpdateArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {librariesDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.libraries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends librariesDeleteManyArgs>(args?: SelectSubset<T, librariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const libraries = await prisma.libraries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends librariesUpdateManyArgs>(args: SelectSubset<T, librariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {librariesUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const libraries = await prisma.libraries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const librariesWithIdOnly = await prisma.libraries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends librariesUpdateManyAndReturnArgs>(args: SelectSubset<T, librariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libraries.
     * @param {librariesUpsertArgs} args - Arguments to update or create a Libraries.
     * @example
     * // Update or create a Libraries
     * const libraries = await prisma.libraries.upsert({
     *   create: {
     *     // ... data to create a Libraries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libraries we want to update
     *   }
     * })
     */
    upsert<T extends librariesUpsertArgs>(args: SelectSubset<T, librariesUpsertArgs<ExtArgs>>): Prisma__librariesClient<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.libraries.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends librariesCountArgs>(
      args?: Subset<T, librariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibrariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibrariesAggregateArgs>(args: Subset<T, LibrariesAggregateArgs>): Prisma.PrismaPromise<GetLibrariesAggregateType<T>>

    /**
     * Group by Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librariesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends librariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: librariesGroupByArgs['orderBy'] }
        : { orderBy?: librariesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, librariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibrariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the libraries model
   */
  readonly fields: librariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for libraries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__librariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the libraries model
   */
  interface librariesFieldRefs {
    readonly id: FieldRef<"libraries", 'Int'>
    readonly user_id: FieldRef<"libraries", 'Int'>
    readonly game_id: FieldRef<"libraries", 'Int'>
    readonly hours_played: FieldRef<"libraries", 'Int'>
    readonly ownership: FieldRef<"libraries", 'own_type'>
    readonly download_status: FieldRef<"libraries", 'download_type'>
  }
    

  // Custom InputTypes
  /**
   * libraries findUnique
   */
  export type librariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter, which libraries to fetch.
     */
    where: librariesWhereUniqueInput
  }

  /**
   * libraries findUniqueOrThrow
   */
  export type librariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter, which libraries to fetch.
     */
    where: librariesWhereUniqueInput
  }

  /**
   * libraries findFirst
   */
  export type librariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter, which libraries to fetch.
     */
    where?: librariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libraries to fetch.
     */
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libraries.
     */
    cursor?: librariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libraries.
     */
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * libraries findFirstOrThrow
   */
  export type librariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter, which libraries to fetch.
     */
    where?: librariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libraries to fetch.
     */
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libraries.
     */
    cursor?: librariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libraries.
     */
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * libraries findMany
   */
  export type librariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter, which libraries to fetch.
     */
    where?: librariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libraries to fetch.
     */
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing libraries.
     */
    cursor?: librariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libraries.
     */
    skip?: number
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * libraries create
   */
  export type librariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * The data needed to create a libraries.
     */
    data: XOR<librariesCreateInput, librariesUncheckedCreateInput>
  }

  /**
   * libraries createMany
   */
  export type librariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many libraries.
     */
    data: librariesCreateManyInput | librariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * libraries createManyAndReturn
   */
  export type librariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * The data used to create many libraries.
     */
    data: librariesCreateManyInput | librariesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * libraries update
   */
  export type librariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * The data needed to update a libraries.
     */
    data: XOR<librariesUpdateInput, librariesUncheckedUpdateInput>
    /**
     * Choose, which libraries to update.
     */
    where: librariesWhereUniqueInput
  }

  /**
   * libraries updateMany
   */
  export type librariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update libraries.
     */
    data: XOR<librariesUpdateManyMutationInput, librariesUncheckedUpdateManyInput>
    /**
     * Filter which libraries to update
     */
    where?: librariesWhereInput
    /**
     * Limit how many libraries to update.
     */
    limit?: number
  }

  /**
   * libraries updateManyAndReturn
   */
  export type librariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * The data used to update libraries.
     */
    data: XOR<librariesUpdateManyMutationInput, librariesUncheckedUpdateManyInput>
    /**
     * Filter which libraries to update
     */
    where?: librariesWhereInput
    /**
     * Limit how many libraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * libraries upsert
   */
  export type librariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * The filter to search for the libraries to update in case it exists.
     */
    where: librariesWhereUniqueInput
    /**
     * In case the libraries found by the `where` argument doesn't exist, create a new libraries with this data.
     */
    create: XOR<librariesCreateInput, librariesUncheckedCreateInput>
    /**
     * In case the libraries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<librariesUpdateInput, librariesUncheckedUpdateInput>
  }

  /**
   * libraries delete
   */
  export type librariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    /**
     * Filter which libraries to delete.
     */
    where: librariesWhereUniqueInput
  }

  /**
   * libraries deleteMany
   */
  export type librariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libraries to delete
     */
    where?: librariesWhereInput
    /**
     * Limit how many libraries to delete.
     */
    limit?: number
  }

  /**
   * libraries without action
   */
  export type librariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    rating: number | null
    content: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    rating: number | null
    content: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    game_id: number
    rating: number
    content: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    rating?: true
    content?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    rating?: true
    content?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    rating?: true
    content?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    user_id: number
    game_id: number
    rating: number
    content: string | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    rating?: boolean
    content?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    rating?: boolean
    content?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    rating?: boolean
    content?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    rating?: boolean
    content?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "game_id" | "rating" | "content", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      game_id: number
      rating: number
      content: string | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly game_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly content: FieldRef<"reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model saves
   */

  export type AggregateSaves = {
    _count: SavesCountAggregateOutputType | null
    _avg: SavesAvgAggregateOutputType | null
    _sum: SavesSumAggregateOutputType | null
    _min: SavesMinAggregateOutputType | null
    _max: SavesMaxAggregateOutputType | null
  }

  export type SavesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
  }

  export type SavesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
  }

  export type SavesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    last_updated: Date | null
  }

  export type SavesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    game_id: number | null
    last_updated: Date | null
  }

  export type SavesCountAggregateOutputType = {
    id: number
    user_id: number
    game_id: number
    save_data: number
    last_updated: number
    _all: number
  }


  export type SavesAvgAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
  }

  export type SavesSumAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
  }

  export type SavesMinAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    last_updated?: true
  }

  export type SavesMaxAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    last_updated?: true
  }

  export type SavesCountAggregateInputType = {
    id?: true
    user_id?: true
    game_id?: true
    save_data?: true
    last_updated?: true
    _all?: true
  }

  export type SavesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saves to aggregate.
     */
    where?: savesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: savesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saves
    **/
    _count?: true | SavesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavesMaxAggregateInputType
  }

  export type GetSavesAggregateType<T extends SavesAggregateArgs> = {
        [P in keyof T & keyof AggregateSaves]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaves[P]>
      : GetScalarType<T[P], AggregateSaves[P]>
  }




  export type savesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savesWhereInput
    orderBy?: savesOrderByWithAggregationInput | savesOrderByWithAggregationInput[]
    by: SavesScalarFieldEnum[] | SavesScalarFieldEnum
    having?: savesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavesCountAggregateInputType | true
    _avg?: SavesAvgAggregateInputType
    _sum?: SavesSumAggregateInputType
    _min?: SavesMinAggregateInputType
    _max?: SavesMaxAggregateInputType
  }

  export type SavesGroupByOutputType = {
    id: number
    user_id: number
    game_id: number
    save_data: JsonValue
    last_updated: Date
    _count: SavesCountAggregateOutputType | null
    _avg: SavesAvgAggregateOutputType | null
    _sum: SavesSumAggregateOutputType | null
    _min: SavesMinAggregateOutputType | null
    _max: SavesMaxAggregateOutputType | null
  }

  type GetSavesGroupByPayload<T extends savesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavesGroupByOutputType[P]>
            : GetScalarType<T[P], SavesGroupByOutputType[P]>
        }
      >
    >


  export type savesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    save_data?: boolean
    last_updated?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saves"]>

  export type savesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    save_data?: boolean
    last_updated?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saves"]>

  export type savesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    save_data?: boolean
    last_updated?: boolean
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saves"]>

  export type savesSelectScalar = {
    id?: boolean
    user_id?: boolean
    game_id?: boolean
    save_data?: boolean
    last_updated?: boolean
  }

  export type savesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "game_id" | "save_data" | "last_updated", ExtArgs["result"]["saves"]>
  export type savesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type savesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type savesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | gamesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $savesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saves"
    objects: {
      games: Prisma.$gamesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      game_id: number
      save_data: Prisma.JsonValue
      last_updated: Date
    }, ExtArgs["result"]["saves"]>
    composites: {}
  }

  type savesGetPayload<S extends boolean | null | undefined | savesDefaultArgs> = $Result.GetResult<Prisma.$savesPayload, S>

  type savesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<savesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavesCountAggregateInputType | true
    }

  export interface savesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saves'], meta: { name: 'saves' } }
    /**
     * Find zero or one Saves that matches the filter.
     * @param {savesFindUniqueArgs} args - Arguments to find a Saves
     * @example
     * // Get one Saves
     * const saves = await prisma.saves.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends savesFindUniqueArgs>(args: SelectSubset<T, savesFindUniqueArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saves that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {savesFindUniqueOrThrowArgs} args - Arguments to find a Saves
     * @example
     * // Get one Saves
     * const saves = await prisma.saves.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends savesFindUniqueOrThrowArgs>(args: SelectSubset<T, savesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesFindFirstArgs} args - Arguments to find a Saves
     * @example
     * // Get one Saves
     * const saves = await prisma.saves.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends savesFindFirstArgs>(args?: SelectSubset<T, savesFindFirstArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saves that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesFindFirstOrThrowArgs} args - Arguments to find a Saves
     * @example
     * // Get one Saves
     * const saves = await prisma.saves.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends savesFindFirstOrThrowArgs>(args?: SelectSubset<T, savesFindFirstOrThrowArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saves
     * const saves = await prisma.saves.findMany()
     * 
     * // Get first 10 Saves
     * const saves = await prisma.saves.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savesWithIdOnly = await prisma.saves.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends savesFindManyArgs>(args?: SelectSubset<T, savesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saves.
     * @param {savesCreateArgs} args - Arguments to create a Saves.
     * @example
     * // Create one Saves
     * const Saves = await prisma.saves.create({
     *   data: {
     *     // ... data to create a Saves
     *   }
     * })
     * 
     */
    create<T extends savesCreateArgs>(args: SelectSubset<T, savesCreateArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saves.
     * @param {savesCreateManyArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const saves = await prisma.saves.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends savesCreateManyArgs>(args?: SelectSubset<T, savesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saves and returns the data saved in the database.
     * @param {savesCreateManyAndReturnArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const saves = await prisma.saves.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saves and only return the `id`
     * const savesWithIdOnly = await prisma.saves.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends savesCreateManyAndReturnArgs>(args?: SelectSubset<T, savesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saves.
     * @param {savesDeleteArgs} args - Arguments to delete one Saves.
     * @example
     * // Delete one Saves
     * const Saves = await prisma.saves.delete({
     *   where: {
     *     // ... filter to delete one Saves
     *   }
     * })
     * 
     */
    delete<T extends savesDeleteArgs>(args: SelectSubset<T, savesDeleteArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saves.
     * @param {savesUpdateArgs} args - Arguments to update one Saves.
     * @example
     * // Update one Saves
     * const saves = await prisma.saves.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends savesUpdateArgs>(args: SelectSubset<T, savesUpdateArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saves.
     * @param {savesDeleteManyArgs} args - Arguments to filter Saves to delete.
     * @example
     * // Delete a few Saves
     * const { count } = await prisma.saves.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends savesDeleteManyArgs>(args?: SelectSubset<T, savesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saves
     * const saves = await prisma.saves.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends savesUpdateManyArgs>(args: SelectSubset<T, savesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves and returns the data updated in the database.
     * @param {savesUpdateManyAndReturnArgs} args - Arguments to update many Saves.
     * @example
     * // Update many Saves
     * const saves = await prisma.saves.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saves and only return the `id`
     * const savesWithIdOnly = await prisma.saves.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends savesUpdateManyAndReturnArgs>(args: SelectSubset<T, savesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saves.
     * @param {savesUpsertArgs} args - Arguments to update or create a Saves.
     * @example
     * // Update or create a Saves
     * const saves = await prisma.saves.upsert({
     *   create: {
     *     // ... data to create a Saves
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saves we want to update
     *   }
     * })
     */
    upsert<T extends savesUpsertArgs>(args: SelectSubset<T, savesUpsertArgs<ExtArgs>>): Prisma__savesClient<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesCountArgs} args - Arguments to filter Saves to count.
     * @example
     * // Count the number of Saves
     * const count = await prisma.saves.count({
     *   where: {
     *     // ... the filter for the Saves we want to count
     *   }
     * })
    **/
    count<T extends savesCountArgs>(
      args?: Subset<T, savesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavesAggregateArgs>(args: Subset<T, SavesAggregateArgs>): Prisma.PrismaPromise<GetSavesAggregateType<T>>

    /**
     * Group by Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends savesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: savesGroupByArgs['orderBy'] }
        : { orderBy?: savesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, savesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saves model
   */
  readonly fields: savesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saves.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__savesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends gamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gamesDefaultArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saves model
   */
  interface savesFieldRefs {
    readonly id: FieldRef<"saves", 'Int'>
    readonly user_id: FieldRef<"saves", 'Int'>
    readonly game_id: FieldRef<"saves", 'Int'>
    readonly save_data: FieldRef<"saves", 'Json'>
    readonly last_updated: FieldRef<"saves", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saves findUnique
   */
  export type savesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where: savesWhereUniqueInput
  }

  /**
   * saves findUniqueOrThrow
   */
  export type savesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where: savesWhereUniqueInput
  }

  /**
   * saves findFirst
   */
  export type savesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where?: savesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saves.
     */
    cursor?: savesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saves.
     */
    distinct?: SavesScalarFieldEnum | SavesScalarFieldEnum[]
  }

  /**
   * saves findFirstOrThrow
   */
  export type savesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where?: savesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saves.
     */
    cursor?: savesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saves.
     */
    distinct?: SavesScalarFieldEnum | SavesScalarFieldEnum[]
  }

  /**
   * saves findMany
   */
  export type savesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where?: savesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saves.
     */
    cursor?: savesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    distinct?: SavesScalarFieldEnum | SavesScalarFieldEnum[]
  }

  /**
   * saves create
   */
  export type savesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * The data needed to create a saves.
     */
    data: XOR<savesCreateInput, savesUncheckedCreateInput>
  }

  /**
   * saves createMany
   */
  export type savesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saves.
     */
    data: savesCreateManyInput | savesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saves createManyAndReturn
   */
  export type savesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * The data used to create many saves.
     */
    data: savesCreateManyInput | savesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saves update
   */
  export type savesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * The data needed to update a saves.
     */
    data: XOR<savesUpdateInput, savesUncheckedUpdateInput>
    /**
     * Choose, which saves to update.
     */
    where: savesWhereUniqueInput
  }

  /**
   * saves updateMany
   */
  export type savesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saves.
     */
    data: XOR<savesUpdateManyMutationInput, savesUncheckedUpdateManyInput>
    /**
     * Filter which saves to update
     */
    where?: savesWhereInput
    /**
     * Limit how many saves to update.
     */
    limit?: number
  }

  /**
   * saves updateManyAndReturn
   */
  export type savesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * The data used to update saves.
     */
    data: XOR<savesUpdateManyMutationInput, savesUncheckedUpdateManyInput>
    /**
     * Filter which saves to update
     */
    where?: savesWhereInput
    /**
     * Limit how many saves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saves upsert
   */
  export type savesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * The filter to search for the saves to update in case it exists.
     */
    where: savesWhereUniqueInput
    /**
     * In case the saves found by the `where` argument doesn't exist, create a new saves with this data.
     */
    create: XOR<savesCreateInput, savesUncheckedCreateInput>
    /**
     * In case the saves was found with the provided `where` argument, update it with this data.
     */
    update: XOR<savesUpdateInput, savesUncheckedUpdateInput>
  }

  /**
   * saves delete
   */
  export type savesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    /**
     * Filter which saves to delete.
     */
    where: savesWhereUniqueInput
  }

  /**
   * saves deleteMany
   */
  export type savesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saves to delete
     */
    where?: savesWhereInput
    /**
     * Limit how many saves to delete.
     */
    limit?: number
  }

  /**
   * saves without action
   */
  export type savesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    tag_name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    tag_name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    tag_name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    tag_name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    tag_name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    tag_name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    tag_name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
    game_tag_connection?: boolean | tags$game_tag_connectionArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    tag_name?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag_name", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_tag_connection?: boolean | tags$game_tag_connectionArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      game_tag_connection: Prisma.$game_tag_connectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag_name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game_tag_connection<T extends tags$game_tag_connectionArgs<ExtArgs> = {}>(args?: Subset<T, tags$game_tag_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_tag_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'Int'>
    readonly tag_name: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.game_tag_connection
   */
  export type tags$game_tag_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_tag_connection
     */
    select?: game_tag_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game_tag_connection
     */
    omit?: game_tag_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: game_tag_connectionInclude<ExtArgs> | null
    where?: game_tag_connectionWhereInput
    orderBy?: game_tag_connectionOrderByWithRelationInput | game_tag_connectionOrderByWithRelationInput[]
    cursor?: game_tag_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Game_tag_connectionScalarFieldEnum | Game_tag_connectionScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model user_achieve_connection
   */

  export type AggregateUser_achieve_connection = {
    _count: User_achieve_connectionCountAggregateOutputType | null
    _avg: User_achieve_connectionAvgAggregateOutputType | null
    _sum: User_achieve_connectionSumAggregateOutputType | null
    _min: User_achieve_connectionMinAggregateOutputType | null
    _max: User_achieve_connectionMaxAggregateOutputType | null
  }

  export type User_achieve_connectionAvgAggregateOutputType = {
    user_id: number | null
    achievement_id: number | null
  }

  export type User_achieve_connectionSumAggregateOutputType = {
    user_id: number | null
    achievement_id: number | null
  }

  export type User_achieve_connectionMinAggregateOutputType = {
    user_id: number | null
    achievement_id: number | null
  }

  export type User_achieve_connectionMaxAggregateOutputType = {
    user_id: number | null
    achievement_id: number | null
  }

  export type User_achieve_connectionCountAggregateOutputType = {
    user_id: number
    achievement_id: number
    _all: number
  }


  export type User_achieve_connectionAvgAggregateInputType = {
    user_id?: true
    achievement_id?: true
  }

  export type User_achieve_connectionSumAggregateInputType = {
    user_id?: true
    achievement_id?: true
  }

  export type User_achieve_connectionMinAggregateInputType = {
    user_id?: true
    achievement_id?: true
  }

  export type User_achieve_connectionMaxAggregateInputType = {
    user_id?: true
    achievement_id?: true
  }

  export type User_achieve_connectionCountAggregateInputType = {
    user_id?: true
    achievement_id?: true
    _all?: true
  }

  export type User_achieve_connectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_achieve_connection to aggregate.
     */
    where?: user_achieve_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_achieve_connections to fetch.
     */
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_achieve_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_achieve_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_achieve_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_achieve_connections
    **/
    _count?: true | User_achieve_connectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_achieve_connectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_achieve_connectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_achieve_connectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_achieve_connectionMaxAggregateInputType
  }

  export type GetUser_achieve_connectionAggregateType<T extends User_achieve_connectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_achieve_connection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_achieve_connection[P]>
      : GetScalarType<T[P], AggregateUser_achieve_connection[P]>
  }




  export type user_achieve_connectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_achieve_connectionWhereInput
    orderBy?: user_achieve_connectionOrderByWithAggregationInput | user_achieve_connectionOrderByWithAggregationInput[]
    by: User_achieve_connectionScalarFieldEnum[] | User_achieve_connectionScalarFieldEnum
    having?: user_achieve_connectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_achieve_connectionCountAggregateInputType | true
    _avg?: User_achieve_connectionAvgAggregateInputType
    _sum?: User_achieve_connectionSumAggregateInputType
    _min?: User_achieve_connectionMinAggregateInputType
    _max?: User_achieve_connectionMaxAggregateInputType
  }

  export type User_achieve_connectionGroupByOutputType = {
    user_id: number
    achievement_id: number
    _count: User_achieve_connectionCountAggregateOutputType | null
    _avg: User_achieve_connectionAvgAggregateOutputType | null
    _sum: User_achieve_connectionSumAggregateOutputType | null
    _min: User_achieve_connectionMinAggregateOutputType | null
    _max: User_achieve_connectionMaxAggregateOutputType | null
  }

  type GetUser_achieve_connectionGroupByPayload<T extends user_achieve_connectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_achieve_connectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_achieve_connectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_achieve_connectionGroupByOutputType[P]>
            : GetScalarType<T[P], User_achieve_connectionGroupByOutputType[P]>
        }
      >
    >


  export type user_achieve_connectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    achievement_id?: boolean
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_achieve_connection"]>

  export type user_achieve_connectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    achievement_id?: boolean
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_achieve_connection"]>

  export type user_achieve_connectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    achievement_id?: boolean
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_achieve_connection"]>

  export type user_achieve_connectionSelectScalar = {
    user_id?: boolean
    achievement_id?: boolean
  }

  export type user_achieve_connectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "achievement_id", ExtArgs["result"]["user_achieve_connection"]>
  export type user_achieve_connectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_achieve_connectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_achieve_connectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | achievementsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_achieve_connectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_achieve_connection"
    objects: {
      achievements: Prisma.$achievementsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      achievement_id: number
    }, ExtArgs["result"]["user_achieve_connection"]>
    composites: {}
  }

  type user_achieve_connectionGetPayload<S extends boolean | null | undefined | user_achieve_connectionDefaultArgs> = $Result.GetResult<Prisma.$user_achieve_connectionPayload, S>

  type user_achieve_connectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_achieve_connectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_achieve_connectionCountAggregateInputType | true
    }

  export interface user_achieve_connectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_achieve_connection'], meta: { name: 'user_achieve_connection' } }
    /**
     * Find zero or one User_achieve_connection that matches the filter.
     * @param {user_achieve_connectionFindUniqueArgs} args - Arguments to find a User_achieve_connection
     * @example
     * // Get one User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_achieve_connectionFindUniqueArgs>(args: SelectSubset<T, user_achieve_connectionFindUniqueArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_achieve_connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_achieve_connectionFindUniqueOrThrowArgs} args - Arguments to find a User_achieve_connection
     * @example
     * // Get one User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_achieve_connectionFindUniqueOrThrowArgs>(args: SelectSubset<T, user_achieve_connectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_achieve_connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionFindFirstArgs} args - Arguments to find a User_achieve_connection
     * @example
     * // Get one User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_achieve_connectionFindFirstArgs>(args?: SelectSubset<T, user_achieve_connectionFindFirstArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_achieve_connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionFindFirstOrThrowArgs} args - Arguments to find a User_achieve_connection
     * @example
     * // Get one User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_achieve_connectionFindFirstOrThrowArgs>(args?: SelectSubset<T, user_achieve_connectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_achieve_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_achieve_connections
     * const user_achieve_connections = await prisma.user_achieve_connection.findMany()
     * 
     * // Get first 10 User_achieve_connections
     * const user_achieve_connections = await prisma.user_achieve_connection.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_achieve_connectionWithUser_idOnly = await prisma.user_achieve_connection.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_achieve_connectionFindManyArgs>(args?: SelectSubset<T, user_achieve_connectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_achieve_connection.
     * @param {user_achieve_connectionCreateArgs} args - Arguments to create a User_achieve_connection.
     * @example
     * // Create one User_achieve_connection
     * const User_achieve_connection = await prisma.user_achieve_connection.create({
     *   data: {
     *     // ... data to create a User_achieve_connection
     *   }
     * })
     * 
     */
    create<T extends user_achieve_connectionCreateArgs>(args: SelectSubset<T, user_achieve_connectionCreateArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_achieve_connections.
     * @param {user_achieve_connectionCreateManyArgs} args - Arguments to create many User_achieve_connections.
     * @example
     * // Create many User_achieve_connections
     * const user_achieve_connection = await prisma.user_achieve_connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_achieve_connectionCreateManyArgs>(args?: SelectSubset<T, user_achieve_connectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_achieve_connections and returns the data saved in the database.
     * @param {user_achieve_connectionCreateManyAndReturnArgs} args - Arguments to create many User_achieve_connections.
     * @example
     * // Create many User_achieve_connections
     * const user_achieve_connection = await prisma.user_achieve_connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_achieve_connections and only return the `user_id`
     * const user_achieve_connectionWithUser_idOnly = await prisma.user_achieve_connection.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_achieve_connectionCreateManyAndReturnArgs>(args?: SelectSubset<T, user_achieve_connectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_achieve_connection.
     * @param {user_achieve_connectionDeleteArgs} args - Arguments to delete one User_achieve_connection.
     * @example
     * // Delete one User_achieve_connection
     * const User_achieve_connection = await prisma.user_achieve_connection.delete({
     *   where: {
     *     // ... filter to delete one User_achieve_connection
     *   }
     * })
     * 
     */
    delete<T extends user_achieve_connectionDeleteArgs>(args: SelectSubset<T, user_achieve_connectionDeleteArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_achieve_connection.
     * @param {user_achieve_connectionUpdateArgs} args - Arguments to update one User_achieve_connection.
     * @example
     * // Update one User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_achieve_connectionUpdateArgs>(args: SelectSubset<T, user_achieve_connectionUpdateArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_achieve_connections.
     * @param {user_achieve_connectionDeleteManyArgs} args - Arguments to filter User_achieve_connections to delete.
     * @example
     * // Delete a few User_achieve_connections
     * const { count } = await prisma.user_achieve_connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_achieve_connectionDeleteManyArgs>(args?: SelectSubset<T, user_achieve_connectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_achieve_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_achieve_connections
     * const user_achieve_connection = await prisma.user_achieve_connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_achieve_connectionUpdateManyArgs>(args: SelectSubset<T, user_achieve_connectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_achieve_connections and returns the data updated in the database.
     * @param {user_achieve_connectionUpdateManyAndReturnArgs} args - Arguments to update many User_achieve_connections.
     * @example
     * // Update many User_achieve_connections
     * const user_achieve_connection = await prisma.user_achieve_connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_achieve_connections and only return the `user_id`
     * const user_achieve_connectionWithUser_idOnly = await prisma.user_achieve_connection.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_achieve_connectionUpdateManyAndReturnArgs>(args: SelectSubset<T, user_achieve_connectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_achieve_connection.
     * @param {user_achieve_connectionUpsertArgs} args - Arguments to update or create a User_achieve_connection.
     * @example
     * // Update or create a User_achieve_connection
     * const user_achieve_connection = await prisma.user_achieve_connection.upsert({
     *   create: {
     *     // ... data to create a User_achieve_connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_achieve_connection we want to update
     *   }
     * })
     */
    upsert<T extends user_achieve_connectionUpsertArgs>(args: SelectSubset<T, user_achieve_connectionUpsertArgs<ExtArgs>>): Prisma__user_achieve_connectionClient<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_achieve_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionCountArgs} args - Arguments to filter User_achieve_connections to count.
     * @example
     * // Count the number of User_achieve_connections
     * const count = await prisma.user_achieve_connection.count({
     *   where: {
     *     // ... the filter for the User_achieve_connections we want to count
     *   }
     * })
    **/
    count<T extends user_achieve_connectionCountArgs>(
      args?: Subset<T, user_achieve_connectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_achieve_connectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_achieve_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_achieve_connectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_achieve_connectionAggregateArgs>(args: Subset<T, User_achieve_connectionAggregateArgs>): Prisma.PrismaPromise<GetUser_achieve_connectionAggregateType<T>>

    /**
     * Group by User_achieve_connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_achieve_connectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_achieve_connectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_achieve_connectionGroupByArgs['orderBy'] }
        : { orderBy?: user_achieve_connectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_achieve_connectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_achieve_connectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_achieve_connection model
   */
  readonly fields: user_achieve_connectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_achieve_connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_achieve_connectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievements<T extends achievementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, achievementsDefaultArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_achieve_connection model
   */
  interface user_achieve_connectionFieldRefs {
    readonly user_id: FieldRef<"user_achieve_connection", 'Int'>
    readonly achievement_id: FieldRef<"user_achieve_connection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_achieve_connection findUnique
   */
  export type user_achieve_connectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter, which user_achieve_connection to fetch.
     */
    where: user_achieve_connectionWhereUniqueInput
  }

  /**
   * user_achieve_connection findUniqueOrThrow
   */
  export type user_achieve_connectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter, which user_achieve_connection to fetch.
     */
    where: user_achieve_connectionWhereUniqueInput
  }

  /**
   * user_achieve_connection findFirst
   */
  export type user_achieve_connectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter, which user_achieve_connection to fetch.
     */
    where?: user_achieve_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_achieve_connections to fetch.
     */
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_achieve_connections.
     */
    cursor?: user_achieve_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_achieve_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_achieve_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_achieve_connections.
     */
    distinct?: User_achieve_connectionScalarFieldEnum | User_achieve_connectionScalarFieldEnum[]
  }

  /**
   * user_achieve_connection findFirstOrThrow
   */
  export type user_achieve_connectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter, which user_achieve_connection to fetch.
     */
    where?: user_achieve_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_achieve_connections to fetch.
     */
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_achieve_connections.
     */
    cursor?: user_achieve_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_achieve_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_achieve_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_achieve_connections.
     */
    distinct?: User_achieve_connectionScalarFieldEnum | User_achieve_connectionScalarFieldEnum[]
  }

  /**
   * user_achieve_connection findMany
   */
  export type user_achieve_connectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter, which user_achieve_connections to fetch.
     */
    where?: user_achieve_connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_achieve_connections to fetch.
     */
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_achieve_connections.
     */
    cursor?: user_achieve_connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_achieve_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_achieve_connections.
     */
    skip?: number
    distinct?: User_achieve_connectionScalarFieldEnum | User_achieve_connectionScalarFieldEnum[]
  }

  /**
   * user_achieve_connection create
   */
  export type user_achieve_connectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * The data needed to create a user_achieve_connection.
     */
    data: XOR<user_achieve_connectionCreateInput, user_achieve_connectionUncheckedCreateInput>
  }

  /**
   * user_achieve_connection createMany
   */
  export type user_achieve_connectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_achieve_connections.
     */
    data: user_achieve_connectionCreateManyInput | user_achieve_connectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_achieve_connection createManyAndReturn
   */
  export type user_achieve_connectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * The data used to create many user_achieve_connections.
     */
    data: user_achieve_connectionCreateManyInput | user_achieve_connectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_achieve_connection update
   */
  export type user_achieve_connectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * The data needed to update a user_achieve_connection.
     */
    data: XOR<user_achieve_connectionUpdateInput, user_achieve_connectionUncheckedUpdateInput>
    /**
     * Choose, which user_achieve_connection to update.
     */
    where: user_achieve_connectionWhereUniqueInput
  }

  /**
   * user_achieve_connection updateMany
   */
  export type user_achieve_connectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_achieve_connections.
     */
    data: XOR<user_achieve_connectionUpdateManyMutationInput, user_achieve_connectionUncheckedUpdateManyInput>
    /**
     * Filter which user_achieve_connections to update
     */
    where?: user_achieve_connectionWhereInput
    /**
     * Limit how many user_achieve_connections to update.
     */
    limit?: number
  }

  /**
   * user_achieve_connection updateManyAndReturn
   */
  export type user_achieve_connectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * The data used to update user_achieve_connections.
     */
    data: XOR<user_achieve_connectionUpdateManyMutationInput, user_achieve_connectionUncheckedUpdateManyInput>
    /**
     * Filter which user_achieve_connections to update
     */
    where?: user_achieve_connectionWhereInput
    /**
     * Limit how many user_achieve_connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_achieve_connection upsert
   */
  export type user_achieve_connectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * The filter to search for the user_achieve_connection to update in case it exists.
     */
    where: user_achieve_connectionWhereUniqueInput
    /**
     * In case the user_achieve_connection found by the `where` argument doesn't exist, create a new user_achieve_connection with this data.
     */
    create: XOR<user_achieve_connectionCreateInput, user_achieve_connectionUncheckedCreateInput>
    /**
     * In case the user_achieve_connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_achieve_connectionUpdateInput, user_achieve_connectionUncheckedUpdateInput>
  }

  /**
   * user_achieve_connection delete
   */
  export type user_achieve_connectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    /**
     * Filter which user_achieve_connection to delete.
     */
    where: user_achieve_connectionWhereUniqueInput
  }

  /**
   * user_achieve_connection deleteMany
   */
  export type user_achieve_connectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_achieve_connections to delete
     */
    where?: user_achieve_connectionWhereInput
    /**
     * Limit how many user_achieve_connections to delete.
     */
    limit?: number
  }

  /**
   * user_achieve_connection without action
   */
  export type user_achieve_connectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    age: number | null
    region: string | null
    avatar: string | null
    created_at: Date | null
    last_login: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    age: number | null
    region: string | null
    avatar: string | null
    created_at: Date | null
    last_login: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    age: number
    region: number
    avatar: number
    created_at: number
    last_login: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    age?: true
    region?: true
    avatar?: true
    created_at?: true
    last_login?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    age?: true
    region?: true
    avatar?: true
    created_at?: true
    last_login?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    age?: true
    region?: true
    avatar?: true
    created_at?: true
    last_login?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar: string | null
    created_at: Date | null
    last_login: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    age?: boolean
    region?: boolean
    avatar?: boolean
    created_at?: boolean
    last_login?: boolean
    friends_friends_friend_idTousers?: boolean | users$friends_friends_friend_idTousersArgs<ExtArgs>
    friends_friends_user_idTousers?: boolean | users$friends_friends_user_idTousersArgs<ExtArgs>
    libraries?: boolean | users$librariesArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    saves?: boolean | users$savesArgs<ExtArgs>
    user_achieve_connection?: boolean | users$user_achieve_connectionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    age?: boolean
    region?: boolean
    avatar?: boolean
    created_at?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    age?: boolean
    region?: boolean
    avatar?: boolean
    created_at?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    age?: boolean
    region?: boolean
    avatar?: boolean
    created_at?: boolean
    last_login?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "age" | "region" | "avatar" | "created_at" | "last_login", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_friends_friend_idTousers?: boolean | users$friends_friends_friend_idTousersArgs<ExtArgs>
    friends_friends_user_idTousers?: boolean | users$friends_friends_user_idTousersArgs<ExtArgs>
    libraries?: boolean | users$librariesArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    saves?: boolean | users$savesArgs<ExtArgs>
    user_achieve_connection?: boolean | users$user_achieve_connectionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      friends_friends_friend_idTousers: Prisma.$friendsPayload<ExtArgs>[]
      friends_friends_user_idTousers: Prisma.$friendsPayload<ExtArgs>[]
      libraries: Prisma.$librariesPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      saves: Prisma.$savesPayload<ExtArgs>[]
      user_achieve_connection: Prisma.$user_achieve_connectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password_hash: string
      age: number
      region: string
      avatar: string | null
      created_at: Date | null
      last_login: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friends_friends_friend_idTousers<T extends users$friends_friends_friend_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friends_friends_friend_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends_friends_user_idTousers<T extends users$friends_friends_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friends_friends_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libraries<T extends users$librariesArgs<ExtArgs> = {}>(args?: Subset<T, users$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends users$savesArgs<ExtArgs> = {}>(args?: Subset<T, users$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_achieve_connection<T extends users$user_achieve_connectionArgs<ExtArgs> = {}>(args?: Subset<T, users$user_achieve_connectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_achieve_connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly region: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly last_login: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.friends_friends_friend_idTousers
   */
  export type users$friends_friends_friend_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.friends_friends_user_idTousers
   */
  export type users$friends_friends_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.libraries
   */
  export type users$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libraries
     */
    select?: librariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libraries
     */
    omit?: librariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librariesInclude<ExtArgs> | null
    where?: librariesWhereInput
    orderBy?: librariesOrderByWithRelationInput | librariesOrderByWithRelationInput[]
    cursor?: librariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.saves
   */
  export type users$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saves
     */
    select?: savesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saves
     */
    omit?: savesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savesInclude<ExtArgs> | null
    where?: savesWhereInput
    orderBy?: savesOrderByWithRelationInput | savesOrderByWithRelationInput[]
    cursor?: savesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavesScalarFieldEnum | SavesScalarFieldEnum[]
  }

  /**
   * users.user_achieve_connection
   */
  export type users$user_achieve_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_achieve_connection
     */
    select?: user_achieve_connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_achieve_connection
     */
    omit?: user_achieve_connectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_achieve_connectionInclude<ExtArgs> | null
    where?: user_achieve_connectionWhereInput
    orderBy?: user_achieve_connectionOrderByWithRelationInput | user_achieve_connectionOrderByWithRelationInput[]
    cursor?: user_achieve_connectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_achieve_connectionScalarFieldEnum | User_achieve_connectionScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    title: 'title',
    icon: 'icon'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const DevsScalarFieldEnum: {
    id: 'id',
    dev_name: 'dev_name',
    contacts: 'contacts',
    logo: 'logo',
    dev_type: 'dev_type'
  };

  export type DevsScalarFieldEnum = (typeof DevsScalarFieldEnum)[keyof typeof DevsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    discount: 'discount',
    start_date: 'start_date',
    end_date: 'end_date',
    type: 'type'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    user_id: 'user_id',
    friend_id: 'friend_id',
    status: 'status'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const Game_dev_connectionScalarFieldEnum: {
    game_id: 'game_id',
    dev_id: 'dev_id'
  };

  export type Game_dev_connectionScalarFieldEnum = (typeof Game_dev_connectionScalarFieldEnum)[keyof typeof Game_dev_connectionScalarFieldEnum]


  export const Game_newsScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    title: 'title',
    content: 'content',
    published_at: 'published_at'
  };

  export type Game_newsScalarFieldEnum = (typeof Game_newsScalarFieldEnum)[keyof typeof Game_newsScalarFieldEnum]


  export const Game_tag_connectionScalarFieldEnum: {
    game_id: 'game_id',
    tag_id: 'tag_id'
  };

  export type Game_tag_connectionScalarFieldEnum = (typeof Game_tag_connectionScalarFieldEnum)[keyof typeof Game_tag_connectionScalarFieldEnum]


  export const GamesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    release_date: 'release_date',
    age_rating: 'age_rating',
    cover: 'cover',
    description: 'description',
    system_requirements: 'system_requirements',
    base_game_id: 'base_game_id',
    is_multiplayer: 'is_multiplayer'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const LibrariesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    game_id: 'game_id',
    hours_played: 'hours_played',
    ownership: 'ownership',
    download_status: 'download_status'
  };

  export type LibrariesScalarFieldEnum = (typeof LibrariesScalarFieldEnum)[keyof typeof LibrariesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    game_id: 'game_id',
    rating: 'rating',
    content: 'content'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SavesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    game_id: 'game_id',
    save_data: 'save_data',
    last_updated: 'last_updated'
  };

  export type SavesScalarFieldEnum = (typeof SavesScalarFieldEnum)[keyof typeof SavesScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    tag_name: 'tag_name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const User_achieve_connectionScalarFieldEnum: {
    user_id: 'user_id',
    achievement_id: 'achievement_id'
  };

  export type User_achieve_connectionScalarFieldEnum = (typeof User_achieve_connectionScalarFieldEnum)[keyof typeof User_achieve_connectionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    age: 'age',
    region: 'region',
    avatar: 'avatar',
    created_at: 'created_at',
    last_login: 'last_login'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'dev_type'
   */
  export type Enumdev_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dev_type'>
    


  /**
   * Reference to a field of type 'dev_type[]'
   */
  export type ListEnumdev_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dev_type[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ev_type'
   */
  export type Enumev_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ev_type'>
    


  /**
   * Reference to a field of type 'ev_type[]'
   */
  export type ListEnumev_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ev_type[]'>
    


  /**
   * Reference to a field of type 'fr_status'
   */
  export type Enumfr_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fr_status'>
    


  /**
   * Reference to a field of type 'fr_status[]'
   */
  export type ListEnumfr_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fr_status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'own_type'
   */
  export type Enumown_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'own_type'>
    


  /**
   * Reference to a field of type 'own_type[]'
   */
  export type ListEnumown_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'own_type[]'>
    


  /**
   * Reference to a field of type 'download_type'
   */
  export type Enumdownload_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'download_type'>
    


  /**
   * Reference to a field of type 'download_type[]'
   */
  export type ListEnumdownload_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'download_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type achievementsWhereInput = {
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    id?: IntFilter<"achievements"> | number
    game_id?: IntFilter<"achievements"> | number
    title?: StringFilter<"achievements"> | string
    icon?: StringFilter<"achievements"> | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    user_achieve_connection?: User_achieve_connectionListRelationFilter
  }

  export type achievementsOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    games?: gamesOrderByWithRelationInput
    user_achieve_connection?: user_achieve_connectionOrderByRelationAggregateInput
  }

  export type achievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    game_id?: IntFilter<"achievements"> | number
    title?: StringFilter<"achievements"> | string
    icon?: StringFilter<"achievements"> | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    user_achieve_connection?: User_achieve_connectionListRelationFilter
  }, "id">

  export type achievementsOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    _count?: achievementsCountOrderByAggregateInput
    _avg?: achievementsAvgOrderByAggregateInput
    _max?: achievementsMaxOrderByAggregateInput
    _min?: achievementsMinOrderByAggregateInput
    _sum?: achievementsSumOrderByAggregateInput
  }

  export type achievementsScalarWhereWithAggregatesInput = {
    AND?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    OR?: achievementsScalarWhereWithAggregatesInput[]
    NOT?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"achievements"> | number
    game_id?: IntWithAggregatesFilter<"achievements"> | number
    title?: StringWithAggregatesFilter<"achievements"> | string
    icon?: StringWithAggregatesFilter<"achievements"> | string
  }

  export type devsWhereInput = {
    AND?: devsWhereInput | devsWhereInput[]
    OR?: devsWhereInput[]
    NOT?: devsWhereInput | devsWhereInput[]
    id?: IntFilter<"devs"> | number
    dev_name?: StringFilter<"devs"> | string
    contacts?: JsonFilter<"devs">
    logo?: StringNullableFilter<"devs"> | string | null
    dev_type?: Enumdev_typeFilter<"devs"> | $Enums.dev_type
    game_dev_connection?: Game_dev_connectionListRelationFilter
  }

  export type devsOrderByWithRelationInput = {
    id?: SortOrder
    dev_name?: SortOrder
    contacts?: SortOrder
    logo?: SortOrderInput | SortOrder
    dev_type?: SortOrder
    game_dev_connection?: game_dev_connectionOrderByRelationAggregateInput
  }

  export type devsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dev_name?: string
    AND?: devsWhereInput | devsWhereInput[]
    OR?: devsWhereInput[]
    NOT?: devsWhereInput | devsWhereInput[]
    contacts?: JsonFilter<"devs">
    logo?: StringNullableFilter<"devs"> | string | null
    dev_type?: Enumdev_typeFilter<"devs"> | $Enums.dev_type
    game_dev_connection?: Game_dev_connectionListRelationFilter
  }, "id" | "dev_name">

  export type devsOrderByWithAggregationInput = {
    id?: SortOrder
    dev_name?: SortOrder
    contacts?: SortOrder
    logo?: SortOrderInput | SortOrder
    dev_type?: SortOrder
    _count?: devsCountOrderByAggregateInput
    _avg?: devsAvgOrderByAggregateInput
    _max?: devsMaxOrderByAggregateInput
    _min?: devsMinOrderByAggregateInput
    _sum?: devsSumOrderByAggregateInput
  }

  export type devsScalarWhereWithAggregatesInput = {
    AND?: devsScalarWhereWithAggregatesInput | devsScalarWhereWithAggregatesInput[]
    OR?: devsScalarWhereWithAggregatesInput[]
    NOT?: devsScalarWhereWithAggregatesInput | devsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"devs"> | number
    dev_name?: StringWithAggregatesFilter<"devs"> | string
    contacts?: JsonWithAggregatesFilter<"devs">
    logo?: StringNullableWithAggregatesFilter<"devs"> | string | null
    dev_type?: Enumdev_typeWithAggregatesFilter<"devs"> | $Enums.dev_type
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    game_id?: IntFilter<"events"> | number
    discount?: DecimalNullableFilter<"events"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    type?: Enumev_typeFilter<"events"> | $Enums.ev_type
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
    games?: gamesOrderByWithRelationInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    game_id?: IntFilter<"events"> | number
    discount?: DecimalNullableFilter<"events"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    type?: Enumev_typeFilter<"events"> | $Enums.ev_type
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    game_id?: IntWithAggregatesFilter<"events"> | number
    discount?: DecimalNullableWithAggregatesFilter<"events"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    type?: Enumev_typeWithAggregatesFilter<"events"> | $Enums.ev_type
  }

  export type friendsWhereInput = {
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    user_id?: IntFilter<"friends"> | number
    friend_id?: IntFilter<"friends"> | number
    status?: Enumfr_statusFilter<"friends"> | $Enums.fr_status
    users_friends_friend_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friends_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type friendsOrderByWithRelationInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
    users_friends_friend_idTousers?: usersOrderByWithRelationInput
    users_friends_user_idTousers?: usersOrderByWithRelationInput
  }

  export type friendsWhereUniqueInput = Prisma.AtLeast<{
    user_id_friend_id?: friendsUser_idFriend_idCompoundUniqueInput
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    user_id?: IntFilter<"friends"> | number
    friend_id?: IntFilter<"friends"> | number
    status?: Enumfr_statusFilter<"friends"> | $Enums.fr_status
    users_friends_friend_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friends_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_friend_id">

  export type friendsOrderByWithAggregationInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
    _count?: friendsCountOrderByAggregateInput
    _avg?: friendsAvgOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
    _sum?: friendsSumOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    OR?: friendsScalarWhereWithAggregatesInput[]
    NOT?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"friends"> | number
    friend_id?: IntWithAggregatesFilter<"friends"> | number
    status?: Enumfr_statusWithAggregatesFilter<"friends"> | $Enums.fr_status
  }

  export type game_dev_connectionWhereInput = {
    AND?: game_dev_connectionWhereInput | game_dev_connectionWhereInput[]
    OR?: game_dev_connectionWhereInput[]
    NOT?: game_dev_connectionWhereInput | game_dev_connectionWhereInput[]
    game_id?: IntFilter<"game_dev_connection"> | number
    dev_id?: IntFilter<"game_dev_connection"> | number
    devs?: XOR<DevsScalarRelationFilter, devsWhereInput>
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }

  export type game_dev_connectionOrderByWithRelationInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
    devs?: devsOrderByWithRelationInput
    games?: gamesOrderByWithRelationInput
  }

  export type game_dev_connectionWhereUniqueInput = Prisma.AtLeast<{
    game_id_dev_id?: game_dev_connectionGame_idDev_idCompoundUniqueInput
    AND?: game_dev_connectionWhereInput | game_dev_connectionWhereInput[]
    OR?: game_dev_connectionWhereInput[]
    NOT?: game_dev_connectionWhereInput | game_dev_connectionWhereInput[]
    game_id?: IntFilter<"game_dev_connection"> | number
    dev_id?: IntFilter<"game_dev_connection"> | number
    devs?: XOR<DevsScalarRelationFilter, devsWhereInput>
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }, "game_id_dev_id">

  export type game_dev_connectionOrderByWithAggregationInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
    _count?: game_dev_connectionCountOrderByAggregateInput
    _avg?: game_dev_connectionAvgOrderByAggregateInput
    _max?: game_dev_connectionMaxOrderByAggregateInput
    _min?: game_dev_connectionMinOrderByAggregateInput
    _sum?: game_dev_connectionSumOrderByAggregateInput
  }

  export type game_dev_connectionScalarWhereWithAggregatesInput = {
    AND?: game_dev_connectionScalarWhereWithAggregatesInput | game_dev_connectionScalarWhereWithAggregatesInput[]
    OR?: game_dev_connectionScalarWhereWithAggregatesInput[]
    NOT?: game_dev_connectionScalarWhereWithAggregatesInput | game_dev_connectionScalarWhereWithAggregatesInput[]
    game_id?: IntWithAggregatesFilter<"game_dev_connection"> | number
    dev_id?: IntWithAggregatesFilter<"game_dev_connection"> | number
  }

  export type game_newsWhereInput = {
    AND?: game_newsWhereInput | game_newsWhereInput[]
    OR?: game_newsWhereInput[]
    NOT?: game_newsWhereInput | game_newsWhereInput[]
    id?: IntFilter<"game_news"> | number
    game_id?: IntFilter<"game_news"> | number
    title?: StringFilter<"game_news"> | string
    content?: StringFilter<"game_news"> | string
    published_at?: DateTimeFilter<"game_news"> | Date | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }

  export type game_newsOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published_at?: SortOrder
    games?: gamesOrderByWithRelationInput
  }

  export type game_newsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: game_newsWhereInput | game_newsWhereInput[]
    OR?: game_newsWhereInput[]
    NOT?: game_newsWhereInput | game_newsWhereInput[]
    game_id?: IntFilter<"game_news"> | number
    title?: StringFilter<"game_news"> | string
    content?: StringFilter<"game_news"> | string
    published_at?: DateTimeFilter<"game_news"> | Date | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
  }, "id">

  export type game_newsOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published_at?: SortOrder
    _count?: game_newsCountOrderByAggregateInput
    _avg?: game_newsAvgOrderByAggregateInput
    _max?: game_newsMaxOrderByAggregateInput
    _min?: game_newsMinOrderByAggregateInput
    _sum?: game_newsSumOrderByAggregateInput
  }

  export type game_newsScalarWhereWithAggregatesInput = {
    AND?: game_newsScalarWhereWithAggregatesInput | game_newsScalarWhereWithAggregatesInput[]
    OR?: game_newsScalarWhereWithAggregatesInput[]
    NOT?: game_newsScalarWhereWithAggregatesInput | game_newsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"game_news"> | number
    game_id?: IntWithAggregatesFilter<"game_news"> | number
    title?: StringWithAggregatesFilter<"game_news"> | string
    content?: StringWithAggregatesFilter<"game_news"> | string
    published_at?: DateTimeWithAggregatesFilter<"game_news"> | Date | string
  }

  export type game_tag_connectionWhereInput = {
    AND?: game_tag_connectionWhereInput | game_tag_connectionWhereInput[]
    OR?: game_tag_connectionWhereInput[]
    NOT?: game_tag_connectionWhereInput | game_tag_connectionWhereInput[]
    game_id?: IntFilter<"game_tag_connection"> | number
    tag_id?: IntFilter<"game_tag_connection"> | number
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type game_tag_connectionOrderByWithRelationInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
    games?: gamesOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type game_tag_connectionWhereUniqueInput = Prisma.AtLeast<{
    game_id_tag_id?: game_tag_connectionGame_idTag_idCompoundUniqueInput
    AND?: game_tag_connectionWhereInput | game_tag_connectionWhereInput[]
    OR?: game_tag_connectionWhereInput[]
    NOT?: game_tag_connectionWhereInput | game_tag_connectionWhereInput[]
    game_id?: IntFilter<"game_tag_connection"> | number
    tag_id?: IntFilter<"game_tag_connection"> | number
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "game_id_tag_id">

  export type game_tag_connectionOrderByWithAggregationInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
    _count?: game_tag_connectionCountOrderByAggregateInput
    _avg?: game_tag_connectionAvgOrderByAggregateInput
    _max?: game_tag_connectionMaxOrderByAggregateInput
    _min?: game_tag_connectionMinOrderByAggregateInput
    _sum?: game_tag_connectionSumOrderByAggregateInput
  }

  export type game_tag_connectionScalarWhereWithAggregatesInput = {
    AND?: game_tag_connectionScalarWhereWithAggregatesInput | game_tag_connectionScalarWhereWithAggregatesInput[]
    OR?: game_tag_connectionScalarWhereWithAggregatesInput[]
    NOT?: game_tag_connectionScalarWhereWithAggregatesInput | game_tag_connectionScalarWhereWithAggregatesInput[]
    game_id?: IntWithAggregatesFilter<"game_tag_connection"> | number
    tag_id?: IntWithAggregatesFilter<"game_tag_connection"> | number
  }

  export type gamesWhereInput = {
    AND?: gamesWhereInput | gamesWhereInput[]
    OR?: gamesWhereInput[]
    NOT?: gamesWhereInput | gamesWhereInput[]
    id?: IntFilter<"games"> | number
    title?: StringFilter<"games"> | string
    price?: DecimalNullableFilter<"games"> | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFilter<"games"> | Date | string
    age_rating?: StringFilter<"games"> | string
    cover?: StringFilter<"games"> | string
    description?: StringNullableFilter<"games"> | string | null
    system_requirements?: JsonFilter<"games">
    base_game_id?: IntNullableFilter<"games"> | number | null
    is_multiplayer?: BoolFilter<"games"> | boolean
    achievements?: AchievementsListRelationFilter
    events?: EventsListRelationFilter
    game_dev_connection?: Game_dev_connectionListRelationFilter
    game_news?: Game_newsListRelationFilter
    game_tag_connection?: Game_tag_connectionListRelationFilter
    games?: XOR<GamesNullableScalarRelationFilter, gamesWhereInput> | null
    other_games?: GamesListRelationFilter
    libraries?: LibrariesListRelationFilter
    reviews?: ReviewsListRelationFilter
    saves?: SavesListRelationFilter
  }

  export type gamesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrderInput | SortOrder
    release_date?: SortOrder
    age_rating?: SortOrder
    cover?: SortOrder
    description?: SortOrderInput | SortOrder
    system_requirements?: SortOrder
    base_game_id?: SortOrderInput | SortOrder
    is_multiplayer?: SortOrder
    achievements?: achievementsOrderByRelationAggregateInput
    events?: eventsOrderByRelationAggregateInput
    game_dev_connection?: game_dev_connectionOrderByRelationAggregateInput
    game_news?: game_newsOrderByRelationAggregateInput
    game_tag_connection?: game_tag_connectionOrderByRelationAggregateInput
    games?: gamesOrderByWithRelationInput
    other_games?: gamesOrderByRelationAggregateInput
    libraries?: librariesOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    saves?: savesOrderByRelationAggregateInput
  }

  export type gamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: gamesWhereInput | gamesWhereInput[]
    OR?: gamesWhereInput[]
    NOT?: gamesWhereInput | gamesWhereInput[]
    price?: DecimalNullableFilter<"games"> | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFilter<"games"> | Date | string
    age_rating?: StringFilter<"games"> | string
    cover?: StringFilter<"games"> | string
    description?: StringNullableFilter<"games"> | string | null
    system_requirements?: JsonFilter<"games">
    base_game_id?: IntNullableFilter<"games"> | number | null
    is_multiplayer?: BoolFilter<"games"> | boolean
    achievements?: AchievementsListRelationFilter
    events?: EventsListRelationFilter
    game_dev_connection?: Game_dev_connectionListRelationFilter
    game_news?: Game_newsListRelationFilter
    game_tag_connection?: Game_tag_connectionListRelationFilter
    games?: XOR<GamesNullableScalarRelationFilter, gamesWhereInput> | null
    other_games?: GamesListRelationFilter
    libraries?: LibrariesListRelationFilter
    reviews?: ReviewsListRelationFilter
    saves?: SavesListRelationFilter
  }, "id" | "title">

  export type gamesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrderInput | SortOrder
    release_date?: SortOrder
    age_rating?: SortOrder
    cover?: SortOrder
    description?: SortOrderInput | SortOrder
    system_requirements?: SortOrder
    base_game_id?: SortOrderInput | SortOrder
    is_multiplayer?: SortOrder
    _count?: gamesCountOrderByAggregateInput
    _avg?: gamesAvgOrderByAggregateInput
    _max?: gamesMaxOrderByAggregateInput
    _min?: gamesMinOrderByAggregateInput
    _sum?: gamesSumOrderByAggregateInput
  }

  export type gamesScalarWhereWithAggregatesInput = {
    AND?: gamesScalarWhereWithAggregatesInput | gamesScalarWhereWithAggregatesInput[]
    OR?: gamesScalarWhereWithAggregatesInput[]
    NOT?: gamesScalarWhereWithAggregatesInput | gamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"games"> | number
    title?: StringWithAggregatesFilter<"games"> | string
    price?: DecimalNullableWithAggregatesFilter<"games"> | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeWithAggregatesFilter<"games"> | Date | string
    age_rating?: StringWithAggregatesFilter<"games"> | string
    cover?: StringWithAggregatesFilter<"games"> | string
    description?: StringNullableWithAggregatesFilter<"games"> | string | null
    system_requirements?: JsonWithAggregatesFilter<"games">
    base_game_id?: IntNullableWithAggregatesFilter<"games"> | number | null
    is_multiplayer?: BoolWithAggregatesFilter<"games"> | boolean
  }

  export type librariesWhereInput = {
    AND?: librariesWhereInput | librariesWhereInput[]
    OR?: librariesWhereInput[]
    NOT?: librariesWhereInput | librariesWhereInput[]
    id?: IntFilter<"libraries"> | number
    user_id?: IntFilter<"libraries"> | number
    game_id?: IntFilter<"libraries"> | number
    hours_played?: IntFilter<"libraries"> | number
    ownership?: Enumown_typeFilter<"libraries"> | $Enums.own_type
    download_status?: Enumdownload_typeNullableFilter<"libraries"> | $Enums.download_type | null
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type librariesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
    ownership?: SortOrder
    download_status?: SortOrderInput | SortOrder
    games?: gamesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type librariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_game_id?: librariesUser_idGame_idCompoundUniqueInput
    AND?: librariesWhereInput | librariesWhereInput[]
    OR?: librariesWhereInput[]
    NOT?: librariesWhereInput | librariesWhereInput[]
    user_id?: IntFilter<"libraries"> | number
    game_id?: IntFilter<"libraries"> | number
    hours_played?: IntFilter<"libraries"> | number
    ownership?: Enumown_typeFilter<"libraries"> | $Enums.own_type
    download_status?: Enumdownload_typeNullableFilter<"libraries"> | $Enums.download_type | null
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_game_id">

  export type librariesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
    ownership?: SortOrder
    download_status?: SortOrderInput | SortOrder
    _count?: librariesCountOrderByAggregateInput
    _avg?: librariesAvgOrderByAggregateInput
    _max?: librariesMaxOrderByAggregateInput
    _min?: librariesMinOrderByAggregateInput
    _sum?: librariesSumOrderByAggregateInput
  }

  export type librariesScalarWhereWithAggregatesInput = {
    AND?: librariesScalarWhereWithAggregatesInput | librariesScalarWhereWithAggregatesInput[]
    OR?: librariesScalarWhereWithAggregatesInput[]
    NOT?: librariesScalarWhereWithAggregatesInput | librariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"libraries"> | number
    user_id?: IntWithAggregatesFilter<"libraries"> | number
    game_id?: IntWithAggregatesFilter<"libraries"> | number
    hours_played?: IntWithAggregatesFilter<"libraries"> | number
    ownership?: Enumown_typeWithAggregatesFilter<"libraries"> | $Enums.own_type
    download_status?: Enumdownload_typeNullableWithAggregatesFilter<"libraries"> | $Enums.download_type | null
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    game_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    content?: StringNullableFilter<"reviews"> | string | null
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    games?: gamesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_game_id?: reviewsUser_idGame_idCompoundUniqueInput
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    user_id?: IntFilter<"reviews"> | number
    game_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    content?: StringNullableFilter<"reviews"> | string | null
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_game_id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntWithAggregatesFilter<"reviews"> | number
    game_id?: IntWithAggregatesFilter<"reviews"> | number
    rating?: IntWithAggregatesFilter<"reviews"> | number
    content?: StringNullableWithAggregatesFilter<"reviews"> | string | null
  }

  export type savesWhereInput = {
    AND?: savesWhereInput | savesWhereInput[]
    OR?: savesWhereInput[]
    NOT?: savesWhereInput | savesWhereInput[]
    id?: IntFilter<"saves"> | number
    user_id?: IntFilter<"saves"> | number
    game_id?: IntFilter<"saves"> | number
    save_data?: JsonFilter<"saves">
    last_updated?: DateTimeFilter<"saves"> | Date | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type savesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    save_data?: SortOrder
    last_updated?: SortOrder
    games?: gamesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type savesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_game_id?: savesUser_idGame_idCompoundUniqueInput
    AND?: savesWhereInput | savesWhereInput[]
    OR?: savesWhereInput[]
    NOT?: savesWhereInput | savesWhereInput[]
    user_id?: IntFilter<"saves"> | number
    game_id?: IntFilter<"saves"> | number
    save_data?: JsonFilter<"saves">
    last_updated?: DateTimeFilter<"saves"> | Date | string
    games?: XOR<GamesScalarRelationFilter, gamesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_game_id">

  export type savesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    save_data?: SortOrder
    last_updated?: SortOrder
    _count?: savesCountOrderByAggregateInput
    _avg?: savesAvgOrderByAggregateInput
    _max?: savesMaxOrderByAggregateInput
    _min?: savesMinOrderByAggregateInput
    _sum?: savesSumOrderByAggregateInput
  }

  export type savesScalarWhereWithAggregatesInput = {
    AND?: savesScalarWhereWithAggregatesInput | savesScalarWhereWithAggregatesInput[]
    OR?: savesScalarWhereWithAggregatesInput[]
    NOT?: savesScalarWhereWithAggregatesInput | savesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"saves"> | number
    user_id?: IntWithAggregatesFilter<"saves"> | number
    game_id?: IntWithAggregatesFilter<"saves"> | number
    save_data?: JsonWithAggregatesFilter<"saves">
    last_updated?: DateTimeWithAggregatesFilter<"saves"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: IntFilter<"tags"> | number
    tag_name?: StringFilter<"tags"> | string
    game_tag_connection?: Game_tag_connectionListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    tag_name?: SortOrder
    game_tag_connection?: game_tag_connectionOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tag_name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    game_tag_connection?: Game_tag_connectionListRelationFilter
  }, "id" | "tag_name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    tag_name?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tags"> | number
    tag_name?: StringWithAggregatesFilter<"tags"> | string
  }

  export type user_achieve_connectionWhereInput = {
    AND?: user_achieve_connectionWhereInput | user_achieve_connectionWhereInput[]
    OR?: user_achieve_connectionWhereInput[]
    NOT?: user_achieve_connectionWhereInput | user_achieve_connectionWhereInput[]
    user_id?: IntFilter<"user_achieve_connection"> | number
    achievement_id?: IntFilter<"user_achieve_connection"> | number
    achievements?: XOR<AchievementsScalarRelationFilter, achievementsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_achieve_connectionOrderByWithRelationInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
    achievements?: achievementsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_achieve_connectionWhereUniqueInput = Prisma.AtLeast<{
    user_id_achievement_id?: user_achieve_connectionUser_idAchievement_idCompoundUniqueInput
    AND?: user_achieve_connectionWhereInput | user_achieve_connectionWhereInput[]
    OR?: user_achieve_connectionWhereInput[]
    NOT?: user_achieve_connectionWhereInput | user_achieve_connectionWhereInput[]
    user_id?: IntFilter<"user_achieve_connection"> | number
    achievement_id?: IntFilter<"user_achieve_connection"> | number
    achievements?: XOR<AchievementsScalarRelationFilter, achievementsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_achievement_id">

  export type user_achieve_connectionOrderByWithAggregationInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
    _count?: user_achieve_connectionCountOrderByAggregateInput
    _avg?: user_achieve_connectionAvgOrderByAggregateInput
    _max?: user_achieve_connectionMaxOrderByAggregateInput
    _min?: user_achieve_connectionMinOrderByAggregateInput
    _sum?: user_achieve_connectionSumOrderByAggregateInput
  }

  export type user_achieve_connectionScalarWhereWithAggregatesInput = {
    AND?: user_achieve_connectionScalarWhereWithAggregatesInput | user_achieve_connectionScalarWhereWithAggregatesInput[]
    OR?: user_achieve_connectionScalarWhereWithAggregatesInput[]
    NOT?: user_achieve_connectionScalarWhereWithAggregatesInput | user_achieve_connectionScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_achieve_connection"> | number
    achievement_id?: IntWithAggregatesFilter<"user_achieve_connection"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    region?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    friends_friends_friend_idTousers?: FriendsListRelationFilter
    friends_friends_user_idTousers?: FriendsListRelationFilter
    libraries?: LibrariesListRelationFilter
    reviews?: ReviewsListRelationFilter
    saves?: SavesListRelationFilter
    user_achieve_connection?: User_achieve_connectionListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    age?: SortOrder
    region?: SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    friends_friends_friend_idTousers?: friendsOrderByRelationAggregateInput
    friends_friends_user_idTousers?: friendsOrderByRelationAggregateInput
    libraries?: librariesOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    saves?: savesOrderByRelationAggregateInput
    user_achieve_connection?: user_achieve_connectionOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    region?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    friends_friends_friend_idTousers?: FriendsListRelationFilter
    friends_friends_user_idTousers?: FriendsListRelationFilter
    libraries?: LibrariesListRelationFilter
    reviews?: ReviewsListRelationFilter
    saves?: SavesListRelationFilter
    user_achieve_connection?: User_achieve_connectionListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    age?: SortOrder
    region?: SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    age?: IntWithAggregatesFilter<"users"> | number
    region?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type achievementsCreateInput = {
    title: string
    icon: string
    games: gamesCreateNestedOneWithoutAchievementsInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutAchievementsInput
  }

  export type achievementsUncheckedCreateInput = {
    id?: number
    game_id: number
    title: string
    icon: string
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutAchievementsInput
  }

  export type achievementsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    games?: gamesUpdateOneRequiredWithoutAchievementsNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutAchievementsNestedInput
  }

  export type achievementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutAchievementsNestedInput
  }

  export type achievementsCreateManyInput = {
    id?: number
    game_id: number
    title: string
    icon: string
  }

  export type achievementsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type achievementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type devsCreateInput = {
    dev_name: string
    contacts: JsonNullValueInput | InputJsonValue
    logo?: string | null
    dev_type: $Enums.dev_type
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutDevsInput
  }

  export type devsUncheckedCreateInput = {
    id?: number
    dev_name: string
    contacts: JsonNullValueInput | InputJsonValue
    logo?: string | null
    dev_type: $Enums.dev_type
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutDevsInput
  }

  export type devsUpdateInput = {
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
    game_dev_connection?: game_dev_connectionUpdateManyWithoutDevsNestedInput
  }

  export type devsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutDevsNestedInput
  }

  export type devsCreateManyInput = {
    id?: number
    dev_name: string
    contacts: JsonNullValueInput | InputJsonValue
    logo?: string | null
    dev_type: $Enums.dev_type
  }

  export type devsUpdateManyMutationInput = {
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
  }

  export type devsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
  }

  export type eventsCreateInput = {
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
    games: gamesCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    game_id: number
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
  }

  export type eventsUpdateInput = {
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
    games?: gamesUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type eventsCreateManyInput = {
    id?: number
    game_id: number
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
  }

  export type eventsUpdateManyMutationInput = {
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type friendsCreateInput = {
    status?: $Enums.fr_status
    users_friends_friend_idTousers: usersCreateNestedOneWithoutFriends_friends_friend_idTousersInput
    users_friends_user_idTousers: usersCreateNestedOneWithoutFriends_friends_user_idTousersInput
  }

  export type friendsUncheckedCreateInput = {
    user_id: number
    friend_id: number
    status?: $Enums.fr_status
  }

  export type friendsUpdateInput = {
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
    users_friends_friend_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_friend_idTousersNestedInput
    users_friends_user_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_user_idTousersNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type friendsCreateManyInput = {
    user_id: number
    friend_id: number
    status?: $Enums.fr_status
  }

  export type friendsUpdateManyMutationInput = {
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type friendsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type game_dev_connectionCreateInput = {
    devs: devsCreateNestedOneWithoutGame_dev_connectionInput
    games: gamesCreateNestedOneWithoutGame_dev_connectionInput
  }

  export type game_dev_connectionUncheckedCreateInput = {
    game_id: number
    dev_id: number
  }

  export type game_dev_connectionUpdateInput = {
    devs?: devsUpdateOneRequiredWithoutGame_dev_connectionNestedInput
    games?: gamesUpdateOneRequiredWithoutGame_dev_connectionNestedInput
  }

  export type game_dev_connectionUncheckedUpdateInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    dev_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_dev_connectionCreateManyInput = {
    game_id: number
    dev_id: number
  }

  export type game_dev_connectionUpdateManyMutationInput = {

  }

  export type game_dev_connectionUncheckedUpdateManyInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    dev_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_newsCreateInput = {
    title: string
    content: string
    published_at?: Date | string
    games: gamesCreateNestedOneWithoutGame_newsInput
  }

  export type game_newsUncheckedCreateInput = {
    id?: number
    game_id: number
    title: string
    content: string
    published_at?: Date | string
  }

  export type game_newsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: gamesUpdateOneRequiredWithoutGame_newsNestedInput
  }

  export type game_newsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_newsCreateManyInput = {
    id?: number
    game_id: number
    title: string
    content: string
    published_at?: Date | string
  }

  export type game_newsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_newsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_tag_connectionCreateInput = {
    games: gamesCreateNestedOneWithoutGame_tag_connectionInput
    tags: tagsCreateNestedOneWithoutGame_tag_connectionInput
  }

  export type game_tag_connectionUncheckedCreateInput = {
    game_id: number
    tag_id: number
  }

  export type game_tag_connectionUpdateInput = {
    games?: gamesUpdateOneRequiredWithoutGame_tag_connectionNestedInput
    tags?: tagsUpdateOneRequiredWithoutGame_tag_connectionNestedInput
  }

  export type game_tag_connectionUncheckedUpdateInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_tag_connectionCreateManyInput = {
    game_id: number
    tag_id: number
  }

  export type game_tag_connectionUpdateManyMutationInput = {

  }

  export type game_tag_connectionUncheckedUpdateManyInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type gamesCreateInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesCreateManyInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
  }

  export type gamesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type librariesCreateInput = {
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
    games: gamesCreateNestedOneWithoutLibrariesInput
    users: usersCreateNestedOneWithoutLibrariesInput
  }

  export type librariesUncheckedCreateInput = {
    id?: number
    user_id: number
    game_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type librariesUpdateInput = {
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
    games?: gamesUpdateOneRequiredWithoutLibrariesNestedInput
    users?: usersUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type librariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type librariesCreateManyInput = {
    id?: number
    user_id: number
    game_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type librariesUpdateManyMutationInput = {
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type librariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type reviewsCreateInput = {
    rating: number
    content?: string | null
    games: gamesCreateNestedOneWithoutReviewsInput
    users: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    user_id: number
    game_id: number
    rating: number
    content?: string | null
  }

  export type reviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    games?: gamesUpdateOneRequiredWithoutReviewsNestedInput
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewsCreateManyInput = {
    id?: number
    user_id: number
    game_id: number
    rating: number
    content?: string | null
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type savesCreateInput = {
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    games: gamesCreateNestedOneWithoutSavesInput
    users: usersCreateNestedOneWithoutSavesInput
  }

  export type savesUncheckedCreateInput = {
    id?: number
    user_id: number
    game_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type savesUpdateInput = {
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: gamesUpdateOneRequiredWithoutSavesNestedInput
    users?: usersUpdateOneRequiredWithoutSavesNestedInput
  }

  export type savesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savesCreateManyInput = {
    id?: number
    user_id: number
    game_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type savesUpdateManyMutationInput = {
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    tag_name: string
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: number
    tag_name: string
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    game_tag_connection?: game_tag_connectionUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: number
    tag_name: string
  }

  export type tagsUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type user_achieve_connectionCreateInput = {
    achievements: achievementsCreateNestedOneWithoutUser_achieve_connectionInput
    users: usersCreateNestedOneWithoutUser_achieve_connectionInput
  }

  export type user_achieve_connectionUncheckedCreateInput = {
    user_id: number
    achievement_id: number
  }

  export type user_achieve_connectionUpdateInput = {
    achievements?: achievementsUpdateOneRequiredWithoutUser_achieve_connectionNestedInput
    users?: usersUpdateOneRequiredWithoutUser_achieve_connectionNestedInput
  }

  export type user_achieve_connectionUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    achievement_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_achieve_connectionCreateManyInput = {
    user_id: number
    achievement_id: number
  }

  export type user_achieve_connectionUpdateManyMutationInput = {

  }

  export type user_achieve_connectionUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    achievement_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GamesScalarRelationFilter = {
    is?: gamesWhereInput
    isNot?: gamesWhereInput
  }

  export type User_achieve_connectionListRelationFilter = {
    every?: user_achieve_connectionWhereInput
    some?: user_achieve_connectionWhereInput
    none?: user_achieve_connectionWhereInput
  }

  export type user_achieve_connectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type achievementsCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type achievementsAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type achievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type achievementsMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type achievementsSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumdev_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.dev_type | Enumdev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdev_typeFilter<$PrismaModel> | $Enums.dev_type
  }

  export type Game_dev_connectionListRelationFilter = {
    every?: game_dev_connectionWhereInput
    some?: game_dev_connectionWhereInput
    none?: game_dev_connectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type game_dev_connectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type devsCountOrderByAggregateInput = {
    id?: SortOrder
    dev_name?: SortOrder
    contacts?: SortOrder
    logo?: SortOrder
    dev_type?: SortOrder
  }

  export type devsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type devsMaxOrderByAggregateInput = {
    id?: SortOrder
    dev_name?: SortOrder
    logo?: SortOrder
    dev_type?: SortOrder
  }

  export type devsMinOrderByAggregateInput = {
    id?: SortOrder
    dev_name?: SortOrder
    logo?: SortOrder
    dev_type?: SortOrder
  }

  export type devsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumdev_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dev_type | Enumdev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdev_typeWithAggregatesFilter<$PrismaModel> | $Enums.dev_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdev_typeFilter<$PrismaModel>
    _max?: NestedEnumdev_typeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumev_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ev_type | Enumev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumev_typeFilter<$PrismaModel> | $Enums.ev_type
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    discount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumev_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ev_type | Enumev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumev_typeWithAggregatesFilter<$PrismaModel> | $Enums.ev_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumev_typeFilter<$PrismaModel>
    _max?: NestedEnumev_typeFilter<$PrismaModel>
  }

  export type Enumfr_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.fr_status | Enumfr_statusFieldRefInput<$PrismaModel>
    in?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumfr_statusFilter<$PrismaModel> | $Enums.fr_status
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type friendsUser_idFriend_idCompoundUniqueInput = {
    user_id: number
    friend_id: number
  }

  export type friendsCountOrderByAggregateInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type friendsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type friendsSumOrderByAggregateInput = {
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type Enumfr_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fr_status | Enumfr_statusFieldRefInput<$PrismaModel>
    in?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumfr_statusWithAggregatesFilter<$PrismaModel> | $Enums.fr_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfr_statusFilter<$PrismaModel>
    _max?: NestedEnumfr_statusFilter<$PrismaModel>
  }

  export type DevsScalarRelationFilter = {
    is?: devsWhereInput
    isNot?: devsWhereInput
  }

  export type game_dev_connectionGame_idDev_idCompoundUniqueInput = {
    game_id: number
    dev_id: number
  }

  export type game_dev_connectionCountOrderByAggregateInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
  }

  export type game_dev_connectionAvgOrderByAggregateInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
  }

  export type game_dev_connectionMaxOrderByAggregateInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
  }

  export type game_dev_connectionMinOrderByAggregateInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
  }

  export type game_dev_connectionSumOrderByAggregateInput = {
    game_id?: SortOrder
    dev_id?: SortOrder
  }

  export type game_newsCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published_at?: SortOrder
  }

  export type game_newsAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type game_newsMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published_at?: SortOrder
  }

  export type game_newsMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published_at?: SortOrder
  }

  export type game_newsSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type game_tag_connectionGame_idTag_idCompoundUniqueInput = {
    game_id: number
    tag_id: number
  }

  export type game_tag_connectionCountOrderByAggregateInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
  }

  export type game_tag_connectionAvgOrderByAggregateInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
  }

  export type game_tag_connectionMaxOrderByAggregateInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
  }

  export type game_tag_connectionMinOrderByAggregateInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
  }

  export type game_tag_connectionSumOrderByAggregateInput = {
    game_id?: SortOrder
    tag_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AchievementsListRelationFilter = {
    every?: achievementsWhereInput
    some?: achievementsWhereInput
    none?: achievementsWhereInput
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type Game_newsListRelationFilter = {
    every?: game_newsWhereInput
    some?: game_newsWhereInput
    none?: game_newsWhereInput
  }

  export type Game_tag_connectionListRelationFilter = {
    every?: game_tag_connectionWhereInput
    some?: game_tag_connectionWhereInput
    none?: game_tag_connectionWhereInput
  }

  export type GamesNullableScalarRelationFilter = {
    is?: gamesWhereInput | null
    isNot?: gamesWhereInput | null
  }

  export type GamesListRelationFilter = {
    every?: gamesWhereInput
    some?: gamesWhereInput
    none?: gamesWhereInput
  }

  export type LibrariesListRelationFilter = {
    every?: librariesWhereInput
    some?: librariesWhereInput
    none?: librariesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type SavesListRelationFilter = {
    every?: savesWhereInput
    some?: savesWhereInput
    none?: savesWhereInput
  }

  export type achievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type game_newsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type game_tag_connectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type librariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type savesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gamesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    release_date?: SortOrder
    age_rating?: SortOrder
    cover?: SortOrder
    description?: SortOrder
    system_requirements?: SortOrder
    base_game_id?: SortOrder
    is_multiplayer?: SortOrder
  }

  export type gamesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    base_game_id?: SortOrder
  }

  export type gamesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    release_date?: SortOrder
    age_rating?: SortOrder
    cover?: SortOrder
    description?: SortOrder
    base_game_id?: SortOrder
    is_multiplayer?: SortOrder
  }

  export type gamesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    release_date?: SortOrder
    age_rating?: SortOrder
    cover?: SortOrder
    description?: SortOrder
    base_game_id?: SortOrder
    is_multiplayer?: SortOrder
  }

  export type gamesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    base_game_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumown_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.own_type | Enumown_typeFieldRefInput<$PrismaModel>
    in?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumown_typeFilter<$PrismaModel> | $Enums.own_type
  }

  export type Enumdownload_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.download_type | Enumdownload_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdownload_typeNullableFilter<$PrismaModel> | $Enums.download_type | null
  }

  export type librariesUser_idGame_idCompoundUniqueInput = {
    user_id: number
    game_id: number
  }

  export type librariesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
    ownership?: SortOrder
    download_status?: SortOrder
  }

  export type librariesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
  }

  export type librariesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
    ownership?: SortOrder
    download_status?: SortOrder
  }

  export type librariesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
    ownership?: SortOrder
    download_status?: SortOrder
  }

  export type librariesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    hours_played?: SortOrder
  }

  export type Enumown_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.own_type | Enumown_typeFieldRefInput<$PrismaModel>
    in?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumown_typeWithAggregatesFilter<$PrismaModel> | $Enums.own_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumown_typeFilter<$PrismaModel>
    _max?: NestedEnumown_typeFilter<$PrismaModel>
  }

  export type Enumdownload_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.download_type | Enumdownload_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdownload_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.download_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdownload_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumdownload_typeNullableFilter<$PrismaModel>
  }

  export type reviewsUser_idGame_idCompoundUniqueInput = {
    user_id: number
    game_id: number
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    rating?: SortOrder
  }

  export type savesUser_idGame_idCompoundUniqueInput = {
    user_id: number
    game_id: number
  }

  export type savesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    save_data?: SortOrder
    last_updated?: SortOrder
  }

  export type savesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
  }

  export type savesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    last_updated?: SortOrder
  }

  export type savesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    last_updated?: SortOrder
  }

  export type savesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AchievementsScalarRelationFilter = {
    is?: achievementsWhereInput
    isNot?: achievementsWhereInput
  }

  export type user_achieve_connectionUser_idAchievement_idCompoundUniqueInput = {
    user_id: number
    achievement_id: number
  }

  export type user_achieve_connectionCountOrderByAggregateInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
  }

  export type user_achieve_connectionAvgOrderByAggregateInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
  }

  export type user_achieve_connectionMaxOrderByAggregateInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
  }

  export type user_achieve_connectionMinOrderByAggregateInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
  }

  export type user_achieve_connectionSumOrderByAggregateInput = {
    user_id?: SortOrder
    achievement_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    age?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    age?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    age?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type gamesCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<gamesCreateWithoutAchievementsInput, gamesUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutAchievementsInput
    connect?: gamesWhereUniqueInput
  }

  export type user_achieve_connectionCreateNestedManyWithoutAchievementsInput = {
    create?: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput> | user_achieve_connectionCreateWithoutAchievementsInput[] | user_achieve_connectionUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutAchievementsInput | user_achieve_connectionCreateOrConnectWithoutAchievementsInput[]
    createMany?: user_achieve_connectionCreateManyAchievementsInputEnvelope
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
  }

  export type user_achieve_connectionUncheckedCreateNestedManyWithoutAchievementsInput = {
    create?: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput> | user_achieve_connectionCreateWithoutAchievementsInput[] | user_achieve_connectionUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutAchievementsInput | user_achieve_connectionCreateOrConnectWithoutAchievementsInput[]
    createMany?: user_achieve_connectionCreateManyAchievementsInputEnvelope
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type gamesUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<gamesCreateWithoutAchievementsInput, gamesUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutAchievementsInput
    upsert?: gamesUpsertWithoutAchievementsInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutAchievementsInput, gamesUpdateWithoutAchievementsInput>, gamesUncheckedUpdateWithoutAchievementsInput>
  }

  export type user_achieve_connectionUpdateManyWithoutAchievementsNestedInput = {
    create?: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput> | user_achieve_connectionCreateWithoutAchievementsInput[] | user_achieve_connectionUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutAchievementsInput | user_achieve_connectionCreateOrConnectWithoutAchievementsInput[]
    upsert?: user_achieve_connectionUpsertWithWhereUniqueWithoutAchievementsInput | user_achieve_connectionUpsertWithWhereUniqueWithoutAchievementsInput[]
    createMany?: user_achieve_connectionCreateManyAchievementsInputEnvelope
    set?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    disconnect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    delete?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    update?: user_achieve_connectionUpdateWithWhereUniqueWithoutAchievementsInput | user_achieve_connectionUpdateWithWhereUniqueWithoutAchievementsInput[]
    updateMany?: user_achieve_connectionUpdateManyWithWhereWithoutAchievementsInput | user_achieve_connectionUpdateManyWithWhereWithoutAchievementsInput[]
    deleteMany?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_achieve_connectionUncheckedUpdateManyWithoutAchievementsNestedInput = {
    create?: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput> | user_achieve_connectionCreateWithoutAchievementsInput[] | user_achieve_connectionUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutAchievementsInput | user_achieve_connectionCreateOrConnectWithoutAchievementsInput[]
    upsert?: user_achieve_connectionUpsertWithWhereUniqueWithoutAchievementsInput | user_achieve_connectionUpsertWithWhereUniqueWithoutAchievementsInput[]
    createMany?: user_achieve_connectionCreateManyAchievementsInputEnvelope
    set?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    disconnect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    delete?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    update?: user_achieve_connectionUpdateWithWhereUniqueWithoutAchievementsInput | user_achieve_connectionUpdateWithWhereUniqueWithoutAchievementsInput[]
    updateMany?: user_achieve_connectionUpdateManyWithWhereWithoutAchievementsInput | user_achieve_connectionUpdateManyWithWhereWithoutAchievementsInput[]
    deleteMany?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
  }

  export type game_dev_connectionCreateNestedManyWithoutDevsInput = {
    create?: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput> | game_dev_connectionCreateWithoutDevsInput[] | game_dev_connectionUncheckedCreateWithoutDevsInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutDevsInput | game_dev_connectionCreateOrConnectWithoutDevsInput[]
    createMany?: game_dev_connectionCreateManyDevsInputEnvelope
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
  }

  export type game_dev_connectionUncheckedCreateNestedManyWithoutDevsInput = {
    create?: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput> | game_dev_connectionCreateWithoutDevsInput[] | game_dev_connectionUncheckedCreateWithoutDevsInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutDevsInput | game_dev_connectionCreateOrConnectWithoutDevsInput[]
    createMany?: game_dev_connectionCreateManyDevsInputEnvelope
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumdev_typeFieldUpdateOperationsInput = {
    set?: $Enums.dev_type
  }

  export type game_dev_connectionUpdateManyWithoutDevsNestedInput = {
    create?: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput> | game_dev_connectionCreateWithoutDevsInput[] | game_dev_connectionUncheckedCreateWithoutDevsInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutDevsInput | game_dev_connectionCreateOrConnectWithoutDevsInput[]
    upsert?: game_dev_connectionUpsertWithWhereUniqueWithoutDevsInput | game_dev_connectionUpsertWithWhereUniqueWithoutDevsInput[]
    createMany?: game_dev_connectionCreateManyDevsInputEnvelope
    set?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    disconnect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    delete?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    update?: game_dev_connectionUpdateWithWhereUniqueWithoutDevsInput | game_dev_connectionUpdateWithWhereUniqueWithoutDevsInput[]
    updateMany?: game_dev_connectionUpdateManyWithWhereWithoutDevsInput | game_dev_connectionUpdateManyWithWhereWithoutDevsInput[]
    deleteMany?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
  }

  export type game_dev_connectionUncheckedUpdateManyWithoutDevsNestedInput = {
    create?: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput> | game_dev_connectionCreateWithoutDevsInput[] | game_dev_connectionUncheckedCreateWithoutDevsInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutDevsInput | game_dev_connectionCreateOrConnectWithoutDevsInput[]
    upsert?: game_dev_connectionUpsertWithWhereUniqueWithoutDevsInput | game_dev_connectionUpsertWithWhereUniqueWithoutDevsInput[]
    createMany?: game_dev_connectionCreateManyDevsInputEnvelope
    set?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    disconnect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    delete?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    update?: game_dev_connectionUpdateWithWhereUniqueWithoutDevsInput | game_dev_connectionUpdateWithWhereUniqueWithoutDevsInput[]
    updateMany?: game_dev_connectionUpdateManyWithWhereWithoutDevsInput | game_dev_connectionUpdateManyWithWhereWithoutDevsInput[]
    deleteMany?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
  }

  export type gamesCreateNestedOneWithoutEventsInput = {
    create?: XOR<gamesCreateWithoutEventsInput, gamesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutEventsInput
    connect?: gamesWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumev_typeFieldUpdateOperationsInput = {
    set?: $Enums.ev_type
  }

  export type gamesUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<gamesCreateWithoutEventsInput, gamesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutEventsInput
    upsert?: gamesUpsertWithoutEventsInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutEventsInput, gamesUpdateWithoutEventsInput>, gamesUncheckedUpdateWithoutEventsInput>
  }

  export type usersCreateNestedOneWithoutFriends_friends_friend_idTousersInput = {
    create?: XOR<usersCreateWithoutFriends_friends_friend_idTousersInput, usersUncheckedCreateWithoutFriends_friends_friend_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_friend_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFriends_friends_user_idTousersInput = {
    create?: XOR<usersCreateWithoutFriends_friends_user_idTousersInput, usersUncheckedCreateWithoutFriends_friends_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type Enumfr_statusFieldUpdateOperationsInput = {
    set?: $Enums.fr_status
  }

  export type usersUpdateOneRequiredWithoutFriends_friends_friend_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriends_friends_friend_idTousersInput, usersUncheckedCreateWithoutFriends_friends_friend_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_friend_idTousersInput
    upsert?: usersUpsertWithoutFriends_friends_friend_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends_friends_friend_idTousersInput, usersUpdateWithoutFriends_friends_friend_idTousersInput>, usersUncheckedUpdateWithoutFriends_friends_friend_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutFriends_friends_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriends_friends_user_idTousersInput, usersUncheckedCreateWithoutFriends_friends_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_user_idTousersInput
    upsert?: usersUpsertWithoutFriends_friends_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends_friends_user_idTousersInput, usersUpdateWithoutFriends_friends_user_idTousersInput>, usersUncheckedUpdateWithoutFriends_friends_user_idTousersInput>
  }

  export type devsCreateNestedOneWithoutGame_dev_connectionInput = {
    create?: XOR<devsCreateWithoutGame_dev_connectionInput, devsUncheckedCreateWithoutGame_dev_connectionInput>
    connectOrCreate?: devsCreateOrConnectWithoutGame_dev_connectionInput
    connect?: devsWhereUniqueInput
  }

  export type gamesCreateNestedOneWithoutGame_dev_connectionInput = {
    create?: XOR<gamesCreateWithoutGame_dev_connectionInput, gamesUncheckedCreateWithoutGame_dev_connectionInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_dev_connectionInput
    connect?: gamesWhereUniqueInput
  }

  export type devsUpdateOneRequiredWithoutGame_dev_connectionNestedInput = {
    create?: XOR<devsCreateWithoutGame_dev_connectionInput, devsUncheckedCreateWithoutGame_dev_connectionInput>
    connectOrCreate?: devsCreateOrConnectWithoutGame_dev_connectionInput
    upsert?: devsUpsertWithoutGame_dev_connectionInput
    connect?: devsWhereUniqueInput
    update?: XOR<XOR<devsUpdateToOneWithWhereWithoutGame_dev_connectionInput, devsUpdateWithoutGame_dev_connectionInput>, devsUncheckedUpdateWithoutGame_dev_connectionInput>
  }

  export type gamesUpdateOneRequiredWithoutGame_dev_connectionNestedInput = {
    create?: XOR<gamesCreateWithoutGame_dev_connectionInput, gamesUncheckedCreateWithoutGame_dev_connectionInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_dev_connectionInput
    upsert?: gamesUpsertWithoutGame_dev_connectionInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutGame_dev_connectionInput, gamesUpdateWithoutGame_dev_connectionInput>, gamesUncheckedUpdateWithoutGame_dev_connectionInput>
  }

  export type gamesCreateNestedOneWithoutGame_newsInput = {
    create?: XOR<gamesCreateWithoutGame_newsInput, gamesUncheckedCreateWithoutGame_newsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_newsInput
    connect?: gamesWhereUniqueInput
  }

  export type gamesUpdateOneRequiredWithoutGame_newsNestedInput = {
    create?: XOR<gamesCreateWithoutGame_newsInput, gamesUncheckedCreateWithoutGame_newsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_newsInput
    upsert?: gamesUpsertWithoutGame_newsInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutGame_newsInput, gamesUpdateWithoutGame_newsInput>, gamesUncheckedUpdateWithoutGame_newsInput>
  }

  export type gamesCreateNestedOneWithoutGame_tag_connectionInput = {
    create?: XOR<gamesCreateWithoutGame_tag_connectionInput, gamesUncheckedCreateWithoutGame_tag_connectionInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_tag_connectionInput
    connect?: gamesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutGame_tag_connectionInput = {
    create?: XOR<tagsCreateWithoutGame_tag_connectionInput, tagsUncheckedCreateWithoutGame_tag_connectionInput>
    connectOrCreate?: tagsCreateOrConnectWithoutGame_tag_connectionInput
    connect?: tagsWhereUniqueInput
  }

  export type gamesUpdateOneRequiredWithoutGame_tag_connectionNestedInput = {
    create?: XOR<gamesCreateWithoutGame_tag_connectionInput, gamesUncheckedCreateWithoutGame_tag_connectionInput>
    connectOrCreate?: gamesCreateOrConnectWithoutGame_tag_connectionInput
    upsert?: gamesUpsertWithoutGame_tag_connectionInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutGame_tag_connectionInput, gamesUpdateWithoutGame_tag_connectionInput>, gamesUncheckedUpdateWithoutGame_tag_connectionInput>
  }

  export type tagsUpdateOneRequiredWithoutGame_tag_connectionNestedInput = {
    create?: XOR<tagsCreateWithoutGame_tag_connectionInput, tagsUncheckedCreateWithoutGame_tag_connectionInput>
    connectOrCreate?: tagsCreateOrConnectWithoutGame_tag_connectionInput
    upsert?: tagsUpsertWithoutGame_tag_connectionInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutGame_tag_connectionInput, tagsUpdateWithoutGame_tag_connectionInput>, tagsUncheckedUpdateWithoutGame_tag_connectionInput>
  }

  export type achievementsCreateNestedManyWithoutGamesInput = {
    create?: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput> | achievementsCreateWithoutGamesInput[] | achievementsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutGamesInput | achievementsCreateOrConnectWithoutGamesInput[]
    createMany?: achievementsCreateManyGamesInputEnvelope
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
  }

  export type eventsCreateNestedManyWithoutGamesInput = {
    create?: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput> | eventsCreateWithoutGamesInput[] | eventsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutGamesInput | eventsCreateOrConnectWithoutGamesInput[]
    createMany?: eventsCreateManyGamesInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type game_dev_connectionCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput> | game_dev_connectionCreateWithoutGamesInput[] | game_dev_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutGamesInput | game_dev_connectionCreateOrConnectWithoutGamesInput[]
    createMany?: game_dev_connectionCreateManyGamesInputEnvelope
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
  }

  export type game_newsCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput> | game_newsCreateWithoutGamesInput[] | game_newsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_newsCreateOrConnectWithoutGamesInput | game_newsCreateOrConnectWithoutGamesInput[]
    createMany?: game_newsCreateManyGamesInputEnvelope
    connect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
  }

  export type game_tag_connectionCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput> | game_tag_connectionCreateWithoutGamesInput[] | game_tag_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutGamesInput | game_tag_connectionCreateOrConnectWithoutGamesInput[]
    createMany?: game_tag_connectionCreateManyGamesInputEnvelope
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
  }

  export type gamesCreateNestedOneWithoutOther_gamesInput = {
    create?: XOR<gamesCreateWithoutOther_gamesInput, gamesUncheckedCreateWithoutOther_gamesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutOther_gamesInput
    connect?: gamesWhereUniqueInput
  }

  export type gamesCreateNestedManyWithoutGamesInput = {
    create?: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput> | gamesCreateWithoutGamesInput[] | gamesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutGamesInput | gamesCreateOrConnectWithoutGamesInput[]
    createMany?: gamesCreateManyGamesInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type librariesCreateNestedManyWithoutGamesInput = {
    create?: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput> | librariesCreateWithoutGamesInput[] | librariesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutGamesInput | librariesCreateOrConnectWithoutGamesInput[]
    createMany?: librariesCreateManyGamesInputEnvelope
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutGamesInput = {
    create?: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput> | reviewsCreateWithoutGamesInput[] | reviewsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutGamesInput | reviewsCreateOrConnectWithoutGamesInput[]
    createMany?: reviewsCreateManyGamesInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type savesCreateNestedManyWithoutGamesInput = {
    create?: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput> | savesCreateWithoutGamesInput[] | savesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: savesCreateOrConnectWithoutGamesInput | savesCreateOrConnectWithoutGamesInput[]
    createMany?: savesCreateManyGamesInputEnvelope
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
  }

  export type achievementsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput> | achievementsCreateWithoutGamesInput[] | achievementsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutGamesInput | achievementsCreateOrConnectWithoutGamesInput[]
    createMany?: achievementsCreateManyGamesInputEnvelope
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput> | eventsCreateWithoutGamesInput[] | eventsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutGamesInput | eventsCreateOrConnectWithoutGamesInput[]
    createMany?: eventsCreateManyGamesInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput> | game_dev_connectionCreateWithoutGamesInput[] | game_dev_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutGamesInput | game_dev_connectionCreateOrConnectWithoutGamesInput[]
    createMany?: game_dev_connectionCreateManyGamesInputEnvelope
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
  }

  export type game_newsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput> | game_newsCreateWithoutGamesInput[] | game_newsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_newsCreateOrConnectWithoutGamesInput | game_newsCreateOrConnectWithoutGamesInput[]
    createMany?: game_newsCreateManyGamesInputEnvelope
    connect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
  }

  export type game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput> | game_tag_connectionCreateWithoutGamesInput[] | game_tag_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutGamesInput | game_tag_connectionCreateOrConnectWithoutGamesInput[]
    createMany?: game_tag_connectionCreateManyGamesInputEnvelope
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
  }

  export type gamesUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput> | gamesCreateWithoutGamesInput[] | gamesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutGamesInput | gamesCreateOrConnectWithoutGamesInput[]
    createMany?: gamesCreateManyGamesInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type librariesUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput> | librariesCreateWithoutGamesInput[] | librariesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutGamesInput | librariesCreateOrConnectWithoutGamesInput[]
    createMany?: librariesCreateManyGamesInputEnvelope
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput> | reviewsCreateWithoutGamesInput[] | reviewsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutGamesInput | reviewsCreateOrConnectWithoutGamesInput[]
    createMany?: reviewsCreateManyGamesInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type savesUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput> | savesCreateWithoutGamesInput[] | savesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: savesCreateOrConnectWithoutGamesInput | savesCreateOrConnectWithoutGamesInput[]
    createMany?: savesCreateManyGamesInputEnvelope
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type achievementsUpdateManyWithoutGamesNestedInput = {
    create?: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput> | achievementsCreateWithoutGamesInput[] | achievementsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutGamesInput | achievementsCreateOrConnectWithoutGamesInput[]
    upsert?: achievementsUpsertWithWhereUniqueWithoutGamesInput | achievementsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: achievementsCreateManyGamesInputEnvelope
    set?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    disconnect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    delete?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    update?: achievementsUpdateWithWhereUniqueWithoutGamesInput | achievementsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: achievementsUpdateManyWithWhereWithoutGamesInput | achievementsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
  }

  export type eventsUpdateManyWithoutGamesNestedInput = {
    create?: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput> | eventsCreateWithoutGamesInput[] | eventsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutGamesInput | eventsCreateOrConnectWithoutGamesInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutGamesInput | eventsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: eventsCreateManyGamesInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutGamesInput | eventsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutGamesInput | eventsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type game_dev_connectionUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput> | game_dev_connectionCreateWithoutGamesInput[] | game_dev_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutGamesInput | game_dev_connectionCreateOrConnectWithoutGamesInput[]
    upsert?: game_dev_connectionUpsertWithWhereUniqueWithoutGamesInput | game_dev_connectionUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_dev_connectionCreateManyGamesInputEnvelope
    set?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    disconnect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    delete?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    update?: game_dev_connectionUpdateWithWhereUniqueWithoutGamesInput | game_dev_connectionUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_dev_connectionUpdateManyWithWhereWithoutGamesInput | game_dev_connectionUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
  }

  export type game_newsUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput> | game_newsCreateWithoutGamesInput[] | game_newsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_newsCreateOrConnectWithoutGamesInput | game_newsCreateOrConnectWithoutGamesInput[]
    upsert?: game_newsUpsertWithWhereUniqueWithoutGamesInput | game_newsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_newsCreateManyGamesInputEnvelope
    set?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    disconnect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    delete?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    connect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    update?: game_newsUpdateWithWhereUniqueWithoutGamesInput | game_newsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_newsUpdateManyWithWhereWithoutGamesInput | game_newsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_newsScalarWhereInput | game_newsScalarWhereInput[]
  }

  export type game_tag_connectionUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput> | game_tag_connectionCreateWithoutGamesInput[] | game_tag_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutGamesInput | game_tag_connectionCreateOrConnectWithoutGamesInput[]
    upsert?: game_tag_connectionUpsertWithWhereUniqueWithoutGamesInput | game_tag_connectionUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_tag_connectionCreateManyGamesInputEnvelope
    set?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    disconnect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    delete?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    update?: game_tag_connectionUpdateWithWhereUniqueWithoutGamesInput | game_tag_connectionUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_tag_connectionUpdateManyWithWhereWithoutGamesInput | game_tag_connectionUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
  }

  export type gamesUpdateOneWithoutOther_gamesNestedInput = {
    create?: XOR<gamesCreateWithoutOther_gamesInput, gamesUncheckedCreateWithoutOther_gamesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutOther_gamesInput
    upsert?: gamesUpsertWithoutOther_gamesInput
    disconnect?: gamesWhereInput | boolean
    delete?: gamesWhereInput | boolean
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutOther_gamesInput, gamesUpdateWithoutOther_gamesInput>, gamesUncheckedUpdateWithoutOther_gamesInput>
  }

  export type gamesUpdateManyWithoutGamesNestedInput = {
    create?: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput> | gamesCreateWithoutGamesInput[] | gamesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutGamesInput | gamesCreateOrConnectWithoutGamesInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutGamesInput | gamesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: gamesCreateManyGamesInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutGamesInput | gamesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutGamesInput | gamesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type librariesUpdateManyWithoutGamesNestedInput = {
    create?: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput> | librariesCreateWithoutGamesInput[] | librariesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutGamesInput | librariesCreateOrConnectWithoutGamesInput[]
    upsert?: librariesUpsertWithWhereUniqueWithoutGamesInput | librariesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: librariesCreateManyGamesInputEnvelope
    set?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    disconnect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    delete?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    update?: librariesUpdateWithWhereUniqueWithoutGamesInput | librariesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: librariesUpdateManyWithWhereWithoutGamesInput | librariesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: librariesScalarWhereInput | librariesScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutGamesNestedInput = {
    create?: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput> | reviewsCreateWithoutGamesInput[] | reviewsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutGamesInput | reviewsCreateOrConnectWithoutGamesInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutGamesInput | reviewsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: reviewsCreateManyGamesInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutGamesInput | reviewsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutGamesInput | reviewsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type savesUpdateManyWithoutGamesNestedInput = {
    create?: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput> | savesCreateWithoutGamesInput[] | savesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: savesCreateOrConnectWithoutGamesInput | savesCreateOrConnectWithoutGamesInput[]
    upsert?: savesUpsertWithWhereUniqueWithoutGamesInput | savesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: savesCreateManyGamesInputEnvelope
    set?: savesWhereUniqueInput | savesWhereUniqueInput[]
    disconnect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    delete?: savesWhereUniqueInput | savesWhereUniqueInput[]
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    update?: savesUpdateWithWhereUniqueWithoutGamesInput | savesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: savesUpdateManyWithWhereWithoutGamesInput | savesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: savesScalarWhereInput | savesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type achievementsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput> | achievementsCreateWithoutGamesInput[] | achievementsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutGamesInput | achievementsCreateOrConnectWithoutGamesInput[]
    upsert?: achievementsUpsertWithWhereUniqueWithoutGamesInput | achievementsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: achievementsCreateManyGamesInputEnvelope
    set?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    disconnect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    delete?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    update?: achievementsUpdateWithWhereUniqueWithoutGamesInput | achievementsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: achievementsUpdateManyWithWhereWithoutGamesInput | achievementsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
  }

  export type eventsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput> | eventsCreateWithoutGamesInput[] | eventsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutGamesInput | eventsCreateOrConnectWithoutGamesInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutGamesInput | eventsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: eventsCreateManyGamesInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutGamesInput | eventsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutGamesInput | eventsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput> | game_dev_connectionCreateWithoutGamesInput[] | game_dev_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_dev_connectionCreateOrConnectWithoutGamesInput | game_dev_connectionCreateOrConnectWithoutGamesInput[]
    upsert?: game_dev_connectionUpsertWithWhereUniqueWithoutGamesInput | game_dev_connectionUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_dev_connectionCreateManyGamesInputEnvelope
    set?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    disconnect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    delete?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    connect?: game_dev_connectionWhereUniqueInput | game_dev_connectionWhereUniqueInput[]
    update?: game_dev_connectionUpdateWithWhereUniqueWithoutGamesInput | game_dev_connectionUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_dev_connectionUpdateManyWithWhereWithoutGamesInput | game_dev_connectionUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
  }

  export type game_newsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput> | game_newsCreateWithoutGamesInput[] | game_newsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_newsCreateOrConnectWithoutGamesInput | game_newsCreateOrConnectWithoutGamesInput[]
    upsert?: game_newsUpsertWithWhereUniqueWithoutGamesInput | game_newsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_newsCreateManyGamesInputEnvelope
    set?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    disconnect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    delete?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    connect?: game_newsWhereUniqueInput | game_newsWhereUniqueInput[]
    update?: game_newsUpdateWithWhereUniqueWithoutGamesInput | game_newsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_newsUpdateManyWithWhereWithoutGamesInput | game_newsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_newsScalarWhereInput | game_newsScalarWhereInput[]
  }

  export type game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput> | game_tag_connectionCreateWithoutGamesInput[] | game_tag_connectionUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutGamesInput | game_tag_connectionCreateOrConnectWithoutGamesInput[]
    upsert?: game_tag_connectionUpsertWithWhereUniqueWithoutGamesInput | game_tag_connectionUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: game_tag_connectionCreateManyGamesInputEnvelope
    set?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    disconnect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    delete?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    update?: game_tag_connectionUpdateWithWhereUniqueWithoutGamesInput | game_tag_connectionUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: game_tag_connectionUpdateManyWithWhereWithoutGamesInput | game_tag_connectionUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
  }

  export type gamesUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput> | gamesCreateWithoutGamesInput[] | gamesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutGamesInput | gamesCreateOrConnectWithoutGamesInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutGamesInput | gamesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: gamesCreateManyGamesInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutGamesInput | gamesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutGamesInput | gamesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type librariesUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput> | librariesCreateWithoutGamesInput[] | librariesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutGamesInput | librariesCreateOrConnectWithoutGamesInput[]
    upsert?: librariesUpsertWithWhereUniqueWithoutGamesInput | librariesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: librariesCreateManyGamesInputEnvelope
    set?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    disconnect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    delete?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    update?: librariesUpdateWithWhereUniqueWithoutGamesInput | librariesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: librariesUpdateManyWithWhereWithoutGamesInput | librariesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: librariesScalarWhereInput | librariesScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput> | reviewsCreateWithoutGamesInput[] | reviewsUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutGamesInput | reviewsCreateOrConnectWithoutGamesInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutGamesInput | reviewsUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: reviewsCreateManyGamesInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutGamesInput | reviewsUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutGamesInput | reviewsUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type savesUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput> | savesCreateWithoutGamesInput[] | savesUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: savesCreateOrConnectWithoutGamesInput | savesCreateOrConnectWithoutGamesInput[]
    upsert?: savesUpsertWithWhereUniqueWithoutGamesInput | savesUpsertWithWhereUniqueWithoutGamesInput[]
    createMany?: savesCreateManyGamesInputEnvelope
    set?: savesWhereUniqueInput | savesWhereUniqueInput[]
    disconnect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    delete?: savesWhereUniqueInput | savesWhereUniqueInput[]
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    update?: savesUpdateWithWhereUniqueWithoutGamesInput | savesUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: savesUpdateManyWithWhereWithoutGamesInput | savesUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: savesScalarWhereInput | savesScalarWhereInput[]
  }

  export type gamesCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<gamesCreateWithoutLibrariesInput, gamesUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutLibrariesInput
    connect?: gamesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<usersCreateWithoutLibrariesInput, usersUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLibrariesInput
    connect?: usersWhereUniqueInput
  }

  export type Enumown_typeFieldUpdateOperationsInput = {
    set?: $Enums.own_type
  }

  export type NullableEnumdownload_typeFieldUpdateOperationsInput = {
    set?: $Enums.download_type | null
  }

  export type gamesUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<gamesCreateWithoutLibrariesInput, gamesUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutLibrariesInput
    upsert?: gamesUpsertWithoutLibrariesInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutLibrariesInput, gamesUpdateWithoutLibrariesInput>, gamesUncheckedUpdateWithoutLibrariesInput>
  }

  export type usersUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<usersCreateWithoutLibrariesInput, usersUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLibrariesInput
    upsert?: usersUpsertWithoutLibrariesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLibrariesInput, usersUpdateWithoutLibrariesInput>, usersUncheckedUpdateWithoutLibrariesInput>
  }

  export type gamesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<gamesCreateWithoutReviewsInput, gamesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutReviewsInput
    connect?: gamesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type gamesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<gamesCreateWithoutReviewsInput, gamesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: gamesCreateOrConnectWithoutReviewsInput
    upsert?: gamesUpsertWithoutReviewsInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutReviewsInput, gamesUpdateWithoutReviewsInput>, gamesUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type gamesCreateNestedOneWithoutSavesInput = {
    create?: XOR<gamesCreateWithoutSavesInput, gamesUncheckedCreateWithoutSavesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutSavesInput
    connect?: gamesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSavesInput = {
    create?: XOR<usersCreateWithoutSavesInput, usersUncheckedCreateWithoutSavesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSavesInput
    connect?: usersWhereUniqueInput
  }

  export type gamesUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<gamesCreateWithoutSavesInput, gamesUncheckedCreateWithoutSavesInput>
    connectOrCreate?: gamesCreateOrConnectWithoutSavesInput
    upsert?: gamesUpsertWithoutSavesInput
    connect?: gamesWhereUniqueInput
    update?: XOR<XOR<gamesUpdateToOneWithWhereWithoutSavesInput, gamesUpdateWithoutSavesInput>, gamesUncheckedUpdateWithoutSavesInput>
  }

  export type usersUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<usersCreateWithoutSavesInput, usersUncheckedCreateWithoutSavesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSavesInput
    upsert?: usersUpsertWithoutSavesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSavesInput, usersUpdateWithoutSavesInput>, usersUncheckedUpdateWithoutSavesInput>
  }

  export type game_tag_connectionCreateNestedManyWithoutTagsInput = {
    create?: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput> | game_tag_connectionCreateWithoutTagsInput[] | game_tag_connectionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutTagsInput | game_tag_connectionCreateOrConnectWithoutTagsInput[]
    createMany?: game_tag_connectionCreateManyTagsInputEnvelope
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
  }

  export type game_tag_connectionUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput> | game_tag_connectionCreateWithoutTagsInput[] | game_tag_connectionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutTagsInput | game_tag_connectionCreateOrConnectWithoutTagsInput[]
    createMany?: game_tag_connectionCreateManyTagsInputEnvelope
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
  }

  export type game_tag_connectionUpdateManyWithoutTagsNestedInput = {
    create?: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput> | game_tag_connectionCreateWithoutTagsInput[] | game_tag_connectionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutTagsInput | game_tag_connectionCreateOrConnectWithoutTagsInput[]
    upsert?: game_tag_connectionUpsertWithWhereUniqueWithoutTagsInput | game_tag_connectionUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: game_tag_connectionCreateManyTagsInputEnvelope
    set?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    disconnect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    delete?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    update?: game_tag_connectionUpdateWithWhereUniqueWithoutTagsInput | game_tag_connectionUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: game_tag_connectionUpdateManyWithWhereWithoutTagsInput | game_tag_connectionUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
  }

  export type game_tag_connectionUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput> | game_tag_connectionCreateWithoutTagsInput[] | game_tag_connectionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: game_tag_connectionCreateOrConnectWithoutTagsInput | game_tag_connectionCreateOrConnectWithoutTagsInput[]
    upsert?: game_tag_connectionUpsertWithWhereUniqueWithoutTagsInput | game_tag_connectionUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: game_tag_connectionCreateManyTagsInputEnvelope
    set?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    disconnect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    delete?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    connect?: game_tag_connectionWhereUniqueInput | game_tag_connectionWhereUniqueInput[]
    update?: game_tag_connectionUpdateWithWhereUniqueWithoutTagsInput | game_tag_connectionUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: game_tag_connectionUpdateManyWithWhereWithoutTagsInput | game_tag_connectionUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
  }

  export type achievementsCreateNestedOneWithoutUser_achieve_connectionInput = {
    create?: XOR<achievementsCreateWithoutUser_achieve_connectionInput, achievementsUncheckedCreateWithoutUser_achieve_connectionInput>
    connectOrCreate?: achievementsCreateOrConnectWithoutUser_achieve_connectionInput
    connect?: achievementsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_achieve_connectionInput = {
    create?: XOR<usersCreateWithoutUser_achieve_connectionInput, usersUncheckedCreateWithoutUser_achieve_connectionInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_achieve_connectionInput
    connect?: usersWhereUniqueInput
  }

  export type achievementsUpdateOneRequiredWithoutUser_achieve_connectionNestedInput = {
    create?: XOR<achievementsCreateWithoutUser_achieve_connectionInput, achievementsUncheckedCreateWithoutUser_achieve_connectionInput>
    connectOrCreate?: achievementsCreateOrConnectWithoutUser_achieve_connectionInput
    upsert?: achievementsUpsertWithoutUser_achieve_connectionInput
    connect?: achievementsWhereUniqueInput
    update?: XOR<XOR<achievementsUpdateToOneWithWhereWithoutUser_achieve_connectionInput, achievementsUpdateWithoutUser_achieve_connectionInput>, achievementsUncheckedUpdateWithoutUser_achieve_connectionInput>
  }

  export type usersUpdateOneRequiredWithoutUser_achieve_connectionNestedInput = {
    create?: XOR<usersCreateWithoutUser_achieve_connectionInput, usersUncheckedCreateWithoutUser_achieve_connectionInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_achieve_connectionInput
    upsert?: usersUpsertWithoutUser_achieve_connectionInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_achieve_connectionInput, usersUpdateWithoutUser_achieve_connectionInput>, usersUncheckedUpdateWithoutUser_achieve_connectionInput>
  }

  export type friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput> | friendsCreateWithoutUsers_friends_friend_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_friend_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput> | friendsCreateWithoutUsers_friends_user_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_user_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type librariesCreateNestedManyWithoutUsersInput = {
    create?: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput> | librariesCreateWithoutUsersInput[] | librariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutUsersInput | librariesCreateOrConnectWithoutUsersInput[]
    createMany?: librariesCreateManyUsersInputEnvelope
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type savesCreateNestedManyWithoutUsersInput = {
    create?: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput> | savesCreateWithoutUsersInput[] | savesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: savesCreateOrConnectWithoutUsersInput | savesCreateOrConnectWithoutUsersInput[]
    createMany?: savesCreateManyUsersInputEnvelope
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
  }

  export type user_achieve_connectionCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput> | user_achieve_connectionCreateWithoutUsersInput[] | user_achieve_connectionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutUsersInput | user_achieve_connectionCreateOrConnectWithoutUsersInput[]
    createMany?: user_achieve_connectionCreateManyUsersInputEnvelope
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput> | friendsCreateWithoutUsers_friends_friend_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_friend_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput> | friendsCreateWithoutUsers_friends_user_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_user_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type librariesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput> | librariesCreateWithoutUsersInput[] | librariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutUsersInput | librariesCreateOrConnectWithoutUsersInput[]
    createMany?: librariesCreateManyUsersInputEnvelope
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type savesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput> | savesCreateWithoutUsersInput[] | savesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: savesCreateOrConnectWithoutUsersInput | savesCreateOrConnectWithoutUsersInput[]
    createMany?: savesCreateManyUsersInputEnvelope
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
  }

  export type user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput> | user_achieve_connectionCreateWithoutUsersInput[] | user_achieve_connectionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutUsersInput | user_achieve_connectionCreateOrConnectWithoutUsersInput[]
    createMany?: user_achieve_connectionCreateManyUsersInputEnvelope
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput> | friendsCreateWithoutUsers_friends_friend_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_friend_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_friend_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_friend_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_friend_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_friend_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_friend_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_friend_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput> | friendsCreateWithoutUsers_friends_user_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_user_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_user_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_user_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_user_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_user_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_user_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_user_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type librariesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput> | librariesCreateWithoutUsersInput[] | librariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutUsersInput | librariesCreateOrConnectWithoutUsersInput[]
    upsert?: librariesUpsertWithWhereUniqueWithoutUsersInput | librariesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: librariesCreateManyUsersInputEnvelope
    set?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    disconnect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    delete?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    update?: librariesUpdateWithWhereUniqueWithoutUsersInput | librariesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: librariesUpdateManyWithWhereWithoutUsersInput | librariesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: librariesScalarWhereInput | librariesScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type savesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput> | savesCreateWithoutUsersInput[] | savesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: savesCreateOrConnectWithoutUsersInput | savesCreateOrConnectWithoutUsersInput[]
    upsert?: savesUpsertWithWhereUniqueWithoutUsersInput | savesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: savesCreateManyUsersInputEnvelope
    set?: savesWhereUniqueInput | savesWhereUniqueInput[]
    disconnect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    delete?: savesWhereUniqueInput | savesWhereUniqueInput[]
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    update?: savesUpdateWithWhereUniqueWithoutUsersInput | savesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: savesUpdateManyWithWhereWithoutUsersInput | savesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: savesScalarWhereInput | savesScalarWhereInput[]
  }

  export type user_achieve_connectionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput> | user_achieve_connectionCreateWithoutUsersInput[] | user_achieve_connectionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutUsersInput | user_achieve_connectionCreateOrConnectWithoutUsersInput[]
    upsert?: user_achieve_connectionUpsertWithWhereUniqueWithoutUsersInput | user_achieve_connectionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_achieve_connectionCreateManyUsersInputEnvelope
    set?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    disconnect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    delete?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    update?: user_achieve_connectionUpdateWithWhereUniqueWithoutUsersInput | user_achieve_connectionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_achieve_connectionUpdateManyWithWhereWithoutUsersInput | user_achieve_connectionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput> | friendsCreateWithoutUsers_friends_friend_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_friend_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_friend_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_friend_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_friend_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_friend_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_friend_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_friend_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput> | friendsCreateWithoutUsers_friends_user_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_user_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_user_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_user_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_user_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_user_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_user_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_user_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type librariesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput> | librariesCreateWithoutUsersInput[] | librariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librariesCreateOrConnectWithoutUsersInput | librariesCreateOrConnectWithoutUsersInput[]
    upsert?: librariesUpsertWithWhereUniqueWithoutUsersInput | librariesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: librariesCreateManyUsersInputEnvelope
    set?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    disconnect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    delete?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    connect?: librariesWhereUniqueInput | librariesWhereUniqueInput[]
    update?: librariesUpdateWithWhereUniqueWithoutUsersInput | librariesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: librariesUpdateManyWithWhereWithoutUsersInput | librariesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: librariesScalarWhereInput | librariesScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type savesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput> | savesCreateWithoutUsersInput[] | savesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: savesCreateOrConnectWithoutUsersInput | savesCreateOrConnectWithoutUsersInput[]
    upsert?: savesUpsertWithWhereUniqueWithoutUsersInput | savesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: savesCreateManyUsersInputEnvelope
    set?: savesWhereUniqueInput | savesWhereUniqueInput[]
    disconnect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    delete?: savesWhereUniqueInput | savesWhereUniqueInput[]
    connect?: savesWhereUniqueInput | savesWhereUniqueInput[]
    update?: savesUpdateWithWhereUniqueWithoutUsersInput | savesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: savesUpdateManyWithWhereWithoutUsersInput | savesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: savesScalarWhereInput | savesScalarWhereInput[]
  }

  export type user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput> | user_achieve_connectionCreateWithoutUsersInput[] | user_achieve_connectionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_achieve_connectionCreateOrConnectWithoutUsersInput | user_achieve_connectionCreateOrConnectWithoutUsersInput[]
    upsert?: user_achieve_connectionUpsertWithWhereUniqueWithoutUsersInput | user_achieve_connectionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_achieve_connectionCreateManyUsersInputEnvelope
    set?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    disconnect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    delete?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    connect?: user_achieve_connectionWhereUniqueInput | user_achieve_connectionWhereUniqueInput[]
    update?: user_achieve_connectionUpdateWithWhereUniqueWithoutUsersInput | user_achieve_connectionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_achieve_connectionUpdateManyWithWhereWithoutUsersInput | user_achieve_connectionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumdev_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.dev_type | Enumdev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdev_typeFilter<$PrismaModel> | $Enums.dev_type
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumdev_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dev_type | Enumdev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dev_type[] | ListEnumdev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdev_typeWithAggregatesFilter<$PrismaModel> | $Enums.dev_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdev_typeFilter<$PrismaModel>
    _max?: NestedEnumdev_typeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumev_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ev_type | Enumev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumev_typeFilter<$PrismaModel> | $Enums.ev_type
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumev_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ev_type | Enumev_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ev_type[] | ListEnumev_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumev_typeWithAggregatesFilter<$PrismaModel> | $Enums.ev_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumev_typeFilter<$PrismaModel>
    _max?: NestedEnumev_typeFilter<$PrismaModel>
  }

  export type NestedEnumfr_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.fr_status | Enumfr_statusFieldRefInput<$PrismaModel>
    in?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumfr_statusFilter<$PrismaModel> | $Enums.fr_status
  }

  export type NestedEnumfr_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fr_status | Enumfr_statusFieldRefInput<$PrismaModel>
    in?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.fr_status[] | ListEnumfr_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumfr_statusWithAggregatesFilter<$PrismaModel> | $Enums.fr_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfr_statusFilter<$PrismaModel>
    _max?: NestedEnumfr_statusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumown_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.own_type | Enumown_typeFieldRefInput<$PrismaModel>
    in?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumown_typeFilter<$PrismaModel> | $Enums.own_type
  }

  export type NestedEnumdownload_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.download_type | Enumdownload_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdownload_typeNullableFilter<$PrismaModel> | $Enums.download_type | null
  }

  export type NestedEnumown_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.own_type | Enumown_typeFieldRefInput<$PrismaModel>
    in?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.own_type[] | ListEnumown_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumown_typeWithAggregatesFilter<$PrismaModel> | $Enums.own_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumown_typeFilter<$PrismaModel>
    _max?: NestedEnumown_typeFilter<$PrismaModel>
  }

  export type NestedEnumdownload_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.download_type | Enumdownload_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.download_type[] | ListEnumdownload_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdownload_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.download_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdownload_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumdownload_typeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type gamesCreateWithoutAchievementsInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutAchievementsInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutAchievementsInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutAchievementsInput, gamesUncheckedCreateWithoutAchievementsInput>
  }

  export type user_achieve_connectionCreateWithoutAchievementsInput = {
    users: usersCreateNestedOneWithoutUser_achieve_connectionInput
  }

  export type user_achieve_connectionUncheckedCreateWithoutAchievementsInput = {
    user_id: number
  }

  export type user_achieve_connectionCreateOrConnectWithoutAchievementsInput = {
    where: user_achieve_connectionWhereUniqueInput
    create: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput>
  }

  export type user_achieve_connectionCreateManyAchievementsInputEnvelope = {
    data: user_achieve_connectionCreateManyAchievementsInput | user_achieve_connectionCreateManyAchievementsInput[]
    skipDuplicates?: boolean
  }

  export type gamesUpsertWithoutAchievementsInput = {
    update: XOR<gamesUpdateWithoutAchievementsInput, gamesUncheckedUpdateWithoutAchievementsInput>
    create: XOR<gamesCreateWithoutAchievementsInput, gamesUncheckedCreateWithoutAchievementsInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutAchievementsInput, gamesUncheckedUpdateWithoutAchievementsInput>
  }

  export type gamesUpdateWithoutAchievementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type user_achieve_connectionUpsertWithWhereUniqueWithoutAchievementsInput = {
    where: user_achieve_connectionWhereUniqueInput
    update: XOR<user_achieve_connectionUpdateWithoutAchievementsInput, user_achieve_connectionUncheckedUpdateWithoutAchievementsInput>
    create: XOR<user_achieve_connectionCreateWithoutAchievementsInput, user_achieve_connectionUncheckedCreateWithoutAchievementsInput>
  }

  export type user_achieve_connectionUpdateWithWhereUniqueWithoutAchievementsInput = {
    where: user_achieve_connectionWhereUniqueInput
    data: XOR<user_achieve_connectionUpdateWithoutAchievementsInput, user_achieve_connectionUncheckedUpdateWithoutAchievementsInput>
  }

  export type user_achieve_connectionUpdateManyWithWhereWithoutAchievementsInput = {
    where: user_achieve_connectionScalarWhereInput
    data: XOR<user_achieve_connectionUpdateManyMutationInput, user_achieve_connectionUncheckedUpdateManyWithoutAchievementsInput>
  }

  export type user_achieve_connectionScalarWhereInput = {
    AND?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
    OR?: user_achieve_connectionScalarWhereInput[]
    NOT?: user_achieve_connectionScalarWhereInput | user_achieve_connectionScalarWhereInput[]
    user_id?: IntFilter<"user_achieve_connection"> | number
    achievement_id?: IntFilter<"user_achieve_connection"> | number
  }

  export type game_dev_connectionCreateWithoutDevsInput = {
    games: gamesCreateNestedOneWithoutGame_dev_connectionInput
  }

  export type game_dev_connectionUncheckedCreateWithoutDevsInput = {
    game_id: number
  }

  export type game_dev_connectionCreateOrConnectWithoutDevsInput = {
    where: game_dev_connectionWhereUniqueInput
    create: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput>
  }

  export type game_dev_connectionCreateManyDevsInputEnvelope = {
    data: game_dev_connectionCreateManyDevsInput | game_dev_connectionCreateManyDevsInput[]
    skipDuplicates?: boolean
  }

  export type game_dev_connectionUpsertWithWhereUniqueWithoutDevsInput = {
    where: game_dev_connectionWhereUniqueInput
    update: XOR<game_dev_connectionUpdateWithoutDevsInput, game_dev_connectionUncheckedUpdateWithoutDevsInput>
    create: XOR<game_dev_connectionCreateWithoutDevsInput, game_dev_connectionUncheckedCreateWithoutDevsInput>
  }

  export type game_dev_connectionUpdateWithWhereUniqueWithoutDevsInput = {
    where: game_dev_connectionWhereUniqueInput
    data: XOR<game_dev_connectionUpdateWithoutDevsInput, game_dev_connectionUncheckedUpdateWithoutDevsInput>
  }

  export type game_dev_connectionUpdateManyWithWhereWithoutDevsInput = {
    where: game_dev_connectionScalarWhereInput
    data: XOR<game_dev_connectionUpdateManyMutationInput, game_dev_connectionUncheckedUpdateManyWithoutDevsInput>
  }

  export type game_dev_connectionScalarWhereInput = {
    AND?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
    OR?: game_dev_connectionScalarWhereInput[]
    NOT?: game_dev_connectionScalarWhereInput | game_dev_connectionScalarWhereInput[]
    game_id?: IntFilter<"game_dev_connection"> | number
    dev_id?: IntFilter<"game_dev_connection"> | number
  }

  export type gamesCreateWithoutEventsInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutEventsInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutEventsInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutEventsInput, gamesUncheckedCreateWithoutEventsInput>
  }

  export type gamesUpsertWithoutEventsInput = {
    update: XOR<gamesUpdateWithoutEventsInput, gamesUncheckedUpdateWithoutEventsInput>
    create: XOR<gamesCreateWithoutEventsInput, gamesUncheckedCreateWithoutEventsInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutEventsInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutEventsInput, gamesUncheckedUpdateWithoutEventsInput>
  }

  export type gamesUpdateWithoutEventsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type usersCreateWithoutFriends_friends_friend_idTousersInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFriends_friends_friend_idTousersInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFriends_friends_friend_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends_friends_friend_idTousersInput, usersUncheckedCreateWithoutFriends_friends_friend_idTousersInput>
  }

  export type usersCreateWithoutFriends_friends_user_idTousersInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFriends_friends_user_idTousersInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFriends_friends_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends_friends_user_idTousersInput, usersUncheckedCreateWithoutFriends_friends_user_idTousersInput>
  }

  export type usersUpsertWithoutFriends_friends_friend_idTousersInput = {
    update: XOR<usersUpdateWithoutFriends_friends_friend_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_friend_idTousersInput>
    create: XOR<usersCreateWithoutFriends_friends_friend_idTousersInput, usersUncheckedCreateWithoutFriends_friends_friend_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends_friends_friend_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends_friends_friend_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_friend_idTousersInput>
  }

  export type usersUpdateWithoutFriends_friends_friend_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends_friends_friend_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutFriends_friends_user_idTousersInput = {
    update: XOR<usersUpdateWithoutFriends_friends_user_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_user_idTousersInput>
    create: XOR<usersCreateWithoutFriends_friends_user_idTousersInput, usersUncheckedCreateWithoutFriends_friends_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends_friends_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends_friends_user_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_user_idTousersInput>
  }

  export type usersUpdateWithoutFriends_friends_user_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends_friends_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type devsCreateWithoutGame_dev_connectionInput = {
    dev_name: string
    contacts: JsonNullValueInput | InputJsonValue
    logo?: string | null
    dev_type: $Enums.dev_type
  }

  export type devsUncheckedCreateWithoutGame_dev_connectionInput = {
    id?: number
    dev_name: string
    contacts: JsonNullValueInput | InputJsonValue
    logo?: string | null
    dev_type: $Enums.dev_type
  }

  export type devsCreateOrConnectWithoutGame_dev_connectionInput = {
    where: devsWhereUniqueInput
    create: XOR<devsCreateWithoutGame_dev_connectionInput, devsUncheckedCreateWithoutGame_dev_connectionInput>
  }

  export type gamesCreateWithoutGame_dev_connectionInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutGame_dev_connectionInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutGame_dev_connectionInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutGame_dev_connectionInput, gamesUncheckedCreateWithoutGame_dev_connectionInput>
  }

  export type devsUpsertWithoutGame_dev_connectionInput = {
    update: XOR<devsUpdateWithoutGame_dev_connectionInput, devsUncheckedUpdateWithoutGame_dev_connectionInput>
    create: XOR<devsCreateWithoutGame_dev_connectionInput, devsUncheckedCreateWithoutGame_dev_connectionInput>
    where?: devsWhereInput
  }

  export type devsUpdateToOneWithWhereWithoutGame_dev_connectionInput = {
    where?: devsWhereInput
    data: XOR<devsUpdateWithoutGame_dev_connectionInput, devsUncheckedUpdateWithoutGame_dev_connectionInput>
  }

  export type devsUpdateWithoutGame_dev_connectionInput = {
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
  }

  export type devsUncheckedUpdateWithoutGame_dev_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dev_name?: StringFieldUpdateOperationsInput | string
    contacts?: JsonNullValueInput | InputJsonValue
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    dev_type?: Enumdev_typeFieldUpdateOperationsInput | $Enums.dev_type
  }

  export type gamesUpsertWithoutGame_dev_connectionInput = {
    update: XOR<gamesUpdateWithoutGame_dev_connectionInput, gamesUncheckedUpdateWithoutGame_dev_connectionInput>
    create: XOR<gamesCreateWithoutGame_dev_connectionInput, gamesUncheckedCreateWithoutGame_dev_connectionInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutGame_dev_connectionInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutGame_dev_connectionInput, gamesUncheckedUpdateWithoutGame_dev_connectionInput>
  }

  export type gamesUpdateWithoutGame_dev_connectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutGame_dev_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesCreateWithoutGame_newsInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutGame_newsInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutGame_newsInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutGame_newsInput, gamesUncheckedCreateWithoutGame_newsInput>
  }

  export type gamesUpsertWithoutGame_newsInput = {
    update: XOR<gamesUpdateWithoutGame_newsInput, gamesUncheckedUpdateWithoutGame_newsInput>
    create: XOR<gamesCreateWithoutGame_newsInput, gamesUncheckedCreateWithoutGame_newsInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutGame_newsInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutGame_newsInput, gamesUncheckedUpdateWithoutGame_newsInput>
  }

  export type gamesUpdateWithoutGame_newsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutGame_newsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesCreateWithoutGame_tag_connectionInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutGame_tag_connectionInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutGame_tag_connectionInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutGame_tag_connectionInput, gamesUncheckedCreateWithoutGame_tag_connectionInput>
  }

  export type tagsCreateWithoutGame_tag_connectionInput = {
    tag_name: string
  }

  export type tagsUncheckedCreateWithoutGame_tag_connectionInput = {
    id?: number
    tag_name: string
  }

  export type tagsCreateOrConnectWithoutGame_tag_connectionInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutGame_tag_connectionInput, tagsUncheckedCreateWithoutGame_tag_connectionInput>
  }

  export type gamesUpsertWithoutGame_tag_connectionInput = {
    update: XOR<gamesUpdateWithoutGame_tag_connectionInput, gamesUncheckedUpdateWithoutGame_tag_connectionInput>
    create: XOR<gamesCreateWithoutGame_tag_connectionInput, gamesUncheckedCreateWithoutGame_tag_connectionInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutGame_tag_connectionInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutGame_tag_connectionInput, gamesUncheckedUpdateWithoutGame_tag_connectionInput>
  }

  export type gamesUpdateWithoutGame_tag_connectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutGame_tag_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type tagsUpsertWithoutGame_tag_connectionInput = {
    update: XOR<tagsUpdateWithoutGame_tag_connectionInput, tagsUncheckedUpdateWithoutGame_tag_connectionInput>
    create: XOR<tagsCreateWithoutGame_tag_connectionInput, tagsUncheckedCreateWithoutGame_tag_connectionInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutGame_tag_connectionInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutGame_tag_connectionInput, tagsUncheckedUpdateWithoutGame_tag_connectionInput>
  }

  export type tagsUpdateWithoutGame_tag_connectionInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateWithoutGame_tag_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type achievementsCreateWithoutGamesInput = {
    title: string
    icon: string
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutAchievementsInput
  }

  export type achievementsUncheckedCreateWithoutGamesInput = {
    id?: number
    title: string
    icon: string
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutAchievementsInput
  }

  export type achievementsCreateOrConnectWithoutGamesInput = {
    where: achievementsWhereUniqueInput
    create: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput>
  }

  export type achievementsCreateManyGamesInputEnvelope = {
    data: achievementsCreateManyGamesInput | achievementsCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type eventsCreateWithoutGamesInput = {
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
  }

  export type eventsUncheckedCreateWithoutGamesInput = {
    id?: number
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
  }

  export type eventsCreateOrConnectWithoutGamesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput>
  }

  export type eventsCreateManyGamesInputEnvelope = {
    data: eventsCreateManyGamesInput | eventsCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type game_dev_connectionCreateWithoutGamesInput = {
    devs: devsCreateNestedOneWithoutGame_dev_connectionInput
  }

  export type game_dev_connectionUncheckedCreateWithoutGamesInput = {
    dev_id: number
  }

  export type game_dev_connectionCreateOrConnectWithoutGamesInput = {
    where: game_dev_connectionWhereUniqueInput
    create: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput>
  }

  export type game_dev_connectionCreateManyGamesInputEnvelope = {
    data: game_dev_connectionCreateManyGamesInput | game_dev_connectionCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type game_newsCreateWithoutGamesInput = {
    title: string
    content: string
    published_at?: Date | string
  }

  export type game_newsUncheckedCreateWithoutGamesInput = {
    id?: number
    title: string
    content: string
    published_at?: Date | string
  }

  export type game_newsCreateOrConnectWithoutGamesInput = {
    where: game_newsWhereUniqueInput
    create: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput>
  }

  export type game_newsCreateManyGamesInputEnvelope = {
    data: game_newsCreateManyGamesInput | game_newsCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type game_tag_connectionCreateWithoutGamesInput = {
    tags: tagsCreateNestedOneWithoutGame_tag_connectionInput
  }

  export type game_tag_connectionUncheckedCreateWithoutGamesInput = {
    tag_id: number
  }

  export type game_tag_connectionCreateOrConnectWithoutGamesInput = {
    where: game_tag_connectionWhereUniqueInput
    create: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput>
  }

  export type game_tag_connectionCreateManyGamesInputEnvelope = {
    data: game_tag_connectionCreateManyGamesInput | game_tag_connectionCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type gamesCreateWithoutOther_gamesInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutOther_gamesInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutOther_gamesInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutOther_gamesInput, gamesUncheckedCreateWithoutOther_gamesInput>
  }

  export type gamesCreateWithoutGamesInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutGamesInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutGamesInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput>
  }

  export type gamesCreateManyGamesInputEnvelope = {
    data: gamesCreateManyGamesInput | gamesCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type librariesCreateWithoutGamesInput = {
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
    users: usersCreateNestedOneWithoutLibrariesInput
  }

  export type librariesUncheckedCreateWithoutGamesInput = {
    id?: number
    user_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type librariesCreateOrConnectWithoutGamesInput = {
    where: librariesWhereUniqueInput
    create: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput>
  }

  export type librariesCreateManyGamesInputEnvelope = {
    data: librariesCreateManyGamesInput | librariesCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutGamesInput = {
    rating: number
    content?: string | null
    users: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutGamesInput = {
    id?: number
    user_id: number
    rating: number
    content?: string | null
  }

  export type reviewsCreateOrConnectWithoutGamesInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput>
  }

  export type reviewsCreateManyGamesInputEnvelope = {
    data: reviewsCreateManyGamesInput | reviewsCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type savesCreateWithoutGamesInput = {
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    users: usersCreateNestedOneWithoutSavesInput
  }

  export type savesUncheckedCreateWithoutGamesInput = {
    id?: number
    user_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type savesCreateOrConnectWithoutGamesInput = {
    where: savesWhereUniqueInput
    create: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput>
  }

  export type savesCreateManyGamesInputEnvelope = {
    data: savesCreateManyGamesInput | savesCreateManyGamesInput[]
    skipDuplicates?: boolean
  }

  export type achievementsUpsertWithWhereUniqueWithoutGamesInput = {
    where: achievementsWhereUniqueInput
    update: XOR<achievementsUpdateWithoutGamesInput, achievementsUncheckedUpdateWithoutGamesInput>
    create: XOR<achievementsCreateWithoutGamesInput, achievementsUncheckedCreateWithoutGamesInput>
  }

  export type achievementsUpdateWithWhereUniqueWithoutGamesInput = {
    where: achievementsWhereUniqueInput
    data: XOR<achievementsUpdateWithoutGamesInput, achievementsUncheckedUpdateWithoutGamesInput>
  }

  export type achievementsUpdateManyWithWhereWithoutGamesInput = {
    where: achievementsScalarWhereInput
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyWithoutGamesInput>
  }

  export type achievementsScalarWhereInput = {
    AND?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
    OR?: achievementsScalarWhereInput[]
    NOT?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
    id?: IntFilter<"achievements"> | number
    game_id?: IntFilter<"achievements"> | number
    title?: StringFilter<"achievements"> | string
    icon?: StringFilter<"achievements"> | string
  }

  export type eventsUpsertWithWhereUniqueWithoutGamesInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutGamesInput, eventsUncheckedUpdateWithoutGamesInput>
    create: XOR<eventsCreateWithoutGamesInput, eventsUncheckedCreateWithoutGamesInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutGamesInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutGamesInput, eventsUncheckedUpdateWithoutGamesInput>
  }

  export type eventsUpdateManyWithWhereWithoutGamesInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutGamesInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    game_id?: IntFilter<"events"> | number
    discount?: DecimalNullableFilter<"events"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    type?: Enumev_typeFilter<"events"> | $Enums.ev_type
  }

  export type game_dev_connectionUpsertWithWhereUniqueWithoutGamesInput = {
    where: game_dev_connectionWhereUniqueInput
    update: XOR<game_dev_connectionUpdateWithoutGamesInput, game_dev_connectionUncheckedUpdateWithoutGamesInput>
    create: XOR<game_dev_connectionCreateWithoutGamesInput, game_dev_connectionUncheckedCreateWithoutGamesInput>
  }

  export type game_dev_connectionUpdateWithWhereUniqueWithoutGamesInput = {
    where: game_dev_connectionWhereUniqueInput
    data: XOR<game_dev_connectionUpdateWithoutGamesInput, game_dev_connectionUncheckedUpdateWithoutGamesInput>
  }

  export type game_dev_connectionUpdateManyWithWhereWithoutGamesInput = {
    where: game_dev_connectionScalarWhereInput
    data: XOR<game_dev_connectionUpdateManyMutationInput, game_dev_connectionUncheckedUpdateManyWithoutGamesInput>
  }

  export type game_newsUpsertWithWhereUniqueWithoutGamesInput = {
    where: game_newsWhereUniqueInput
    update: XOR<game_newsUpdateWithoutGamesInput, game_newsUncheckedUpdateWithoutGamesInput>
    create: XOR<game_newsCreateWithoutGamesInput, game_newsUncheckedCreateWithoutGamesInput>
  }

  export type game_newsUpdateWithWhereUniqueWithoutGamesInput = {
    where: game_newsWhereUniqueInput
    data: XOR<game_newsUpdateWithoutGamesInput, game_newsUncheckedUpdateWithoutGamesInput>
  }

  export type game_newsUpdateManyWithWhereWithoutGamesInput = {
    where: game_newsScalarWhereInput
    data: XOR<game_newsUpdateManyMutationInput, game_newsUncheckedUpdateManyWithoutGamesInput>
  }

  export type game_newsScalarWhereInput = {
    AND?: game_newsScalarWhereInput | game_newsScalarWhereInput[]
    OR?: game_newsScalarWhereInput[]
    NOT?: game_newsScalarWhereInput | game_newsScalarWhereInput[]
    id?: IntFilter<"game_news"> | number
    game_id?: IntFilter<"game_news"> | number
    title?: StringFilter<"game_news"> | string
    content?: StringFilter<"game_news"> | string
    published_at?: DateTimeFilter<"game_news"> | Date | string
  }

  export type game_tag_connectionUpsertWithWhereUniqueWithoutGamesInput = {
    where: game_tag_connectionWhereUniqueInput
    update: XOR<game_tag_connectionUpdateWithoutGamesInput, game_tag_connectionUncheckedUpdateWithoutGamesInput>
    create: XOR<game_tag_connectionCreateWithoutGamesInput, game_tag_connectionUncheckedCreateWithoutGamesInput>
  }

  export type game_tag_connectionUpdateWithWhereUniqueWithoutGamesInput = {
    where: game_tag_connectionWhereUniqueInput
    data: XOR<game_tag_connectionUpdateWithoutGamesInput, game_tag_connectionUncheckedUpdateWithoutGamesInput>
  }

  export type game_tag_connectionUpdateManyWithWhereWithoutGamesInput = {
    where: game_tag_connectionScalarWhereInput
    data: XOR<game_tag_connectionUpdateManyMutationInput, game_tag_connectionUncheckedUpdateManyWithoutGamesInput>
  }

  export type game_tag_connectionScalarWhereInput = {
    AND?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
    OR?: game_tag_connectionScalarWhereInput[]
    NOT?: game_tag_connectionScalarWhereInput | game_tag_connectionScalarWhereInput[]
    game_id?: IntFilter<"game_tag_connection"> | number
    tag_id?: IntFilter<"game_tag_connection"> | number
  }

  export type gamesUpsertWithoutOther_gamesInput = {
    update: XOR<gamesUpdateWithoutOther_gamesInput, gamesUncheckedUpdateWithoutOther_gamesInput>
    create: XOR<gamesCreateWithoutOther_gamesInput, gamesUncheckedCreateWithoutOther_gamesInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutOther_gamesInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutOther_gamesInput, gamesUncheckedUpdateWithoutOther_gamesInput>
  }

  export type gamesUpdateWithoutOther_gamesInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutOther_gamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesUpsertWithWhereUniqueWithoutGamesInput = {
    where: gamesWhereUniqueInput
    update: XOR<gamesUpdateWithoutGamesInput, gamesUncheckedUpdateWithoutGamesInput>
    create: XOR<gamesCreateWithoutGamesInput, gamesUncheckedCreateWithoutGamesInput>
  }

  export type gamesUpdateWithWhereUniqueWithoutGamesInput = {
    where: gamesWhereUniqueInput
    data: XOR<gamesUpdateWithoutGamesInput, gamesUncheckedUpdateWithoutGamesInput>
  }

  export type gamesUpdateManyWithWhereWithoutGamesInput = {
    where: gamesScalarWhereInput
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyWithoutGamesInput>
  }

  export type gamesScalarWhereInput = {
    AND?: gamesScalarWhereInput | gamesScalarWhereInput[]
    OR?: gamesScalarWhereInput[]
    NOT?: gamesScalarWhereInput | gamesScalarWhereInput[]
    id?: IntFilter<"games"> | number
    title?: StringFilter<"games"> | string
    price?: DecimalNullableFilter<"games"> | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFilter<"games"> | Date | string
    age_rating?: StringFilter<"games"> | string
    cover?: StringFilter<"games"> | string
    description?: StringNullableFilter<"games"> | string | null
    system_requirements?: JsonFilter<"games">
    base_game_id?: IntNullableFilter<"games"> | number | null
    is_multiplayer?: BoolFilter<"games"> | boolean
  }

  export type librariesUpsertWithWhereUniqueWithoutGamesInput = {
    where: librariesWhereUniqueInput
    update: XOR<librariesUpdateWithoutGamesInput, librariesUncheckedUpdateWithoutGamesInput>
    create: XOR<librariesCreateWithoutGamesInput, librariesUncheckedCreateWithoutGamesInput>
  }

  export type librariesUpdateWithWhereUniqueWithoutGamesInput = {
    where: librariesWhereUniqueInput
    data: XOR<librariesUpdateWithoutGamesInput, librariesUncheckedUpdateWithoutGamesInput>
  }

  export type librariesUpdateManyWithWhereWithoutGamesInput = {
    where: librariesScalarWhereInput
    data: XOR<librariesUpdateManyMutationInput, librariesUncheckedUpdateManyWithoutGamesInput>
  }

  export type librariesScalarWhereInput = {
    AND?: librariesScalarWhereInput | librariesScalarWhereInput[]
    OR?: librariesScalarWhereInput[]
    NOT?: librariesScalarWhereInput | librariesScalarWhereInput[]
    id?: IntFilter<"libraries"> | number
    user_id?: IntFilter<"libraries"> | number
    game_id?: IntFilter<"libraries"> | number
    hours_played?: IntFilter<"libraries"> | number
    ownership?: Enumown_typeFilter<"libraries"> | $Enums.own_type
    download_status?: Enumdownload_typeNullableFilter<"libraries"> | $Enums.download_type | null
  }

  export type reviewsUpsertWithWhereUniqueWithoutGamesInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutGamesInput, reviewsUncheckedUpdateWithoutGamesInput>
    create: XOR<reviewsCreateWithoutGamesInput, reviewsUncheckedCreateWithoutGamesInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutGamesInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutGamesInput, reviewsUncheckedUpdateWithoutGamesInput>
  }

  export type reviewsUpdateManyWithWhereWithoutGamesInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutGamesInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    game_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    content?: StringNullableFilter<"reviews"> | string | null
  }

  export type savesUpsertWithWhereUniqueWithoutGamesInput = {
    where: savesWhereUniqueInput
    update: XOR<savesUpdateWithoutGamesInput, savesUncheckedUpdateWithoutGamesInput>
    create: XOR<savesCreateWithoutGamesInput, savesUncheckedCreateWithoutGamesInput>
  }

  export type savesUpdateWithWhereUniqueWithoutGamesInput = {
    where: savesWhereUniqueInput
    data: XOR<savesUpdateWithoutGamesInput, savesUncheckedUpdateWithoutGamesInput>
  }

  export type savesUpdateManyWithWhereWithoutGamesInput = {
    where: savesScalarWhereInput
    data: XOR<savesUpdateManyMutationInput, savesUncheckedUpdateManyWithoutGamesInput>
  }

  export type savesScalarWhereInput = {
    AND?: savesScalarWhereInput | savesScalarWhereInput[]
    OR?: savesScalarWhereInput[]
    NOT?: savesScalarWhereInput | savesScalarWhereInput[]
    id?: IntFilter<"saves"> | number
    user_id?: IntFilter<"saves"> | number
    game_id?: IntFilter<"saves"> | number
    save_data?: JsonFilter<"saves">
    last_updated?: DateTimeFilter<"saves"> | Date | string
  }

  export type gamesCreateWithoutLibrariesInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutLibrariesInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutLibrariesInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutLibrariesInput, gamesUncheckedCreateWithoutLibrariesInput>
  }

  export type usersCreateWithoutLibrariesInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLibrariesInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLibrariesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLibrariesInput, usersUncheckedCreateWithoutLibrariesInput>
  }

  export type gamesUpsertWithoutLibrariesInput = {
    update: XOR<gamesUpdateWithoutLibrariesInput, gamesUncheckedUpdateWithoutLibrariesInput>
    create: XOR<gamesCreateWithoutLibrariesInput, gamesUncheckedCreateWithoutLibrariesInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutLibrariesInput, gamesUncheckedUpdateWithoutLibrariesInput>
  }

  export type gamesUpdateWithoutLibrariesInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type usersUpsertWithoutLibrariesInput = {
    update: XOR<usersUpdateWithoutLibrariesInput, usersUncheckedUpdateWithoutLibrariesInput>
    create: XOR<usersCreateWithoutLibrariesInput, usersUncheckedCreateWithoutLibrariesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLibrariesInput, usersUncheckedUpdateWithoutLibrariesInput>
  }

  export type usersUpdateWithoutLibrariesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type gamesCreateWithoutReviewsInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    saves?: savesCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    saves?: savesUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutReviewsInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutReviewsInput, gamesUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type gamesUpsertWithoutReviewsInput = {
    update: XOR<gamesUpdateWithoutReviewsInput, gamesUncheckedUpdateWithoutReviewsInput>
    create: XOR<gamesCreateWithoutReviewsInput, gamesUncheckedCreateWithoutReviewsInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutReviewsInput, gamesUncheckedUpdateWithoutReviewsInput>
  }

  export type gamesUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type gamesCreateWithoutSavesInput = {
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
    achievements?: achievementsCreateNestedManyWithoutGamesInput
    events?: eventsCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionCreateNestedManyWithoutGamesInput
    game_news?: game_newsCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionCreateNestedManyWithoutGamesInput
    games?: gamesCreateNestedOneWithoutOther_gamesInput
    other_games?: gamesCreateNestedManyWithoutGamesInput
    libraries?: librariesCreateNestedManyWithoutGamesInput
    reviews?: reviewsCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateWithoutSavesInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    base_game_id?: number | null
    is_multiplayer?: boolean
    achievements?: achievementsUncheckedCreateNestedManyWithoutGamesInput
    events?: eventsUncheckedCreateNestedManyWithoutGamesInput
    game_dev_connection?: game_dev_connectionUncheckedCreateNestedManyWithoutGamesInput
    game_news?: game_newsUncheckedCreateNestedManyWithoutGamesInput
    game_tag_connection?: game_tag_connectionUncheckedCreateNestedManyWithoutGamesInput
    other_games?: gamesUncheckedCreateNestedManyWithoutGamesInput
    libraries?: librariesUncheckedCreateNestedManyWithoutGamesInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesCreateOrConnectWithoutSavesInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutSavesInput, gamesUncheckedCreateWithoutSavesInput>
  }

  export type usersCreateWithoutSavesInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSavesInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    user_achieve_connection?: user_achieve_connectionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSavesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSavesInput, usersUncheckedCreateWithoutSavesInput>
  }

  export type gamesUpsertWithoutSavesInput = {
    update: XOR<gamesUpdateWithoutSavesInput, gamesUncheckedUpdateWithoutSavesInput>
    create: XOR<gamesCreateWithoutSavesInput, gamesUncheckedCreateWithoutSavesInput>
    where?: gamesWhereInput
  }

  export type gamesUpdateToOneWithWhereWithoutSavesInput = {
    where?: gamesWhereInput
    data: XOR<gamesUpdateWithoutSavesInput, gamesUncheckedUpdateWithoutSavesInput>
  }

  export type gamesUpdateWithoutSavesInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    games?: gamesUpdateOneWithoutOther_gamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    base_game_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type usersUpsertWithoutSavesInput = {
    update: XOR<usersUpdateWithoutSavesInput, usersUncheckedUpdateWithoutSavesInput>
    create: XOR<usersCreateWithoutSavesInput, usersUncheckedCreateWithoutSavesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSavesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSavesInput, usersUncheckedUpdateWithoutSavesInput>
  }

  export type usersUpdateWithoutSavesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type game_tag_connectionCreateWithoutTagsInput = {
    games: gamesCreateNestedOneWithoutGame_tag_connectionInput
  }

  export type game_tag_connectionUncheckedCreateWithoutTagsInput = {
    game_id: number
  }

  export type game_tag_connectionCreateOrConnectWithoutTagsInput = {
    where: game_tag_connectionWhereUniqueInput
    create: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput>
  }

  export type game_tag_connectionCreateManyTagsInputEnvelope = {
    data: game_tag_connectionCreateManyTagsInput | game_tag_connectionCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type game_tag_connectionUpsertWithWhereUniqueWithoutTagsInput = {
    where: game_tag_connectionWhereUniqueInput
    update: XOR<game_tag_connectionUpdateWithoutTagsInput, game_tag_connectionUncheckedUpdateWithoutTagsInput>
    create: XOR<game_tag_connectionCreateWithoutTagsInput, game_tag_connectionUncheckedCreateWithoutTagsInput>
  }

  export type game_tag_connectionUpdateWithWhereUniqueWithoutTagsInput = {
    where: game_tag_connectionWhereUniqueInput
    data: XOR<game_tag_connectionUpdateWithoutTagsInput, game_tag_connectionUncheckedUpdateWithoutTagsInput>
  }

  export type game_tag_connectionUpdateManyWithWhereWithoutTagsInput = {
    where: game_tag_connectionScalarWhereInput
    data: XOR<game_tag_connectionUpdateManyMutationInput, game_tag_connectionUncheckedUpdateManyWithoutTagsInput>
  }

  export type achievementsCreateWithoutUser_achieve_connectionInput = {
    title: string
    icon: string
    games: gamesCreateNestedOneWithoutAchievementsInput
  }

  export type achievementsUncheckedCreateWithoutUser_achieve_connectionInput = {
    id?: number
    game_id: number
    title: string
    icon: string
  }

  export type achievementsCreateOrConnectWithoutUser_achieve_connectionInput = {
    where: achievementsWhereUniqueInput
    create: XOR<achievementsCreateWithoutUser_achieve_connectionInput, achievementsUncheckedCreateWithoutUser_achieve_connectionInput>
  }

  export type usersCreateWithoutUser_achieve_connectionInput = {
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    saves?: savesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_achieve_connectionInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    age: number
    region: string
    avatar?: string | null
    created_at?: Date | string | null
    last_login?: Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_friend_idTousersInput
    friends_friends_user_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_user_idTousersInput
    libraries?: librariesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    saves?: savesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_achieve_connectionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_achieve_connectionInput, usersUncheckedCreateWithoutUser_achieve_connectionInput>
  }

  export type achievementsUpsertWithoutUser_achieve_connectionInput = {
    update: XOR<achievementsUpdateWithoutUser_achieve_connectionInput, achievementsUncheckedUpdateWithoutUser_achieve_connectionInput>
    create: XOR<achievementsCreateWithoutUser_achieve_connectionInput, achievementsUncheckedCreateWithoutUser_achieve_connectionInput>
    where?: achievementsWhereInput
  }

  export type achievementsUpdateToOneWithWhereWithoutUser_achieve_connectionInput = {
    where?: achievementsWhereInput
    data: XOR<achievementsUpdateWithoutUser_achieve_connectionInput, achievementsUncheckedUpdateWithoutUser_achieve_connectionInput>
  }

  export type achievementsUpdateWithoutUser_achieve_connectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    games?: gamesUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type achievementsUncheckedUpdateWithoutUser_achieve_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutUser_achieve_connectionInput = {
    update: XOR<usersUpdateWithoutUser_achieve_connectionInput, usersUncheckedUpdateWithoutUser_achieve_connectionInput>
    create: XOR<usersCreateWithoutUser_achieve_connectionInput, usersUncheckedCreateWithoutUser_achieve_connectionInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_achieve_connectionInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_achieve_connectionInput, usersUncheckedUpdateWithoutUser_achieve_connectionInput>
  }

  export type usersUpdateWithoutUser_achieve_connectionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    saves?: savesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_achieve_connectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    friends_friends_friend_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersNestedInput
    friends_friends_user_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    saves?: savesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type friendsCreateWithoutUsers_friends_friend_idTousersInput = {
    status?: $Enums.fr_status
    users_friends_user_idTousers: usersCreateNestedOneWithoutFriends_friends_user_idTousersInput
  }

  export type friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput = {
    user_id: number
    status?: $Enums.fr_status
  }

  export type friendsCreateOrConnectWithoutUsers_friends_friend_idTousersInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput>
  }

  export type friendsCreateManyUsers_friends_friend_idTousersInputEnvelope = {
    data: friendsCreateManyUsers_friends_friend_idTousersInput | friendsCreateManyUsers_friends_friend_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUsers_friends_user_idTousersInput = {
    status?: $Enums.fr_status
    users_friends_friend_idTousers: usersCreateNestedOneWithoutFriends_friends_friend_idTousersInput
  }

  export type friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput = {
    friend_id: number
    status?: $Enums.fr_status
  }

  export type friendsCreateOrConnectWithoutUsers_friends_user_idTousersInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput>
  }

  export type friendsCreateManyUsers_friends_user_idTousersInputEnvelope = {
    data: friendsCreateManyUsers_friends_user_idTousersInput | friendsCreateManyUsers_friends_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type librariesCreateWithoutUsersInput = {
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
    games: gamesCreateNestedOneWithoutLibrariesInput
  }

  export type librariesUncheckedCreateWithoutUsersInput = {
    id?: number
    game_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type librariesCreateOrConnectWithoutUsersInput = {
    where: librariesWhereUniqueInput
    create: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput>
  }

  export type librariesCreateManyUsersInputEnvelope = {
    data: librariesCreateManyUsersInput | librariesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUsersInput = {
    rating: number
    content?: string | null
    games: gamesCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUsersInput = {
    id?: number
    game_id: number
    rating: number
    content?: string | null
  }

  export type reviewsCreateOrConnectWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsCreateManyUsersInputEnvelope = {
    data: reviewsCreateManyUsersInput | reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type savesCreateWithoutUsersInput = {
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    games: gamesCreateNestedOneWithoutSavesInput
  }

  export type savesUncheckedCreateWithoutUsersInput = {
    id?: number
    game_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type savesCreateOrConnectWithoutUsersInput = {
    where: savesWhereUniqueInput
    create: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput>
  }

  export type savesCreateManyUsersInputEnvelope = {
    data: savesCreateManyUsersInput | savesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_achieve_connectionCreateWithoutUsersInput = {
    achievements: achievementsCreateNestedOneWithoutUser_achieve_connectionInput
  }

  export type user_achieve_connectionUncheckedCreateWithoutUsersInput = {
    achievement_id: number
  }

  export type user_achieve_connectionCreateOrConnectWithoutUsersInput = {
    where: user_achieve_connectionWhereUniqueInput
    create: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput>
  }

  export type user_achieve_connectionCreateManyUsersInputEnvelope = {
    data: user_achieve_connectionCreateManyUsersInput | user_achieve_connectionCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type friendsUpsertWithWhereUniqueWithoutUsers_friends_friend_idTousersInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_friend_idTousersInput>
    create: XOR<friendsCreateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_friend_idTousersInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUsers_friends_friend_idTousersInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUsers_friends_friend_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_friend_idTousersInput>
  }

  export type friendsUpdateManyWithWhereWithoutUsers_friends_friend_idTousersInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersInput>
  }

  export type friendsScalarWhereInput = {
    AND?: friendsScalarWhereInput | friendsScalarWhereInput[]
    OR?: friendsScalarWhereInput[]
    NOT?: friendsScalarWhereInput | friendsScalarWhereInput[]
    user_id?: IntFilter<"friends"> | number
    friend_id?: IntFilter<"friends"> | number
    status?: Enumfr_statusFilter<"friends"> | $Enums.fr_status
  }

  export type friendsUpsertWithWhereUniqueWithoutUsers_friends_user_idTousersInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUsers_friends_user_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_user_idTousersInput>
    create: XOR<friendsCreateWithoutUsers_friends_user_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_user_idTousersInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUsers_friends_user_idTousersInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUsers_friends_user_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_user_idTousersInput>
  }

  export type friendsUpdateManyWithWhereWithoutUsers_friends_user_idTousersInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersInput>
  }

  export type librariesUpsertWithWhereUniqueWithoutUsersInput = {
    where: librariesWhereUniqueInput
    update: XOR<librariesUpdateWithoutUsersInput, librariesUncheckedUpdateWithoutUsersInput>
    create: XOR<librariesCreateWithoutUsersInput, librariesUncheckedCreateWithoutUsersInput>
  }

  export type librariesUpdateWithWhereUniqueWithoutUsersInput = {
    where: librariesWhereUniqueInput
    data: XOR<librariesUpdateWithoutUsersInput, librariesUncheckedUpdateWithoutUsersInput>
  }

  export type librariesUpdateManyWithWhereWithoutUsersInput = {
    where: librariesScalarWhereInput
    data: XOR<librariesUpdateManyMutationInput, librariesUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type savesUpsertWithWhereUniqueWithoutUsersInput = {
    where: savesWhereUniqueInput
    update: XOR<savesUpdateWithoutUsersInput, savesUncheckedUpdateWithoutUsersInput>
    create: XOR<savesCreateWithoutUsersInput, savesUncheckedCreateWithoutUsersInput>
  }

  export type savesUpdateWithWhereUniqueWithoutUsersInput = {
    where: savesWhereUniqueInput
    data: XOR<savesUpdateWithoutUsersInput, savesUncheckedUpdateWithoutUsersInput>
  }

  export type savesUpdateManyWithWhereWithoutUsersInput = {
    where: savesScalarWhereInput
    data: XOR<savesUpdateManyMutationInput, savesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_achieve_connectionUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_achieve_connectionWhereUniqueInput
    update: XOR<user_achieve_connectionUpdateWithoutUsersInput, user_achieve_connectionUncheckedUpdateWithoutUsersInput>
    create: XOR<user_achieve_connectionCreateWithoutUsersInput, user_achieve_connectionUncheckedCreateWithoutUsersInput>
  }

  export type user_achieve_connectionUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_achieve_connectionWhereUniqueInput
    data: XOR<user_achieve_connectionUpdateWithoutUsersInput, user_achieve_connectionUncheckedUpdateWithoutUsersInput>
  }

  export type user_achieve_connectionUpdateManyWithWhereWithoutUsersInput = {
    where: user_achieve_connectionScalarWhereInput
    data: XOR<user_achieve_connectionUpdateManyMutationInput, user_achieve_connectionUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_achieve_connectionCreateManyAchievementsInput = {
    user_id: number
  }

  export type user_achieve_connectionUpdateWithoutAchievementsInput = {
    users?: usersUpdateOneRequiredWithoutUser_achieve_connectionNestedInput
  }

  export type user_achieve_connectionUncheckedUpdateWithoutAchievementsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_achieve_connectionUncheckedUpdateManyWithoutAchievementsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_dev_connectionCreateManyDevsInput = {
    game_id: number
  }

  export type game_dev_connectionUpdateWithoutDevsInput = {
    games?: gamesUpdateOneRequiredWithoutGame_dev_connectionNestedInput
  }

  export type game_dev_connectionUncheckedUpdateWithoutDevsInput = {
    game_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_dev_connectionUncheckedUpdateManyWithoutDevsInput = {
    game_id?: IntFieldUpdateOperationsInput | number
  }

  export type achievementsCreateManyGamesInput = {
    id?: number
    title: string
    icon: string
  }

  export type eventsCreateManyGamesInput = {
    id?: number
    discount?: Decimal | DecimalJsLike | number | string | null
    start_date: Date | string
    end_date: Date | string
    type: $Enums.ev_type
  }

  export type game_dev_connectionCreateManyGamesInput = {
    dev_id: number
  }

  export type game_newsCreateManyGamesInput = {
    id?: number
    title: string
    content: string
    published_at?: Date | string
  }

  export type game_tag_connectionCreateManyGamesInput = {
    tag_id: number
  }

  export type gamesCreateManyGamesInput = {
    id?: number
    title: string
    price?: Decimal | DecimalJsLike | number | string | null
    release_date: Date | string
    age_rating: string
    cover: string
    description?: string | null
    system_requirements: JsonNullValueInput | InputJsonValue
    is_multiplayer?: boolean
  }

  export type librariesCreateManyGamesInput = {
    id?: number
    user_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type reviewsCreateManyGamesInput = {
    id?: number
    user_id: number
    rating: number
    content?: string | null
  }

  export type savesCreateManyGamesInput = {
    id?: number
    user_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type achievementsUpdateWithoutGamesInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    user_achieve_connection?: user_achieve_connectionUpdateManyWithoutAchievementsNestedInput
  }

  export type achievementsUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    user_achieve_connection?: user_achieve_connectionUncheckedUpdateManyWithoutAchievementsNestedInput
  }

  export type achievementsUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type eventsUpdateWithoutGamesInput = {
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type eventsUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type eventsUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumev_typeFieldUpdateOperationsInput | $Enums.ev_type
  }

  export type game_dev_connectionUpdateWithoutGamesInput = {
    devs?: devsUpdateOneRequiredWithoutGame_dev_connectionNestedInput
  }

  export type game_dev_connectionUncheckedUpdateWithoutGamesInput = {
    dev_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_dev_connectionUncheckedUpdateManyWithoutGamesInput = {
    dev_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_newsUpdateWithoutGamesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_newsUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_newsUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_tag_connectionUpdateWithoutGamesInput = {
    tags?: tagsUpdateOneRequiredWithoutGame_tag_connectionNestedInput
  }

  export type game_tag_connectionUncheckedUpdateWithoutGamesInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_tag_connectionUncheckedUpdateManyWithoutGamesInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type gamesUpdateWithoutGamesInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUpdateManyWithoutGamesNestedInput
    events?: eventsUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUpdateManyWithoutGamesNestedInput
    other_games?: gamesUpdateManyWithoutGamesNestedInput
    libraries?: librariesUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUpdateManyWithoutGamesNestedInput
    saves?: savesUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
    achievements?: achievementsUncheckedUpdateManyWithoutGamesNestedInput
    events?: eventsUncheckedUpdateManyWithoutGamesNestedInput
    game_dev_connection?: game_dev_connectionUncheckedUpdateManyWithoutGamesNestedInput
    game_news?: game_newsUncheckedUpdateManyWithoutGamesNestedInput
    game_tag_connection?: game_tag_connectionUncheckedUpdateManyWithoutGamesNestedInput
    other_games?: gamesUncheckedUpdateManyWithoutGamesNestedInput
    libraries?: librariesUncheckedUpdateManyWithoutGamesNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutGamesNestedInput
    saves?: savesUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    age_rating?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    system_requirements?: JsonNullValueInput | InputJsonValue
    is_multiplayer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type librariesUpdateWithoutGamesInput = {
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
    users?: usersUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type librariesUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type librariesUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type reviewsUpdateWithoutGamesInput = {
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type savesUpdateWithoutGamesInput = {
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavesNestedInput
  }

  export type savesUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savesUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type game_tag_connectionCreateManyTagsInput = {
    game_id: number
  }

  export type game_tag_connectionUpdateWithoutTagsInput = {
    games?: gamesUpdateOneRequiredWithoutGame_tag_connectionNestedInput
  }

  export type game_tag_connectionUncheckedUpdateWithoutTagsInput = {
    game_id?: IntFieldUpdateOperationsInput | number
  }

  export type game_tag_connectionUncheckedUpdateManyWithoutTagsInput = {
    game_id?: IntFieldUpdateOperationsInput | number
  }

  export type friendsCreateManyUsers_friends_friend_idTousersInput = {
    user_id: number
    status?: $Enums.fr_status
  }

  export type friendsCreateManyUsers_friends_user_idTousersInput = {
    friend_id: number
    status?: $Enums.fr_status
  }

  export type librariesCreateManyUsersInput = {
    id?: number
    game_id: number
    hours_played?: number
    ownership: $Enums.own_type
    download_status?: $Enums.download_type | null
  }

  export type reviewsCreateManyUsersInput = {
    id?: number
    game_id: number
    rating: number
    content?: string | null
  }

  export type savesCreateManyUsersInput = {
    id?: number
    game_id: number
    save_data: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type user_achieve_connectionCreateManyUsersInput = {
    achievement_id: number
  }

  export type friendsUpdateWithoutUsers_friends_friend_idTousersInput = {
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
    users_friends_user_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_user_idTousersNestedInput
  }

  export type friendsUncheckedUpdateWithoutUsers_friends_friend_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_friend_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type friendsUpdateWithoutUsers_friends_user_idTousersInput = {
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
    users_friends_friend_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_friend_idTousersNestedInput
  }

  export type friendsUncheckedUpdateWithoutUsers_friends_user_idTousersInput = {
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_user_idTousersInput = {
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: Enumfr_statusFieldUpdateOperationsInput | $Enums.fr_status
  }

  export type librariesUpdateWithoutUsersInput = {
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
    games?: gamesUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type librariesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type librariesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    hours_played?: IntFieldUpdateOperationsInput | number
    ownership?: Enumown_typeFieldUpdateOperationsInput | $Enums.own_type
    download_status?: NullableEnumdownload_typeFieldUpdateOperationsInput | $Enums.download_type | null
  }

  export type reviewsUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    games?: gamesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type savesUpdateWithoutUsersInput = {
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: gamesUpdateOneRequiredWithoutSavesNestedInput
  }

  export type savesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    save_data?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_achieve_connectionUpdateWithoutUsersInput = {
    achievements?: achievementsUpdateOneRequiredWithoutUser_achieve_connectionNestedInput
  }

  export type user_achieve_connectionUncheckedUpdateWithoutUsersInput = {
    achievement_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_achieve_connectionUncheckedUpdateManyWithoutUsersInput = {
    achievement_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}