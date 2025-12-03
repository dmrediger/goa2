
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model HeroRole
 * 
 */
export type HeroRole = $Result.DefaultSelection<Prisma.$HeroRolePayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model SpellbookCard
 * 
 */
export type SpellbookCard = $Result.DefaultSelection<Prisma.$SpellbookCardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Collection: {
  Arcane: 'Arcane',
  Base: 'Base',
  Defiant: 'Defiant',
  Devoted: 'Devoted',
  Renowned: 'Renowned',
  Wayward: 'Wayward'
};

export type Collection = (typeof Collection)[keyof typeof Collection]


export const CardType: {
  BasicAttack: 'BasicAttack',
  Attack: 'Attack',
  BasicAttackRanged: 'BasicAttackRanged',
  AttackRanged: 'AttackRanged',
  Skill: 'Skill',
  SkillMelee: 'SkillMelee',
  SkillRanged: 'SkillRanged',
  Movement: 'Movement',
  Defense: 'Defense',
  Versatile: 'Versatile',
  VersatileMelee: 'VersatileMelee',
  VersatileRanged: 'VersatileRanged',
  Special: 'Special'
};

export type CardType = (typeof CardType)[keyof typeof CardType]


export const Role: {
  Tactician: 'Tactician',
  Disabler: 'Disabler',
  Durable: 'Durable',
  Pusher: 'Pusher',
  Damager: 'Damager',
  Sniper: 'Sniper',
  Melee: 'Melee',
  Tokens: 'Tokens',
  Farming: 'Farming',
  Support: 'Support',
  Mobile: 'Mobile',
  Zoner: 'Zoner',
  Healer: 'Healer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Class: {
  Tank: 'Tank',
  Carry: 'Carry',
  Support: 'Support',
  Controller: 'Controller',
  Pusher: 'Pusher'
};

export type Class = (typeof Class)[keyof typeof Class]

}

export type Collection = $Enums.Collection

export const Collection: typeof $Enums.Collection

export type CardType = $Enums.CardType

export const CardType: typeof $Enums.CardType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Class = $Enums.Class

export const Class: typeof $Enums.Class

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Heroes
 * const heroes = await prisma.hero.findMany()
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
   * // Fetch zero or more Heroes
   * const heroes = await prisma.hero.findMany()
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
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heroRole`: Exposes CRUD operations for the **HeroRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroRoles
    * const heroRoles = await prisma.heroRole.findMany()
    * ```
    */
  get heroRole(): Prisma.HeroRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spellbookCard`: Exposes CRUD operations for the **SpellbookCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpellbookCards
    * const spellbookCards = await prisma.spellbookCard.findMany()
    * ```
    */
  get spellbookCard(): Prisma.SpellbookCardDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Hero: 'Hero',
    HeroRole: 'HeroRole',
    Card: 'Card',
    SpellbookCard: 'SpellbookCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hero" | "heroRole" | "card" | "spellbookCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      HeroRole: {
        payload: Prisma.$HeroRolePayload<ExtArgs>
        fields: Prisma.HeroRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          findFirst: {
            args: Prisma.HeroRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          findMany: {
            args: Prisma.HeroRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>[]
          }
          create: {
            args: Prisma.HeroRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          createMany: {
            args: Prisma.HeroRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>[]
          }
          delete: {
            args: Prisma.HeroRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          update: {
            args: Prisma.HeroRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          deleteMany: {
            args: Prisma.HeroRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>[]
          }
          upsert: {
            args: Prisma.HeroRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroRolePayload>
          }
          aggregate: {
            args: Prisma.HeroRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroRole>
          }
          groupBy: {
            args: Prisma.HeroRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroRoleCountArgs<ExtArgs>
            result: $Utils.Optional<HeroRoleCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      SpellbookCard: {
        payload: Prisma.$SpellbookCardPayload<ExtArgs>
        fields: Prisma.SpellbookCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpellbookCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpellbookCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          findFirst: {
            args: Prisma.SpellbookCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpellbookCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          findMany: {
            args: Prisma.SpellbookCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>[]
          }
          create: {
            args: Prisma.SpellbookCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          createMany: {
            args: Prisma.SpellbookCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpellbookCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>[]
          }
          delete: {
            args: Prisma.SpellbookCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          update: {
            args: Prisma.SpellbookCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          deleteMany: {
            args: Prisma.SpellbookCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpellbookCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpellbookCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>[]
          }
          upsert: {
            args: Prisma.SpellbookCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellbookCardPayload>
          }
          aggregate: {
            args: Prisma.SpellbookCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpellbookCard>
          }
          groupBy: {
            args: Prisma.SpellbookCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpellbookCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpellbookCardCountArgs<ExtArgs>
            result: $Utils.Optional<SpellbookCardCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    hero?: HeroOmit
    heroRole?: HeroRoleOmit
    card?: CardOmit
    spellbookCard?: SpellbookCardOmit
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
   * Count Type HeroCountOutputType
   */

  export type HeroCountOutputType = {
    roles: number
    cards: number
    spellbookCards: number
  }

  export type HeroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | HeroCountOutputTypeCountRolesArgs
    cards?: boolean | HeroCountOutputTypeCountCardsArgs
    spellbookCards?: boolean | HeroCountOutputTypeCountSpellbookCardsArgs
  }

  // Custom InputTypes
  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroCountOutputType
     */
    select?: HeroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroRoleWhereInput
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountSpellbookCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpellbookCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
    complexity: number | null
    attack: number | null
    defense: number | null
    initiative: number | null
    movement: number | null
    deckSize: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
    complexity: number | null
    attack: number | null
    defense: number | null
    initiative: number | null
    movement: number | null
    deckSize: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    collection: $Enums.Collection | null
    class: $Enums.Class | null
    complexity: number | null
    attack: number | null
    defense: number | null
    initiative: number | null
    movement: number | null
    heroCardImage: string | null
    cardBackImage: string | null
    folderPath: string | null
    hasSpellbook: boolean | null
    deckSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    collection: $Enums.Collection | null
    class: $Enums.Class | null
    complexity: number | null
    attack: number | null
    defense: number | null
    initiative: number | null
    movement: number | null
    heroCardImage: string | null
    cardBackImage: string | null
    folderPath: string | null
    hasSpellbook: boolean | null
    deckSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    collection: number
    class: number
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: number
    cardBackImage: number
    folderPath: number
    hasSpellbook: number
    deckSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
    complexity?: true
    attack?: true
    defense?: true
    initiative?: true
    movement?: true
    deckSize?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
    complexity?: true
    attack?: true
    defense?: true
    initiative?: true
    movement?: true
    deckSize?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    collection?: true
    class?: true
    complexity?: true
    attack?: true
    defense?: true
    initiative?: true
    movement?: true
    heroCardImage?: true
    cardBackImage?: true
    folderPath?: true
    hasSpellbook?: true
    deckSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    collection?: true
    class?: true
    complexity?: true
    attack?: true
    defense?: true
    initiative?: true
    movement?: true
    heroCardImage?: true
    cardBackImage?: true
    folderPath?: true
    hasSpellbook?: true
    deckSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    collection?: true
    class?: true
    complexity?: true
    attack?: true
    defense?: true
    initiative?: true
    movement?: true
    heroCardImage?: true
    cardBackImage?: true
    folderPath?: true
    hasSpellbook?: true
    deckSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook: boolean
    deckSize: number
    createdAt: Date
    updatedAt: Date
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    collection?: boolean
    class?: boolean
    complexity?: boolean
    attack?: boolean
    defense?: boolean
    initiative?: boolean
    movement?: boolean
    heroCardImage?: boolean
    cardBackImage?: boolean
    folderPath?: boolean
    hasSpellbook?: boolean
    deckSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Hero$rolesArgs<ExtArgs>
    cards?: boolean | Hero$cardsArgs<ExtArgs>
    spellbookCards?: boolean | Hero$spellbookCardsArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    collection?: boolean
    class?: boolean
    complexity?: boolean
    attack?: boolean
    defense?: boolean
    initiative?: boolean
    movement?: boolean
    heroCardImage?: boolean
    cardBackImage?: boolean
    folderPath?: boolean
    hasSpellbook?: boolean
    deckSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    collection?: boolean
    class?: boolean
    complexity?: boolean
    attack?: boolean
    defense?: boolean
    initiative?: boolean
    movement?: boolean
    heroCardImage?: boolean
    cardBackImage?: boolean
    folderPath?: boolean
    hasSpellbook?: boolean
    deckSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    collection?: boolean
    class?: boolean
    complexity?: boolean
    attack?: boolean
    defense?: boolean
    initiative?: boolean
    movement?: boolean
    heroCardImage?: boolean
    cardBackImage?: boolean
    folderPath?: boolean
    hasSpellbook?: boolean
    deckSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "collection" | "class" | "complexity" | "attack" | "defense" | "initiative" | "movement" | "heroCardImage" | "cardBackImage" | "folderPath" | "hasSpellbook" | "deckSize" | "createdAt" | "updatedAt", ExtArgs["result"]["hero"]>
  export type HeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Hero$rolesArgs<ExtArgs>
    cards?: boolean | Hero$cardsArgs<ExtArgs>
    spellbookCards?: boolean | Hero$spellbookCardsArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {
      roles: Prisma.$HeroRolePayload<ExtArgs>[]
      cards: Prisma.$CardPayload<ExtArgs>[]
      spellbookCards: Prisma.$SpellbookCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      collection: $Enums.Collection
      class: $Enums.Class
      complexity: number
      attack: number
      defense: number
      initiative: number
      movement: number
      heroCardImage: string
      cardBackImage: string
      folderPath: string
      hasSpellbook: boolean
      deckSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
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
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Hero$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Hero$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cards<T extends Hero$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Hero$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spellbookCards<T extends Hero$spellbookCardsArgs<ExtArgs> = {}>(args?: Subset<T, Hero$spellbookCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'Int'>
    readonly name: FieldRef<"Hero", 'String'>
    readonly slug: FieldRef<"Hero", 'String'>
    readonly collection: FieldRef<"Hero", 'Collection'>
    readonly class: FieldRef<"Hero", 'Class'>
    readonly complexity: FieldRef<"Hero", 'Int'>
    readonly attack: FieldRef<"Hero", 'Int'>
    readonly defense: FieldRef<"Hero", 'Int'>
    readonly initiative: FieldRef<"Hero", 'Int'>
    readonly movement: FieldRef<"Hero", 'Int'>
    readonly heroCardImage: FieldRef<"Hero", 'String'>
    readonly cardBackImage: FieldRef<"Hero", 'String'>
    readonly folderPath: FieldRef<"Hero", 'String'>
    readonly hasSpellbook: FieldRef<"Hero", 'Boolean'>
    readonly deckSize: FieldRef<"Hero", 'Int'>
    readonly createdAt: FieldRef<"Hero", 'DateTime'>
    readonly updatedAt: FieldRef<"Hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero.roles
   */
  export type Hero$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    where?: HeroRoleWhereInput
    orderBy?: HeroRoleOrderByWithRelationInput | HeroRoleOrderByWithRelationInput[]
    cursor?: HeroRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeroRoleScalarFieldEnum | HeroRoleScalarFieldEnum[]
  }

  /**
   * Hero.cards
   */
  export type Hero$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Hero.spellbookCards
   */
  export type Hero$spellbookCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    where?: SpellbookCardWhereInput
    orderBy?: SpellbookCardOrderByWithRelationInput | SpellbookCardOrderByWithRelationInput[]
    cursor?: SpellbookCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpellbookCardScalarFieldEnum | SpellbookCardScalarFieldEnum[]
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
  }


  /**
   * Model HeroRole
   */

  export type AggregateHeroRole = {
    _count: HeroRoleCountAggregateOutputType | null
    _avg: HeroRoleAvgAggregateOutputType | null
    _sum: HeroRoleSumAggregateOutputType | null
    _min: HeroRoleMinAggregateOutputType | null
    _max: HeroRoleMaxAggregateOutputType | null
  }

  export type HeroRoleAvgAggregateOutputType = {
    id: number | null
    heroId: number | null
    priority: number | null
  }

  export type HeroRoleSumAggregateOutputType = {
    id: number | null
    heroId: number | null
    priority: number | null
  }

  export type HeroRoleMinAggregateOutputType = {
    id: number | null
    heroId: number | null
    role: $Enums.Role | null
    priority: number | null
  }

  export type HeroRoleMaxAggregateOutputType = {
    id: number | null
    heroId: number | null
    role: $Enums.Role | null
    priority: number | null
  }

  export type HeroRoleCountAggregateOutputType = {
    id: number
    heroId: number
    role: number
    priority: number
    _all: number
  }


  export type HeroRoleAvgAggregateInputType = {
    id?: true
    heroId?: true
    priority?: true
  }

  export type HeroRoleSumAggregateInputType = {
    id?: true
    heroId?: true
    priority?: true
  }

  export type HeroRoleMinAggregateInputType = {
    id?: true
    heroId?: true
    role?: true
    priority?: true
  }

  export type HeroRoleMaxAggregateInputType = {
    id?: true
    heroId?: true
    role?: true
    priority?: true
  }

  export type HeroRoleCountAggregateInputType = {
    id?: true
    heroId?: true
    role?: true
    priority?: true
    _all?: true
  }

  export type HeroRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroRole to aggregate.
     */
    where?: HeroRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroRoles to fetch.
     */
    orderBy?: HeroRoleOrderByWithRelationInput | HeroRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroRoles
    **/
    _count?: true | HeroRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroRoleMaxAggregateInputType
  }

  export type GetHeroRoleAggregateType<T extends HeroRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroRole[P]>
      : GetScalarType<T[P], AggregateHeroRole[P]>
  }




  export type HeroRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroRoleWhereInput
    orderBy?: HeroRoleOrderByWithAggregationInput | HeroRoleOrderByWithAggregationInput[]
    by: HeroRoleScalarFieldEnum[] | HeroRoleScalarFieldEnum
    having?: HeroRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroRoleCountAggregateInputType | true
    _avg?: HeroRoleAvgAggregateInputType
    _sum?: HeroRoleSumAggregateInputType
    _min?: HeroRoleMinAggregateInputType
    _max?: HeroRoleMaxAggregateInputType
  }

  export type HeroRoleGroupByOutputType = {
    id: number
    heroId: number
    role: $Enums.Role
    priority: number
    _count: HeroRoleCountAggregateOutputType | null
    _avg: HeroRoleAvgAggregateOutputType | null
    _sum: HeroRoleSumAggregateOutputType | null
    _min: HeroRoleMinAggregateOutputType | null
    _max: HeroRoleMaxAggregateOutputType | null
  }

  type GetHeroRoleGroupByPayload<T extends HeroRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroRoleGroupByOutputType[P]>
            : GetScalarType<T[P], HeroRoleGroupByOutputType[P]>
        }
      >
    >


  export type HeroRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    role?: boolean
    priority?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heroRole"]>

  export type HeroRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    role?: boolean
    priority?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heroRole"]>

  export type HeroRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    role?: boolean
    priority?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heroRole"]>

  export type HeroRoleSelectScalar = {
    id?: boolean
    heroId?: boolean
    role?: boolean
    priority?: boolean
  }

  export type HeroRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroId" | "role" | "priority", ExtArgs["result"]["heroRole"]>
  export type HeroRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type HeroRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type HeroRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $HeroRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroRole"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroId: number
      role: $Enums.Role
      priority: number
    }, ExtArgs["result"]["heroRole"]>
    composites: {}
  }

  type HeroRoleGetPayload<S extends boolean | null | undefined | HeroRoleDefaultArgs> = $Result.GetResult<Prisma.$HeroRolePayload, S>

  type HeroRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroRoleCountAggregateInputType | true
    }

  export interface HeroRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroRole'], meta: { name: 'HeroRole' } }
    /**
     * Find zero or one HeroRole that matches the filter.
     * @param {HeroRoleFindUniqueArgs} args - Arguments to find a HeroRole
     * @example
     * // Get one HeroRole
     * const heroRole = await prisma.heroRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroRoleFindUniqueArgs>(args: SelectSubset<T, HeroRoleFindUniqueArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeroRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroRoleFindUniqueOrThrowArgs} args - Arguments to find a HeroRole
     * @example
     * // Get one HeroRole
     * const heroRole = await prisma.heroRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleFindFirstArgs} args - Arguments to find a HeroRole
     * @example
     * // Get one HeroRole
     * const heroRole = await prisma.heroRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroRoleFindFirstArgs>(args?: SelectSubset<T, HeroRoleFindFirstArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleFindFirstOrThrowArgs} args - Arguments to find a HeroRole
     * @example
     * // Get one HeroRole
     * const heroRole = await prisma.heroRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeroRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroRoles
     * const heroRoles = await prisma.heroRole.findMany()
     * 
     * // Get first 10 HeroRoles
     * const heroRoles = await prisma.heroRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroRoleWithIdOnly = await prisma.heroRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroRoleFindManyArgs>(args?: SelectSubset<T, HeroRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeroRole.
     * @param {HeroRoleCreateArgs} args - Arguments to create a HeroRole.
     * @example
     * // Create one HeroRole
     * const HeroRole = await prisma.heroRole.create({
     *   data: {
     *     // ... data to create a HeroRole
     *   }
     * })
     * 
     */
    create<T extends HeroRoleCreateArgs>(args: SelectSubset<T, HeroRoleCreateArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeroRoles.
     * @param {HeroRoleCreateManyArgs} args - Arguments to create many HeroRoles.
     * @example
     * // Create many HeroRoles
     * const heroRole = await prisma.heroRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroRoleCreateManyArgs>(args?: SelectSubset<T, HeroRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeroRoles and returns the data saved in the database.
     * @param {HeroRoleCreateManyAndReturnArgs} args - Arguments to create many HeroRoles.
     * @example
     * // Create many HeroRoles
     * const heroRole = await prisma.heroRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeroRoles and only return the `id`
     * const heroRoleWithIdOnly = await prisma.heroRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeroRole.
     * @param {HeroRoleDeleteArgs} args - Arguments to delete one HeroRole.
     * @example
     * // Delete one HeroRole
     * const HeroRole = await prisma.heroRole.delete({
     *   where: {
     *     // ... filter to delete one HeroRole
     *   }
     * })
     * 
     */
    delete<T extends HeroRoleDeleteArgs>(args: SelectSubset<T, HeroRoleDeleteArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeroRole.
     * @param {HeroRoleUpdateArgs} args - Arguments to update one HeroRole.
     * @example
     * // Update one HeroRole
     * const heroRole = await prisma.heroRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroRoleUpdateArgs>(args: SelectSubset<T, HeroRoleUpdateArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeroRoles.
     * @param {HeroRoleDeleteManyArgs} args - Arguments to filter HeroRoles to delete.
     * @example
     * // Delete a few HeroRoles
     * const { count } = await prisma.heroRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroRoleDeleteManyArgs>(args?: SelectSubset<T, HeroRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroRoles
     * const heroRole = await prisma.heroRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroRoleUpdateManyArgs>(args: SelectSubset<T, HeroRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroRoles and returns the data updated in the database.
     * @param {HeroRoleUpdateManyAndReturnArgs} args - Arguments to update many HeroRoles.
     * @example
     * // Update many HeroRoles
     * const heroRole = await prisma.heroRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeroRoles and only return the `id`
     * const heroRoleWithIdOnly = await prisma.heroRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeroRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeroRole.
     * @param {HeroRoleUpsertArgs} args - Arguments to update or create a HeroRole.
     * @example
     * // Update or create a HeroRole
     * const heroRole = await prisma.heroRole.upsert({
     *   create: {
     *     // ... data to create a HeroRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroRole we want to update
     *   }
     * })
     */
    upsert<T extends HeroRoleUpsertArgs>(args: SelectSubset<T, HeroRoleUpsertArgs<ExtArgs>>): Prisma__HeroRoleClient<$Result.GetResult<Prisma.$HeroRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeroRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleCountArgs} args - Arguments to filter HeroRoles to count.
     * @example
     * // Count the number of HeroRoles
     * const count = await prisma.heroRole.count({
     *   where: {
     *     // ... the filter for the HeroRoles we want to count
     *   }
     * })
    **/
    count<T extends HeroRoleCountArgs>(
      args?: Subset<T, HeroRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroRoleAggregateArgs>(args: Subset<T, HeroRoleAggregateArgs>): Prisma.PrismaPromise<GetHeroRoleAggregateType<T>>

    /**
     * Group by HeroRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroRoleGroupByArgs} args - Group by arguments.
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
      T extends HeroRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroRoleGroupByArgs['orderBy'] }
        : { orderBy?: HeroRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroRole model
   */
  readonly fields: HeroRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HeroRole model
   */
  interface HeroRoleFieldRefs {
    readonly id: FieldRef<"HeroRole", 'Int'>
    readonly heroId: FieldRef<"HeroRole", 'Int'>
    readonly role: FieldRef<"HeroRole", 'Role'>
    readonly priority: FieldRef<"HeroRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HeroRole findUnique
   */
  export type HeroRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter, which HeroRole to fetch.
     */
    where: HeroRoleWhereUniqueInput
  }

  /**
   * HeroRole findUniqueOrThrow
   */
  export type HeroRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter, which HeroRole to fetch.
     */
    where: HeroRoleWhereUniqueInput
  }

  /**
   * HeroRole findFirst
   */
  export type HeroRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter, which HeroRole to fetch.
     */
    where?: HeroRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroRoles to fetch.
     */
    orderBy?: HeroRoleOrderByWithRelationInput | HeroRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroRoles.
     */
    cursor?: HeroRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroRoles.
     */
    distinct?: HeroRoleScalarFieldEnum | HeroRoleScalarFieldEnum[]
  }

  /**
   * HeroRole findFirstOrThrow
   */
  export type HeroRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter, which HeroRole to fetch.
     */
    where?: HeroRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroRoles to fetch.
     */
    orderBy?: HeroRoleOrderByWithRelationInput | HeroRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroRoles.
     */
    cursor?: HeroRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroRoles.
     */
    distinct?: HeroRoleScalarFieldEnum | HeroRoleScalarFieldEnum[]
  }

  /**
   * HeroRole findMany
   */
  export type HeroRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter, which HeroRoles to fetch.
     */
    where?: HeroRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroRoles to fetch.
     */
    orderBy?: HeroRoleOrderByWithRelationInput | HeroRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroRoles.
     */
    cursor?: HeroRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroRoles.
     */
    skip?: number
    distinct?: HeroRoleScalarFieldEnum | HeroRoleScalarFieldEnum[]
  }

  /**
   * HeroRole create
   */
  export type HeroRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a HeroRole.
     */
    data: XOR<HeroRoleCreateInput, HeroRoleUncheckedCreateInput>
  }

  /**
   * HeroRole createMany
   */
  export type HeroRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroRoles.
     */
    data: HeroRoleCreateManyInput | HeroRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeroRole createManyAndReturn
   */
  export type HeroRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * The data used to create many HeroRoles.
     */
    data: HeroRoleCreateManyInput | HeroRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeroRole update
   */
  export type HeroRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a HeroRole.
     */
    data: XOR<HeroRoleUpdateInput, HeroRoleUncheckedUpdateInput>
    /**
     * Choose, which HeroRole to update.
     */
    where: HeroRoleWhereUniqueInput
  }

  /**
   * HeroRole updateMany
   */
  export type HeroRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroRoles.
     */
    data: XOR<HeroRoleUpdateManyMutationInput, HeroRoleUncheckedUpdateManyInput>
    /**
     * Filter which HeroRoles to update
     */
    where?: HeroRoleWhereInput
    /**
     * Limit how many HeroRoles to update.
     */
    limit?: number
  }

  /**
   * HeroRole updateManyAndReturn
   */
  export type HeroRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * The data used to update HeroRoles.
     */
    data: XOR<HeroRoleUpdateManyMutationInput, HeroRoleUncheckedUpdateManyInput>
    /**
     * Filter which HeroRoles to update
     */
    where?: HeroRoleWhereInput
    /**
     * Limit how many HeroRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeroRole upsert
   */
  export type HeroRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the HeroRole to update in case it exists.
     */
    where: HeroRoleWhereUniqueInput
    /**
     * In case the HeroRole found by the `where` argument doesn't exist, create a new HeroRole with this data.
     */
    create: XOR<HeroRoleCreateInput, HeroRoleUncheckedCreateInput>
    /**
     * In case the HeroRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroRoleUpdateInput, HeroRoleUncheckedUpdateInput>
  }

  /**
   * HeroRole delete
   */
  export type HeroRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
    /**
     * Filter which HeroRole to delete.
     */
    where: HeroRoleWhereUniqueInput
  }

  /**
   * HeroRole deleteMany
   */
  export type HeroRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroRoles to delete
     */
    where?: HeroRoleWhereInput
    /**
     * Limit how many HeroRoles to delete.
     */
    limit?: number
  }

  /**
   * HeroRole without action
   */
  export type HeroRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroRole
     */
    select?: HeroRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroRole
     */
    omit?: HeroRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroRoleInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    heroId: number | null
    cardIndex: number | null
    cardLevel: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    heroId: number | null
    cardIndex: number | null
    cardLevel: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    heroId: number | null
    cardIndex: number | null
    name: string | null
    cardType: $Enums.CardType | null
    cardLevel: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    hasAftershock: boolean | null
    cardImage: string | null
    createdAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    heroId: number | null
    cardIndex: number | null
    name: string | null
    cardType: $Enums.CardType | null
    cardLevel: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    hasAftershock: boolean | null
    cardImage: string | null
    createdAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    heroId: number
    cardIndex: number
    name: number
    cardType: number
    cardLevel: number
    initiativeValue: number
    attackValue: number
    defenseValue: number
    movementValue: number
    rangeValue: number
    effectText: number
    hasAftershock: number
    cardImage: number
    createdAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    heroId?: true
    cardIndex?: true
    cardLevel?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    heroId?: true
    cardIndex?: true
    cardLevel?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    heroId?: true
    cardIndex?: true
    name?: true
    cardType?: true
    cardLevel?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    hasAftershock?: true
    cardImage?: true
    createdAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    heroId?: true
    cardIndex?: true
    name?: true
    cardType?: true
    cardLevel?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    hasAftershock?: true
    cardImage?: true
    createdAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    heroId?: true
    cardIndex?: true
    name?: true
    cardType?: true
    cardLevel?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    hasAftershock?: true
    cardImage?: true
    createdAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    heroId: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    hasAftershock: boolean
    cardImage: string
    createdAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    cardLevel?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    hasAftershock?: boolean
    cardImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    cardLevel?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    hasAftershock?: boolean
    cardImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    cardLevel?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    hasAftershock?: boolean
    cardImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    heroId?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    cardLevel?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    hasAftershock?: boolean
    cardImage?: boolean
    createdAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroId" | "cardIndex" | "name" | "cardType" | "cardLevel" | "initiativeValue" | "attackValue" | "defenseValue" | "movementValue" | "rangeValue" | "effectText" | "hasAftershock" | "cardImage" | "createdAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroId: number
      cardIndex: number
      name: string
      cardType: $Enums.CardType
      cardLevel: number | null
      initiativeValue: number | null
      attackValue: number | null
      defenseValue: number | null
      movementValue: number | null
      rangeValue: number | null
      effectText: string | null
      hasAftershock: boolean
      cardImage: string
      createdAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly heroId: FieldRef<"Card", 'Int'>
    readonly cardIndex: FieldRef<"Card", 'Int'>
    readonly name: FieldRef<"Card", 'String'>
    readonly cardType: FieldRef<"Card", 'CardType'>
    readonly cardLevel: FieldRef<"Card", 'Int'>
    readonly initiativeValue: FieldRef<"Card", 'Int'>
    readonly attackValue: FieldRef<"Card", 'Int'>
    readonly defenseValue: FieldRef<"Card", 'Int'>
    readonly movementValue: FieldRef<"Card", 'Int'>
    readonly rangeValue: FieldRef<"Card", 'Int'>
    readonly effectText: FieldRef<"Card", 'String'>
    readonly hasAftershock: FieldRef<"Card", 'Boolean'>
    readonly cardImage: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model SpellbookCard
   */

  export type AggregateSpellbookCard = {
    _count: SpellbookCardCountAggregateOutputType | null
    _avg: SpellbookCardAvgAggregateOutputType | null
    _sum: SpellbookCardSumAggregateOutputType | null
    _min: SpellbookCardMinAggregateOutputType | null
    _max: SpellbookCardMaxAggregateOutputType | null
  }

  export type SpellbookCardAvgAggregateOutputType = {
    id: number | null
    heroId: number | null
    spellLevel: number | null
    cardIndex: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
  }

  export type SpellbookCardSumAggregateOutputType = {
    id: number | null
    heroId: number | null
    spellLevel: number | null
    cardIndex: number | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
  }

  export type SpellbookCardMinAggregateOutputType = {
    id: number | null
    heroId: number | null
    spellLevel: number | null
    cardIndex: number | null
    name: string | null
    cardType: $Enums.CardType | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    cardImage: string | null
    backImage: string | null
    createdAt: Date | null
  }

  export type SpellbookCardMaxAggregateOutputType = {
    id: number | null
    heroId: number | null
    spellLevel: number | null
    cardIndex: number | null
    name: string | null
    cardType: $Enums.CardType | null
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    cardImage: string | null
    backImage: string | null
    createdAt: Date | null
  }

  export type SpellbookCardCountAggregateOutputType = {
    id: number
    heroId: number
    spellLevel: number
    cardIndex: number
    name: number
    cardType: number
    initiativeValue: number
    attackValue: number
    defenseValue: number
    movementValue: number
    rangeValue: number
    effectText: number
    cardImage: number
    backImage: number
    createdAt: number
    _all: number
  }


  export type SpellbookCardAvgAggregateInputType = {
    id?: true
    heroId?: true
    spellLevel?: true
    cardIndex?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
  }

  export type SpellbookCardSumAggregateInputType = {
    id?: true
    heroId?: true
    spellLevel?: true
    cardIndex?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
  }

  export type SpellbookCardMinAggregateInputType = {
    id?: true
    heroId?: true
    spellLevel?: true
    cardIndex?: true
    name?: true
    cardType?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    cardImage?: true
    backImage?: true
    createdAt?: true
  }

  export type SpellbookCardMaxAggregateInputType = {
    id?: true
    heroId?: true
    spellLevel?: true
    cardIndex?: true
    name?: true
    cardType?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    cardImage?: true
    backImage?: true
    createdAt?: true
  }

  export type SpellbookCardCountAggregateInputType = {
    id?: true
    heroId?: true
    spellLevel?: true
    cardIndex?: true
    name?: true
    cardType?: true
    initiativeValue?: true
    attackValue?: true
    defenseValue?: true
    movementValue?: true
    rangeValue?: true
    effectText?: true
    cardImage?: true
    backImage?: true
    createdAt?: true
    _all?: true
  }

  export type SpellbookCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpellbookCard to aggregate.
     */
    where?: SpellbookCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpellbookCards to fetch.
     */
    orderBy?: SpellbookCardOrderByWithRelationInput | SpellbookCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpellbookCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpellbookCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpellbookCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpellbookCards
    **/
    _count?: true | SpellbookCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpellbookCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpellbookCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpellbookCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpellbookCardMaxAggregateInputType
  }

  export type GetSpellbookCardAggregateType<T extends SpellbookCardAggregateArgs> = {
        [P in keyof T & keyof AggregateSpellbookCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpellbookCard[P]>
      : GetScalarType<T[P], AggregateSpellbookCard[P]>
  }




  export type SpellbookCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpellbookCardWhereInput
    orderBy?: SpellbookCardOrderByWithAggregationInput | SpellbookCardOrderByWithAggregationInput[]
    by: SpellbookCardScalarFieldEnum[] | SpellbookCardScalarFieldEnum
    having?: SpellbookCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpellbookCardCountAggregateInputType | true
    _avg?: SpellbookCardAvgAggregateInputType
    _sum?: SpellbookCardSumAggregateInputType
    _min?: SpellbookCardMinAggregateInputType
    _max?: SpellbookCardMaxAggregateInputType
  }

  export type SpellbookCardGroupByOutputType = {
    id: number
    heroId: number
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue: number | null
    attackValue: number | null
    defenseValue: number | null
    movementValue: number | null
    rangeValue: number | null
    effectText: string | null
    cardImage: string
    backImage: string | null
    createdAt: Date
    _count: SpellbookCardCountAggregateOutputType | null
    _avg: SpellbookCardAvgAggregateOutputType | null
    _sum: SpellbookCardSumAggregateOutputType | null
    _min: SpellbookCardMinAggregateOutputType | null
    _max: SpellbookCardMaxAggregateOutputType | null
  }

  type GetSpellbookCardGroupByPayload<T extends SpellbookCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpellbookCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpellbookCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpellbookCardGroupByOutputType[P]>
            : GetScalarType<T[P], SpellbookCardGroupByOutputType[P]>
        }
      >
    >


  export type SpellbookCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    spellLevel?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    cardImage?: boolean
    backImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spellbookCard"]>

  export type SpellbookCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    spellLevel?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    cardImage?: boolean
    backImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spellbookCard"]>

  export type SpellbookCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    spellLevel?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    cardImage?: boolean
    backImage?: boolean
    createdAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spellbookCard"]>

  export type SpellbookCardSelectScalar = {
    id?: boolean
    heroId?: boolean
    spellLevel?: boolean
    cardIndex?: boolean
    name?: boolean
    cardType?: boolean
    initiativeValue?: boolean
    attackValue?: boolean
    defenseValue?: boolean
    movementValue?: boolean
    rangeValue?: boolean
    effectText?: boolean
    cardImage?: boolean
    backImage?: boolean
    createdAt?: boolean
  }

  export type SpellbookCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroId" | "spellLevel" | "cardIndex" | "name" | "cardType" | "initiativeValue" | "attackValue" | "defenseValue" | "movementValue" | "rangeValue" | "effectText" | "cardImage" | "backImage" | "createdAt", ExtArgs["result"]["spellbookCard"]>
  export type SpellbookCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type SpellbookCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type SpellbookCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $SpellbookCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpellbookCard"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroId: number
      spellLevel: number
      cardIndex: number
      name: string
      cardType: $Enums.CardType
      initiativeValue: number | null
      attackValue: number | null
      defenseValue: number | null
      movementValue: number | null
      rangeValue: number | null
      effectText: string | null
      cardImage: string
      backImage: string | null
      createdAt: Date
    }, ExtArgs["result"]["spellbookCard"]>
    composites: {}
  }

  type SpellbookCardGetPayload<S extends boolean | null | undefined | SpellbookCardDefaultArgs> = $Result.GetResult<Prisma.$SpellbookCardPayload, S>

  type SpellbookCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpellbookCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpellbookCardCountAggregateInputType | true
    }

  export interface SpellbookCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpellbookCard'], meta: { name: 'SpellbookCard' } }
    /**
     * Find zero or one SpellbookCard that matches the filter.
     * @param {SpellbookCardFindUniqueArgs} args - Arguments to find a SpellbookCard
     * @example
     * // Get one SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpellbookCardFindUniqueArgs>(args: SelectSubset<T, SpellbookCardFindUniqueArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpellbookCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpellbookCardFindUniqueOrThrowArgs} args - Arguments to find a SpellbookCard
     * @example
     * // Get one SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpellbookCardFindUniqueOrThrowArgs>(args: SelectSubset<T, SpellbookCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpellbookCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardFindFirstArgs} args - Arguments to find a SpellbookCard
     * @example
     * // Get one SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpellbookCardFindFirstArgs>(args?: SelectSubset<T, SpellbookCardFindFirstArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpellbookCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardFindFirstOrThrowArgs} args - Arguments to find a SpellbookCard
     * @example
     * // Get one SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpellbookCardFindFirstOrThrowArgs>(args?: SelectSubset<T, SpellbookCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpellbookCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpellbookCards
     * const spellbookCards = await prisma.spellbookCard.findMany()
     * 
     * // Get first 10 SpellbookCards
     * const spellbookCards = await prisma.spellbookCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spellbookCardWithIdOnly = await prisma.spellbookCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpellbookCardFindManyArgs>(args?: SelectSubset<T, SpellbookCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpellbookCard.
     * @param {SpellbookCardCreateArgs} args - Arguments to create a SpellbookCard.
     * @example
     * // Create one SpellbookCard
     * const SpellbookCard = await prisma.spellbookCard.create({
     *   data: {
     *     // ... data to create a SpellbookCard
     *   }
     * })
     * 
     */
    create<T extends SpellbookCardCreateArgs>(args: SelectSubset<T, SpellbookCardCreateArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpellbookCards.
     * @param {SpellbookCardCreateManyArgs} args - Arguments to create many SpellbookCards.
     * @example
     * // Create many SpellbookCards
     * const spellbookCard = await prisma.spellbookCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpellbookCardCreateManyArgs>(args?: SelectSubset<T, SpellbookCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpellbookCards and returns the data saved in the database.
     * @param {SpellbookCardCreateManyAndReturnArgs} args - Arguments to create many SpellbookCards.
     * @example
     * // Create many SpellbookCards
     * const spellbookCard = await prisma.spellbookCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpellbookCards and only return the `id`
     * const spellbookCardWithIdOnly = await prisma.spellbookCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpellbookCardCreateManyAndReturnArgs>(args?: SelectSubset<T, SpellbookCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpellbookCard.
     * @param {SpellbookCardDeleteArgs} args - Arguments to delete one SpellbookCard.
     * @example
     * // Delete one SpellbookCard
     * const SpellbookCard = await prisma.spellbookCard.delete({
     *   where: {
     *     // ... filter to delete one SpellbookCard
     *   }
     * })
     * 
     */
    delete<T extends SpellbookCardDeleteArgs>(args: SelectSubset<T, SpellbookCardDeleteArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpellbookCard.
     * @param {SpellbookCardUpdateArgs} args - Arguments to update one SpellbookCard.
     * @example
     * // Update one SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpellbookCardUpdateArgs>(args: SelectSubset<T, SpellbookCardUpdateArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpellbookCards.
     * @param {SpellbookCardDeleteManyArgs} args - Arguments to filter SpellbookCards to delete.
     * @example
     * // Delete a few SpellbookCards
     * const { count } = await prisma.spellbookCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpellbookCardDeleteManyArgs>(args?: SelectSubset<T, SpellbookCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpellbookCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpellbookCards
     * const spellbookCard = await prisma.spellbookCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpellbookCardUpdateManyArgs>(args: SelectSubset<T, SpellbookCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpellbookCards and returns the data updated in the database.
     * @param {SpellbookCardUpdateManyAndReturnArgs} args - Arguments to update many SpellbookCards.
     * @example
     * // Update many SpellbookCards
     * const spellbookCard = await prisma.spellbookCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpellbookCards and only return the `id`
     * const spellbookCardWithIdOnly = await prisma.spellbookCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpellbookCardUpdateManyAndReturnArgs>(args: SelectSubset<T, SpellbookCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpellbookCard.
     * @param {SpellbookCardUpsertArgs} args - Arguments to update or create a SpellbookCard.
     * @example
     * // Update or create a SpellbookCard
     * const spellbookCard = await prisma.spellbookCard.upsert({
     *   create: {
     *     // ... data to create a SpellbookCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpellbookCard we want to update
     *   }
     * })
     */
    upsert<T extends SpellbookCardUpsertArgs>(args: SelectSubset<T, SpellbookCardUpsertArgs<ExtArgs>>): Prisma__SpellbookCardClient<$Result.GetResult<Prisma.$SpellbookCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpellbookCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardCountArgs} args - Arguments to filter SpellbookCards to count.
     * @example
     * // Count the number of SpellbookCards
     * const count = await prisma.spellbookCard.count({
     *   where: {
     *     // ... the filter for the SpellbookCards we want to count
     *   }
     * })
    **/
    count<T extends SpellbookCardCountArgs>(
      args?: Subset<T, SpellbookCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpellbookCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpellbookCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpellbookCardAggregateArgs>(args: Subset<T, SpellbookCardAggregateArgs>): Prisma.PrismaPromise<GetSpellbookCardAggregateType<T>>

    /**
     * Group by SpellbookCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellbookCardGroupByArgs} args - Group by arguments.
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
      T extends SpellbookCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpellbookCardGroupByArgs['orderBy'] }
        : { orderBy?: SpellbookCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpellbookCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpellbookCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpellbookCard model
   */
  readonly fields: SpellbookCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpellbookCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpellbookCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SpellbookCard model
   */
  interface SpellbookCardFieldRefs {
    readonly id: FieldRef<"SpellbookCard", 'Int'>
    readonly heroId: FieldRef<"SpellbookCard", 'Int'>
    readonly spellLevel: FieldRef<"SpellbookCard", 'Int'>
    readonly cardIndex: FieldRef<"SpellbookCard", 'Int'>
    readonly name: FieldRef<"SpellbookCard", 'String'>
    readonly cardType: FieldRef<"SpellbookCard", 'CardType'>
    readonly initiativeValue: FieldRef<"SpellbookCard", 'Int'>
    readonly attackValue: FieldRef<"SpellbookCard", 'Int'>
    readonly defenseValue: FieldRef<"SpellbookCard", 'Int'>
    readonly movementValue: FieldRef<"SpellbookCard", 'Int'>
    readonly rangeValue: FieldRef<"SpellbookCard", 'Int'>
    readonly effectText: FieldRef<"SpellbookCard", 'String'>
    readonly cardImage: FieldRef<"SpellbookCard", 'String'>
    readonly backImage: FieldRef<"SpellbookCard", 'String'>
    readonly createdAt: FieldRef<"SpellbookCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpellbookCard findUnique
   */
  export type SpellbookCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter, which SpellbookCard to fetch.
     */
    where: SpellbookCardWhereUniqueInput
  }

  /**
   * SpellbookCard findUniqueOrThrow
   */
  export type SpellbookCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter, which SpellbookCard to fetch.
     */
    where: SpellbookCardWhereUniqueInput
  }

  /**
   * SpellbookCard findFirst
   */
  export type SpellbookCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter, which SpellbookCard to fetch.
     */
    where?: SpellbookCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpellbookCards to fetch.
     */
    orderBy?: SpellbookCardOrderByWithRelationInput | SpellbookCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpellbookCards.
     */
    cursor?: SpellbookCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpellbookCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpellbookCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpellbookCards.
     */
    distinct?: SpellbookCardScalarFieldEnum | SpellbookCardScalarFieldEnum[]
  }

  /**
   * SpellbookCard findFirstOrThrow
   */
  export type SpellbookCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter, which SpellbookCard to fetch.
     */
    where?: SpellbookCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpellbookCards to fetch.
     */
    orderBy?: SpellbookCardOrderByWithRelationInput | SpellbookCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpellbookCards.
     */
    cursor?: SpellbookCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpellbookCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpellbookCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpellbookCards.
     */
    distinct?: SpellbookCardScalarFieldEnum | SpellbookCardScalarFieldEnum[]
  }

  /**
   * SpellbookCard findMany
   */
  export type SpellbookCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter, which SpellbookCards to fetch.
     */
    where?: SpellbookCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpellbookCards to fetch.
     */
    orderBy?: SpellbookCardOrderByWithRelationInput | SpellbookCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpellbookCards.
     */
    cursor?: SpellbookCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpellbookCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpellbookCards.
     */
    skip?: number
    distinct?: SpellbookCardScalarFieldEnum | SpellbookCardScalarFieldEnum[]
  }

  /**
   * SpellbookCard create
   */
  export type SpellbookCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * The data needed to create a SpellbookCard.
     */
    data: XOR<SpellbookCardCreateInput, SpellbookCardUncheckedCreateInput>
  }

  /**
   * SpellbookCard createMany
   */
  export type SpellbookCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpellbookCards.
     */
    data: SpellbookCardCreateManyInput | SpellbookCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpellbookCard createManyAndReturn
   */
  export type SpellbookCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * The data used to create many SpellbookCards.
     */
    data: SpellbookCardCreateManyInput | SpellbookCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpellbookCard update
   */
  export type SpellbookCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * The data needed to update a SpellbookCard.
     */
    data: XOR<SpellbookCardUpdateInput, SpellbookCardUncheckedUpdateInput>
    /**
     * Choose, which SpellbookCard to update.
     */
    where: SpellbookCardWhereUniqueInput
  }

  /**
   * SpellbookCard updateMany
   */
  export type SpellbookCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpellbookCards.
     */
    data: XOR<SpellbookCardUpdateManyMutationInput, SpellbookCardUncheckedUpdateManyInput>
    /**
     * Filter which SpellbookCards to update
     */
    where?: SpellbookCardWhereInput
    /**
     * Limit how many SpellbookCards to update.
     */
    limit?: number
  }

  /**
   * SpellbookCard updateManyAndReturn
   */
  export type SpellbookCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * The data used to update SpellbookCards.
     */
    data: XOR<SpellbookCardUpdateManyMutationInput, SpellbookCardUncheckedUpdateManyInput>
    /**
     * Filter which SpellbookCards to update
     */
    where?: SpellbookCardWhereInput
    /**
     * Limit how many SpellbookCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpellbookCard upsert
   */
  export type SpellbookCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * The filter to search for the SpellbookCard to update in case it exists.
     */
    where: SpellbookCardWhereUniqueInput
    /**
     * In case the SpellbookCard found by the `where` argument doesn't exist, create a new SpellbookCard with this data.
     */
    create: XOR<SpellbookCardCreateInput, SpellbookCardUncheckedCreateInput>
    /**
     * In case the SpellbookCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpellbookCardUpdateInput, SpellbookCardUncheckedUpdateInput>
  }

  /**
   * SpellbookCard delete
   */
  export type SpellbookCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
    /**
     * Filter which SpellbookCard to delete.
     */
    where: SpellbookCardWhereUniqueInput
  }

  /**
   * SpellbookCard deleteMany
   */
  export type SpellbookCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpellbookCards to delete
     */
    where?: SpellbookCardWhereInput
    /**
     * Limit how many SpellbookCards to delete.
     */
    limit?: number
  }

  /**
   * SpellbookCard without action
   */
  export type SpellbookCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellbookCard
     */
    select?: SpellbookCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpellbookCard
     */
    omit?: SpellbookCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellbookCardInclude<ExtArgs> | null
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


  export const HeroScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    collection: 'collection',
    class: 'class',
    complexity: 'complexity',
    attack: 'attack',
    defense: 'defense',
    initiative: 'initiative',
    movement: 'movement',
    heroCardImage: 'heroCardImage',
    cardBackImage: 'cardBackImage',
    folderPath: 'folderPath',
    hasSpellbook: 'hasSpellbook',
    deckSize: 'deckSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const HeroRoleScalarFieldEnum: {
    id: 'id',
    heroId: 'heroId',
    role: 'role',
    priority: 'priority'
  };

  export type HeroRoleScalarFieldEnum = (typeof HeroRoleScalarFieldEnum)[keyof typeof HeroRoleScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    heroId: 'heroId',
    cardIndex: 'cardIndex',
    name: 'name',
    cardType: 'cardType',
    cardLevel: 'cardLevel',
    initiativeValue: 'initiativeValue',
    attackValue: 'attackValue',
    defenseValue: 'defenseValue',
    movementValue: 'movementValue',
    rangeValue: 'rangeValue',
    effectText: 'effectText',
    hasAftershock: 'hasAftershock',
    cardImage: 'cardImage',
    createdAt: 'createdAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const SpellbookCardScalarFieldEnum: {
    id: 'id',
    heroId: 'heroId',
    spellLevel: 'spellLevel',
    cardIndex: 'cardIndex',
    name: 'name',
    cardType: 'cardType',
    initiativeValue: 'initiativeValue',
    attackValue: 'attackValue',
    defenseValue: 'defenseValue',
    movementValue: 'movementValue',
    rangeValue: 'rangeValue',
    effectText: 'effectText',
    cardImage: 'cardImage',
    backImage: 'backImage',
    createdAt: 'createdAt'
  };

  export type SpellbookCardScalarFieldEnum = (typeof SpellbookCardScalarFieldEnum)[keyof typeof SpellbookCardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Collection'
   */
  export type EnumCollectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Collection'>
    


  /**
   * Reference to a field of type 'Collection[]'
   */
  export type ListEnumCollectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Collection[]'>
    


  /**
   * Reference to a field of type 'Class'
   */
  export type EnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class'>
    


  /**
   * Reference to a field of type 'Class[]'
   */
  export type ListEnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'CardType'
   */
  export type EnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType'>
    


  /**
   * Reference to a field of type 'CardType[]'
   */
  export type ListEnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType[]'>
    


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


  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: IntFilter<"Hero"> | number
    name?: StringFilter<"Hero"> | string
    slug?: StringFilter<"Hero"> | string
    collection?: EnumCollectionFilter<"Hero"> | $Enums.Collection
    class?: EnumClassFilter<"Hero"> | $Enums.Class
    complexity?: IntFilter<"Hero"> | number
    attack?: IntFilter<"Hero"> | number
    defense?: IntFilter<"Hero"> | number
    initiative?: IntFilter<"Hero"> | number
    movement?: IntFilter<"Hero"> | number
    heroCardImage?: StringFilter<"Hero"> | string
    cardBackImage?: StringFilter<"Hero"> | string
    folderPath?: StringFilter<"Hero"> | string
    hasSpellbook?: BoolFilter<"Hero"> | boolean
    deckSize?: IntFilter<"Hero"> | number
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
    roles?: HeroRoleListRelationFilter
    cards?: CardListRelationFilter
    spellbookCards?: SpellbookCardListRelationFilter
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    collection?: SortOrder
    class?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    heroCardImage?: SortOrder
    cardBackImage?: SortOrder
    folderPath?: SortOrder
    hasSpellbook?: SortOrder
    deckSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: HeroRoleOrderByRelationAggregateInput
    cards?: CardOrderByRelationAggregateInput
    spellbookCards?: SpellbookCardOrderByRelationAggregateInput
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    collection?: EnumCollectionFilter<"Hero"> | $Enums.Collection
    class?: EnumClassFilter<"Hero"> | $Enums.Class
    complexity?: IntFilter<"Hero"> | number
    attack?: IntFilter<"Hero"> | number
    defense?: IntFilter<"Hero"> | number
    initiative?: IntFilter<"Hero"> | number
    movement?: IntFilter<"Hero"> | number
    heroCardImage?: StringFilter<"Hero"> | string
    cardBackImage?: StringFilter<"Hero"> | string
    folderPath?: StringFilter<"Hero"> | string
    hasSpellbook?: BoolFilter<"Hero"> | boolean
    deckSize?: IntFilter<"Hero"> | number
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
    roles?: HeroRoleListRelationFilter
    cards?: CardListRelationFilter
    spellbookCards?: SpellbookCardListRelationFilter
  }, "id" | "name" | "slug">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    collection?: SortOrder
    class?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    heroCardImage?: SortOrder
    cardBackImage?: SortOrder
    folderPath?: SortOrder
    hasSpellbook?: SortOrder
    deckSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroCountOrderByAggregateInput
    _avg?: HeroAvgOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
    _sum?: HeroSumOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hero"> | number
    name?: StringWithAggregatesFilter<"Hero"> | string
    slug?: StringWithAggregatesFilter<"Hero"> | string
    collection?: EnumCollectionWithAggregatesFilter<"Hero"> | $Enums.Collection
    class?: EnumClassWithAggregatesFilter<"Hero"> | $Enums.Class
    complexity?: IntWithAggregatesFilter<"Hero"> | number
    attack?: IntWithAggregatesFilter<"Hero"> | number
    defense?: IntWithAggregatesFilter<"Hero"> | number
    initiative?: IntWithAggregatesFilter<"Hero"> | number
    movement?: IntWithAggregatesFilter<"Hero"> | number
    heroCardImage?: StringWithAggregatesFilter<"Hero"> | string
    cardBackImage?: StringWithAggregatesFilter<"Hero"> | string
    folderPath?: StringWithAggregatesFilter<"Hero"> | string
    hasSpellbook?: BoolWithAggregatesFilter<"Hero"> | boolean
    deckSize?: IntWithAggregatesFilter<"Hero"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
  }

  export type HeroRoleWhereInput = {
    AND?: HeroRoleWhereInput | HeroRoleWhereInput[]
    OR?: HeroRoleWhereInput[]
    NOT?: HeroRoleWhereInput | HeroRoleWhereInput[]
    id?: IntFilter<"HeroRole"> | number
    heroId?: IntFilter<"HeroRole"> | number
    role?: EnumRoleFilter<"HeroRole"> | $Enums.Role
    priority?: IntFilter<"HeroRole"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }

  export type HeroRoleOrderByWithRelationInput = {
    id?: SortOrder
    heroId?: SortOrder
    role?: SortOrder
    priority?: SortOrder
    hero?: HeroOrderByWithRelationInput
  }

  export type HeroRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    heroId_role?: HeroRoleHeroIdRoleCompoundUniqueInput
    AND?: HeroRoleWhereInput | HeroRoleWhereInput[]
    OR?: HeroRoleWhereInput[]
    NOT?: HeroRoleWhereInput | HeroRoleWhereInput[]
    heroId?: IntFilter<"HeroRole"> | number
    role?: EnumRoleFilter<"HeroRole"> | $Enums.Role
    priority?: IntFilter<"HeroRole"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }, "id" | "heroId_role">

  export type HeroRoleOrderByWithAggregationInput = {
    id?: SortOrder
    heroId?: SortOrder
    role?: SortOrder
    priority?: SortOrder
    _count?: HeroRoleCountOrderByAggregateInput
    _avg?: HeroRoleAvgOrderByAggregateInput
    _max?: HeroRoleMaxOrderByAggregateInput
    _min?: HeroRoleMinOrderByAggregateInput
    _sum?: HeroRoleSumOrderByAggregateInput
  }

  export type HeroRoleScalarWhereWithAggregatesInput = {
    AND?: HeroRoleScalarWhereWithAggregatesInput | HeroRoleScalarWhereWithAggregatesInput[]
    OR?: HeroRoleScalarWhereWithAggregatesInput[]
    NOT?: HeroRoleScalarWhereWithAggregatesInput | HeroRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeroRole"> | number
    heroId?: IntWithAggregatesFilter<"HeroRole"> | number
    role?: EnumRoleWithAggregatesFilter<"HeroRole"> | $Enums.Role
    priority?: IntWithAggregatesFilter<"HeroRole"> | number
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    heroId?: IntFilter<"Card"> | number
    cardIndex?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    cardLevel?: IntNullableFilter<"Card"> | number | null
    initiativeValue?: IntNullableFilter<"Card"> | number | null
    attackValue?: IntNullableFilter<"Card"> | number | null
    defenseValue?: IntNullableFilter<"Card"> | number | null
    movementValue?: IntNullableFilter<"Card"> | number | null
    rangeValue?: IntNullableFilter<"Card"> | number | null
    effectText?: StringNullableFilter<"Card"> | string | null
    hasAftershock?: BoolFilter<"Card"> | boolean
    cardImage?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    cardLevel?: SortOrderInput | SortOrder
    initiativeValue?: SortOrderInput | SortOrder
    attackValue?: SortOrderInput | SortOrder
    defenseValue?: SortOrderInput | SortOrder
    movementValue?: SortOrderInput | SortOrder
    rangeValue?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    hasAftershock?: SortOrder
    cardImage?: SortOrder
    createdAt?: SortOrder
    hero?: HeroOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    heroId_cardIndex?: CardHeroIdCardIndexCompoundUniqueInput
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    heroId?: IntFilter<"Card"> | number
    cardIndex?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    cardLevel?: IntNullableFilter<"Card"> | number | null
    initiativeValue?: IntNullableFilter<"Card"> | number | null
    attackValue?: IntNullableFilter<"Card"> | number | null
    defenseValue?: IntNullableFilter<"Card"> | number | null
    movementValue?: IntNullableFilter<"Card"> | number | null
    rangeValue?: IntNullableFilter<"Card"> | number | null
    effectText?: StringNullableFilter<"Card"> | string | null
    hasAftershock?: BoolFilter<"Card"> | boolean
    cardImage?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }, "id" | "heroId_cardIndex">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    cardLevel?: SortOrderInput | SortOrder
    initiativeValue?: SortOrderInput | SortOrder
    attackValue?: SortOrderInput | SortOrder
    defenseValue?: SortOrderInput | SortOrder
    movementValue?: SortOrderInput | SortOrder
    rangeValue?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    hasAftershock?: SortOrder
    cardImage?: SortOrder
    createdAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    heroId?: IntWithAggregatesFilter<"Card"> | number
    cardIndex?: IntWithAggregatesFilter<"Card"> | number
    name?: StringWithAggregatesFilter<"Card"> | string
    cardType?: EnumCardTypeWithAggregatesFilter<"Card"> | $Enums.CardType
    cardLevel?: IntNullableWithAggregatesFilter<"Card"> | number | null
    initiativeValue?: IntNullableWithAggregatesFilter<"Card"> | number | null
    attackValue?: IntNullableWithAggregatesFilter<"Card"> | number | null
    defenseValue?: IntNullableWithAggregatesFilter<"Card"> | number | null
    movementValue?: IntNullableWithAggregatesFilter<"Card"> | number | null
    rangeValue?: IntNullableWithAggregatesFilter<"Card"> | number | null
    effectText?: StringNullableWithAggregatesFilter<"Card"> | string | null
    hasAftershock?: BoolWithAggregatesFilter<"Card"> | boolean
    cardImage?: StringWithAggregatesFilter<"Card"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type SpellbookCardWhereInput = {
    AND?: SpellbookCardWhereInput | SpellbookCardWhereInput[]
    OR?: SpellbookCardWhereInput[]
    NOT?: SpellbookCardWhereInput | SpellbookCardWhereInput[]
    id?: IntFilter<"SpellbookCard"> | number
    heroId?: IntFilter<"SpellbookCard"> | number
    spellLevel?: IntFilter<"SpellbookCard"> | number
    cardIndex?: IntFilter<"SpellbookCard"> | number
    name?: StringFilter<"SpellbookCard"> | string
    cardType?: EnumCardTypeFilter<"SpellbookCard"> | $Enums.CardType
    initiativeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    attackValue?: IntNullableFilter<"SpellbookCard"> | number | null
    defenseValue?: IntNullableFilter<"SpellbookCard"> | number | null
    movementValue?: IntNullableFilter<"SpellbookCard"> | number | null
    rangeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    effectText?: StringNullableFilter<"SpellbookCard"> | string | null
    cardImage?: StringFilter<"SpellbookCard"> | string
    backImage?: StringNullableFilter<"SpellbookCard"> | string | null
    createdAt?: DateTimeFilter<"SpellbookCard"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }

  export type SpellbookCardOrderByWithRelationInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    initiativeValue?: SortOrderInput | SortOrder
    attackValue?: SortOrderInput | SortOrder
    defenseValue?: SortOrderInput | SortOrder
    movementValue?: SortOrderInput | SortOrder
    rangeValue?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    cardImage?: SortOrder
    backImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hero?: HeroOrderByWithRelationInput
  }

  export type SpellbookCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    heroId_spellLevel_cardIndex?: SpellbookCardHeroIdSpellLevelCardIndexCompoundUniqueInput
    AND?: SpellbookCardWhereInput | SpellbookCardWhereInput[]
    OR?: SpellbookCardWhereInput[]
    NOT?: SpellbookCardWhereInput | SpellbookCardWhereInput[]
    heroId?: IntFilter<"SpellbookCard"> | number
    spellLevel?: IntFilter<"SpellbookCard"> | number
    cardIndex?: IntFilter<"SpellbookCard"> | number
    name?: StringFilter<"SpellbookCard"> | string
    cardType?: EnumCardTypeFilter<"SpellbookCard"> | $Enums.CardType
    initiativeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    attackValue?: IntNullableFilter<"SpellbookCard"> | number | null
    defenseValue?: IntNullableFilter<"SpellbookCard"> | number | null
    movementValue?: IntNullableFilter<"SpellbookCard"> | number | null
    rangeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    effectText?: StringNullableFilter<"SpellbookCard"> | string | null
    cardImage?: StringFilter<"SpellbookCard"> | string
    backImage?: StringNullableFilter<"SpellbookCard"> | string | null
    createdAt?: DateTimeFilter<"SpellbookCard"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }, "id" | "heroId_spellLevel_cardIndex">

  export type SpellbookCardOrderByWithAggregationInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    initiativeValue?: SortOrderInput | SortOrder
    attackValue?: SortOrderInput | SortOrder
    defenseValue?: SortOrderInput | SortOrder
    movementValue?: SortOrderInput | SortOrder
    rangeValue?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    cardImage?: SortOrder
    backImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SpellbookCardCountOrderByAggregateInput
    _avg?: SpellbookCardAvgOrderByAggregateInput
    _max?: SpellbookCardMaxOrderByAggregateInput
    _min?: SpellbookCardMinOrderByAggregateInput
    _sum?: SpellbookCardSumOrderByAggregateInput
  }

  export type SpellbookCardScalarWhereWithAggregatesInput = {
    AND?: SpellbookCardScalarWhereWithAggregatesInput | SpellbookCardScalarWhereWithAggregatesInput[]
    OR?: SpellbookCardScalarWhereWithAggregatesInput[]
    NOT?: SpellbookCardScalarWhereWithAggregatesInput | SpellbookCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpellbookCard"> | number
    heroId?: IntWithAggregatesFilter<"SpellbookCard"> | number
    spellLevel?: IntWithAggregatesFilter<"SpellbookCard"> | number
    cardIndex?: IntWithAggregatesFilter<"SpellbookCard"> | number
    name?: StringWithAggregatesFilter<"SpellbookCard"> | string
    cardType?: EnumCardTypeWithAggregatesFilter<"SpellbookCard"> | $Enums.CardType
    initiativeValue?: IntNullableWithAggregatesFilter<"SpellbookCard"> | number | null
    attackValue?: IntNullableWithAggregatesFilter<"SpellbookCard"> | number | null
    defenseValue?: IntNullableWithAggregatesFilter<"SpellbookCard"> | number | null
    movementValue?: IntNullableWithAggregatesFilter<"SpellbookCard"> | number | null
    rangeValue?: IntNullableWithAggregatesFilter<"SpellbookCard"> | number | null
    effectText?: StringNullableWithAggregatesFilter<"SpellbookCard"> | string | null
    cardImage?: StringWithAggregatesFilter<"SpellbookCard"> | string
    backImage?: StringNullableWithAggregatesFilter<"SpellbookCard"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpellbookCard"> | Date | string
  }

  export type HeroCreateInput = {
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleCreateNestedManyWithoutHeroInput
    cards?: CardCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleUncheckedCreateNestedManyWithoutHeroInput
    cards?: CardUncheckedCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUpdateManyWithoutHeroNestedInput
    cards?: CardUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUncheckedUpdateManyWithoutHeroNestedInput
    cards?: CardUncheckedUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroCreateManyInput = {
    id?: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroRoleCreateInput = {
    role: $Enums.Role
    priority?: number
    hero: HeroCreateNestedOneWithoutRolesInput
  }

  export type HeroRoleUncheckedCreateInput = {
    id?: number
    heroId: number
    role: $Enums.Role
    priority?: number
  }

  export type HeroRoleUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
    hero?: HeroUpdateOneRequiredWithoutRolesNestedInput
  }

  export type HeroRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type HeroRoleCreateManyInput = {
    id?: number
    heroId: number
    role: $Enums.Role
    priority?: number
  }

  export type HeroRoleUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type HeroRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type CardCreateInput = {
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
    hero: HeroCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    heroId: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
  }

  export type CardUpdateInput = {
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyInput = {
    id?: number
    heroId: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardCreateInput = {
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
    hero: HeroCreateNestedOneWithoutSpellbookCardsInput
  }

  export type SpellbookCardUncheckedCreateInput = {
    id?: number
    heroId: number
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
  }

  export type SpellbookCardUpdateInput = {
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutSpellbookCardsNestedInput
  }

  export type SpellbookCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardCreateManyInput = {
    id?: number
    heroId: number
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
  }

  export type SpellbookCardUpdateManyMutationInput = {
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumCollectionFilter<$PrismaModel = never> = {
    equals?: $Enums.Collection | EnumCollectionFieldRefInput<$PrismaModel>
    in?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionFilter<$PrismaModel> | $Enums.Collection
  }

  export type EnumClassFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassFilter<$PrismaModel> | $Enums.Class
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type HeroRoleListRelationFilter = {
    every?: HeroRoleWhereInput
    some?: HeroRoleWhereInput
    none?: HeroRoleWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type SpellbookCardListRelationFilter = {
    every?: SpellbookCardWhereInput
    some?: SpellbookCardWhereInput
    none?: SpellbookCardWhereInput
  }

  export type HeroRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpellbookCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    collection?: SortOrder
    class?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    heroCardImage?: SortOrder
    cardBackImage?: SortOrder
    folderPath?: SortOrder
    hasSpellbook?: SortOrder
    deckSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroAvgOrderByAggregateInput = {
    id?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    deckSize?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    collection?: SortOrder
    class?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    heroCardImage?: SortOrder
    cardBackImage?: SortOrder
    folderPath?: SortOrder
    hasSpellbook?: SortOrder
    deckSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    collection?: SortOrder
    class?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    heroCardImage?: SortOrder
    cardBackImage?: SortOrder
    folderPath?: SortOrder
    hasSpellbook?: SortOrder
    deckSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSumOrderByAggregateInput = {
    id?: SortOrder
    complexity?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    initiative?: SortOrder
    movement?: SortOrder
    deckSize?: SortOrder
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

  export type EnumCollectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Collection | EnumCollectionFieldRefInput<$PrismaModel>
    in?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionWithAggregatesFilter<$PrismaModel> | $Enums.Collection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollectionFilter<$PrismaModel>
    _max?: NestedEnumCollectionFilter<$PrismaModel>
  }

  export type EnumClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassWithAggregatesFilter<$PrismaModel> | $Enums.Class
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassFilter<$PrismaModel>
    _max?: NestedEnumClassFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type HeroScalarRelationFilter = {
    is?: HeroWhereInput
    isNot?: HeroWhereInput
  }

  export type HeroRoleHeroIdRoleCompoundUniqueInput = {
    heroId: number
    role: $Enums.Role
  }

  export type HeroRoleCountOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    role?: SortOrder
    priority?: SortOrder
  }

  export type HeroRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    priority?: SortOrder
  }

  export type HeroRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    role?: SortOrder
    priority?: SortOrder
  }

  export type HeroRoleMinOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    role?: SortOrder
    priority?: SortOrder
  }

  export type HeroRoleSumOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    priority?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardHeroIdCardIndexCompoundUniqueInput = {
    heroId: number
    cardIndex: number
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    cardLevel?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    hasAftershock?: SortOrder
    cardImage?: SortOrder
    createdAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    cardLevel?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    cardLevel?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    hasAftershock?: SortOrder
    cardImage?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    cardLevel?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    hasAftershock?: SortOrder
    cardImage?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    cardIndex?: SortOrder
    cardLevel?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
  }

  export type EnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
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

  export type SpellbookCardHeroIdSpellLevelCardIndexCompoundUniqueInput = {
    heroId: number
    spellLevel: number
    cardIndex: number
  }

  export type SpellbookCardCountOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    cardImage?: SortOrder
    backImage?: SortOrder
    createdAt?: SortOrder
  }

  export type SpellbookCardAvgOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
  }

  export type SpellbookCardMaxOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    cardImage?: SortOrder
    backImage?: SortOrder
    createdAt?: SortOrder
  }

  export type SpellbookCardMinOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    name?: SortOrder
    cardType?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
    effectText?: SortOrder
    cardImage?: SortOrder
    backImage?: SortOrder
    createdAt?: SortOrder
  }

  export type SpellbookCardSumOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    spellLevel?: SortOrder
    cardIndex?: SortOrder
    initiativeValue?: SortOrder
    attackValue?: SortOrder
    defenseValue?: SortOrder
    movementValue?: SortOrder
    rangeValue?: SortOrder
  }

  export type HeroRoleCreateNestedManyWithoutHeroInput = {
    create?: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput> | HeroRoleCreateWithoutHeroInput[] | HeroRoleUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: HeroRoleCreateOrConnectWithoutHeroInput | HeroRoleCreateOrConnectWithoutHeroInput[]
    createMany?: HeroRoleCreateManyHeroInputEnvelope
    connect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutHeroInput = {
    create?: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput> | CardCreateWithoutHeroInput[] | CardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: CardCreateOrConnectWithoutHeroInput | CardCreateOrConnectWithoutHeroInput[]
    createMany?: CardCreateManyHeroInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SpellbookCardCreateNestedManyWithoutHeroInput = {
    create?: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput> | SpellbookCardCreateWithoutHeroInput[] | SpellbookCardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SpellbookCardCreateOrConnectWithoutHeroInput | SpellbookCardCreateOrConnectWithoutHeroInput[]
    createMany?: SpellbookCardCreateManyHeroInputEnvelope
    connect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
  }

  export type HeroRoleUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput> | HeroRoleCreateWithoutHeroInput[] | HeroRoleUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: HeroRoleCreateOrConnectWithoutHeroInput | HeroRoleCreateOrConnectWithoutHeroInput[]
    createMany?: HeroRoleCreateManyHeroInputEnvelope
    connect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput> | CardCreateWithoutHeroInput[] | CardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: CardCreateOrConnectWithoutHeroInput | CardCreateOrConnectWithoutHeroInput[]
    createMany?: CardCreateManyHeroInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SpellbookCardUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput> | SpellbookCardCreateWithoutHeroInput[] | SpellbookCardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SpellbookCardCreateOrConnectWithoutHeroInput | SpellbookCardCreateOrConnectWithoutHeroInput[]
    createMany?: SpellbookCardCreateManyHeroInputEnvelope
    connect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCollectionFieldUpdateOperationsInput = {
    set?: $Enums.Collection
  }

  export type EnumClassFieldUpdateOperationsInput = {
    set?: $Enums.Class
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HeroRoleUpdateManyWithoutHeroNestedInput = {
    create?: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput> | HeroRoleCreateWithoutHeroInput[] | HeroRoleUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: HeroRoleCreateOrConnectWithoutHeroInput | HeroRoleCreateOrConnectWithoutHeroInput[]
    upsert?: HeroRoleUpsertWithWhereUniqueWithoutHeroInput | HeroRoleUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: HeroRoleCreateManyHeroInputEnvelope
    set?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    disconnect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    delete?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    connect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    update?: HeroRoleUpdateWithWhereUniqueWithoutHeroInput | HeroRoleUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: HeroRoleUpdateManyWithWhereWithoutHeroInput | HeroRoleUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: HeroRoleScalarWhereInput | HeroRoleScalarWhereInput[]
  }

  export type CardUpdateManyWithoutHeroNestedInput = {
    create?: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput> | CardCreateWithoutHeroInput[] | CardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: CardCreateOrConnectWithoutHeroInput | CardCreateOrConnectWithoutHeroInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutHeroInput | CardUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: CardCreateManyHeroInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutHeroInput | CardUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: CardUpdateManyWithWhereWithoutHeroInput | CardUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SpellbookCardUpdateManyWithoutHeroNestedInput = {
    create?: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput> | SpellbookCardCreateWithoutHeroInput[] | SpellbookCardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SpellbookCardCreateOrConnectWithoutHeroInput | SpellbookCardCreateOrConnectWithoutHeroInput[]
    upsert?: SpellbookCardUpsertWithWhereUniqueWithoutHeroInput | SpellbookCardUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: SpellbookCardCreateManyHeroInputEnvelope
    set?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    disconnect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    delete?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    connect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    update?: SpellbookCardUpdateWithWhereUniqueWithoutHeroInput | SpellbookCardUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: SpellbookCardUpdateManyWithWhereWithoutHeroInput | SpellbookCardUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: SpellbookCardScalarWhereInput | SpellbookCardScalarWhereInput[]
  }

  export type HeroRoleUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput> | HeroRoleCreateWithoutHeroInput[] | HeroRoleUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: HeroRoleCreateOrConnectWithoutHeroInput | HeroRoleCreateOrConnectWithoutHeroInput[]
    upsert?: HeroRoleUpsertWithWhereUniqueWithoutHeroInput | HeroRoleUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: HeroRoleCreateManyHeroInputEnvelope
    set?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    disconnect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    delete?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    connect?: HeroRoleWhereUniqueInput | HeroRoleWhereUniqueInput[]
    update?: HeroRoleUpdateWithWhereUniqueWithoutHeroInput | HeroRoleUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: HeroRoleUpdateManyWithWhereWithoutHeroInput | HeroRoleUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: HeroRoleScalarWhereInput | HeroRoleScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput> | CardCreateWithoutHeroInput[] | CardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: CardCreateOrConnectWithoutHeroInput | CardCreateOrConnectWithoutHeroInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutHeroInput | CardUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: CardCreateManyHeroInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutHeroInput | CardUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: CardUpdateManyWithWhereWithoutHeroInput | CardUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SpellbookCardUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput> | SpellbookCardCreateWithoutHeroInput[] | SpellbookCardUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SpellbookCardCreateOrConnectWithoutHeroInput | SpellbookCardCreateOrConnectWithoutHeroInput[]
    upsert?: SpellbookCardUpsertWithWhereUniqueWithoutHeroInput | SpellbookCardUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: SpellbookCardCreateManyHeroInputEnvelope
    set?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    disconnect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    delete?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    connect?: SpellbookCardWhereUniqueInput | SpellbookCardWhereUniqueInput[]
    update?: SpellbookCardUpdateWithWhereUniqueWithoutHeroInput | SpellbookCardUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: SpellbookCardUpdateManyWithWhereWithoutHeroInput | SpellbookCardUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: SpellbookCardScalarWhereInput | SpellbookCardScalarWhereInput[]
  }

  export type HeroCreateNestedOneWithoutRolesInput = {
    create?: XOR<HeroCreateWithoutRolesInput, HeroUncheckedCreateWithoutRolesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutRolesInput
    connect?: HeroWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type HeroUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<HeroCreateWithoutRolesInput, HeroUncheckedCreateWithoutRolesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutRolesInput
    upsert?: HeroUpsertWithoutRolesInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutRolesInput, HeroUpdateWithoutRolesInput>, HeroUncheckedUpdateWithoutRolesInput>
  }

  export type HeroCreateNestedOneWithoutCardsInput = {
    create?: XOR<HeroCreateWithoutCardsInput, HeroUncheckedCreateWithoutCardsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutCardsInput
    connect?: HeroWhereUniqueInput
  }

  export type EnumCardTypeFieldUpdateOperationsInput = {
    set?: $Enums.CardType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HeroUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<HeroCreateWithoutCardsInput, HeroUncheckedCreateWithoutCardsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutCardsInput
    upsert?: HeroUpsertWithoutCardsInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutCardsInput, HeroUpdateWithoutCardsInput>, HeroUncheckedUpdateWithoutCardsInput>
  }

  export type HeroCreateNestedOneWithoutSpellbookCardsInput = {
    create?: XOR<HeroCreateWithoutSpellbookCardsInput, HeroUncheckedCreateWithoutSpellbookCardsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutSpellbookCardsInput
    connect?: HeroWhereUniqueInput
  }

  export type HeroUpdateOneRequiredWithoutSpellbookCardsNestedInput = {
    create?: XOR<HeroCreateWithoutSpellbookCardsInput, HeroUncheckedCreateWithoutSpellbookCardsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutSpellbookCardsInput
    upsert?: HeroUpsertWithoutSpellbookCardsInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutSpellbookCardsInput, HeroUpdateWithoutSpellbookCardsInput>, HeroUncheckedUpdateWithoutSpellbookCardsInput>
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

  export type NestedEnumCollectionFilter<$PrismaModel = never> = {
    equals?: $Enums.Collection | EnumCollectionFieldRefInput<$PrismaModel>
    in?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionFilter<$PrismaModel> | $Enums.Collection
  }

  export type NestedEnumClassFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassFilter<$PrismaModel> | $Enums.Class
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumCollectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Collection | EnumCollectionFieldRefInput<$PrismaModel>
    in?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Collection[] | ListEnumCollectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionWithAggregatesFilter<$PrismaModel> | $Enums.Collection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollectionFilter<$PrismaModel>
    _max?: NestedEnumCollectionFilter<$PrismaModel>
  }

  export type NestedEnumClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassWithAggregatesFilter<$PrismaModel> | $Enums.Class
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassFilter<$PrismaModel>
    _max?: NestedEnumClassFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
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

  export type NestedEnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
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

  export type HeroRoleCreateWithoutHeroInput = {
    role: $Enums.Role
    priority?: number
  }

  export type HeroRoleUncheckedCreateWithoutHeroInput = {
    id?: number
    role: $Enums.Role
    priority?: number
  }

  export type HeroRoleCreateOrConnectWithoutHeroInput = {
    where: HeroRoleWhereUniqueInput
    create: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput>
  }

  export type HeroRoleCreateManyHeroInputEnvelope = {
    data: HeroRoleCreateManyHeroInput | HeroRoleCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutHeroInput = {
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
  }

  export type CardUncheckedCreateWithoutHeroInput = {
    id?: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
  }

  export type CardCreateOrConnectWithoutHeroInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput>
  }

  export type CardCreateManyHeroInputEnvelope = {
    data: CardCreateManyHeroInput | CardCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type SpellbookCardCreateWithoutHeroInput = {
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
  }

  export type SpellbookCardUncheckedCreateWithoutHeroInput = {
    id?: number
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
  }

  export type SpellbookCardCreateOrConnectWithoutHeroInput = {
    where: SpellbookCardWhereUniqueInput
    create: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput>
  }

  export type SpellbookCardCreateManyHeroInputEnvelope = {
    data: SpellbookCardCreateManyHeroInput | SpellbookCardCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type HeroRoleUpsertWithWhereUniqueWithoutHeroInput = {
    where: HeroRoleWhereUniqueInput
    update: XOR<HeroRoleUpdateWithoutHeroInput, HeroRoleUncheckedUpdateWithoutHeroInput>
    create: XOR<HeroRoleCreateWithoutHeroInput, HeroRoleUncheckedCreateWithoutHeroInput>
  }

  export type HeroRoleUpdateWithWhereUniqueWithoutHeroInput = {
    where: HeroRoleWhereUniqueInput
    data: XOR<HeroRoleUpdateWithoutHeroInput, HeroRoleUncheckedUpdateWithoutHeroInput>
  }

  export type HeroRoleUpdateManyWithWhereWithoutHeroInput = {
    where: HeroRoleScalarWhereInput
    data: XOR<HeroRoleUpdateManyMutationInput, HeroRoleUncheckedUpdateManyWithoutHeroInput>
  }

  export type HeroRoleScalarWhereInput = {
    AND?: HeroRoleScalarWhereInput | HeroRoleScalarWhereInput[]
    OR?: HeroRoleScalarWhereInput[]
    NOT?: HeroRoleScalarWhereInput | HeroRoleScalarWhereInput[]
    id?: IntFilter<"HeroRole"> | number
    heroId?: IntFilter<"HeroRole"> | number
    role?: EnumRoleFilter<"HeroRole"> | $Enums.Role
    priority?: IntFilter<"HeroRole"> | number
  }

  export type CardUpsertWithWhereUniqueWithoutHeroInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutHeroInput, CardUncheckedUpdateWithoutHeroInput>
    create: XOR<CardCreateWithoutHeroInput, CardUncheckedCreateWithoutHeroInput>
  }

  export type CardUpdateWithWhereUniqueWithoutHeroInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutHeroInput, CardUncheckedUpdateWithoutHeroInput>
  }

  export type CardUpdateManyWithWhereWithoutHeroInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutHeroInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    heroId?: IntFilter<"Card"> | number
    cardIndex?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    cardLevel?: IntNullableFilter<"Card"> | number | null
    initiativeValue?: IntNullableFilter<"Card"> | number | null
    attackValue?: IntNullableFilter<"Card"> | number | null
    defenseValue?: IntNullableFilter<"Card"> | number | null
    movementValue?: IntNullableFilter<"Card"> | number | null
    rangeValue?: IntNullableFilter<"Card"> | number | null
    effectText?: StringNullableFilter<"Card"> | string | null
    hasAftershock?: BoolFilter<"Card"> | boolean
    cardImage?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type SpellbookCardUpsertWithWhereUniqueWithoutHeroInput = {
    where: SpellbookCardWhereUniqueInput
    update: XOR<SpellbookCardUpdateWithoutHeroInput, SpellbookCardUncheckedUpdateWithoutHeroInput>
    create: XOR<SpellbookCardCreateWithoutHeroInput, SpellbookCardUncheckedCreateWithoutHeroInput>
  }

  export type SpellbookCardUpdateWithWhereUniqueWithoutHeroInput = {
    where: SpellbookCardWhereUniqueInput
    data: XOR<SpellbookCardUpdateWithoutHeroInput, SpellbookCardUncheckedUpdateWithoutHeroInput>
  }

  export type SpellbookCardUpdateManyWithWhereWithoutHeroInput = {
    where: SpellbookCardScalarWhereInput
    data: XOR<SpellbookCardUpdateManyMutationInput, SpellbookCardUncheckedUpdateManyWithoutHeroInput>
  }

  export type SpellbookCardScalarWhereInput = {
    AND?: SpellbookCardScalarWhereInput | SpellbookCardScalarWhereInput[]
    OR?: SpellbookCardScalarWhereInput[]
    NOT?: SpellbookCardScalarWhereInput | SpellbookCardScalarWhereInput[]
    id?: IntFilter<"SpellbookCard"> | number
    heroId?: IntFilter<"SpellbookCard"> | number
    spellLevel?: IntFilter<"SpellbookCard"> | number
    cardIndex?: IntFilter<"SpellbookCard"> | number
    name?: StringFilter<"SpellbookCard"> | string
    cardType?: EnumCardTypeFilter<"SpellbookCard"> | $Enums.CardType
    initiativeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    attackValue?: IntNullableFilter<"SpellbookCard"> | number | null
    defenseValue?: IntNullableFilter<"SpellbookCard"> | number | null
    movementValue?: IntNullableFilter<"SpellbookCard"> | number | null
    rangeValue?: IntNullableFilter<"SpellbookCard"> | number | null
    effectText?: StringNullableFilter<"SpellbookCard"> | string | null
    cardImage?: StringFilter<"SpellbookCard"> | string
    backImage?: StringNullableFilter<"SpellbookCard"> | string | null
    createdAt?: DateTimeFilter<"SpellbookCard"> | Date | string
  }

  export type HeroCreateWithoutRolesInput = {
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardUncheckedCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutRolesInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutRolesInput, HeroUncheckedCreateWithoutRolesInput>
  }

  export type HeroUpsertWithoutRolesInput = {
    update: XOR<HeroUpdateWithoutRolesInput, HeroUncheckedUpdateWithoutRolesInput>
    create: XOR<HeroCreateWithoutRolesInput, HeroUncheckedCreateWithoutRolesInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutRolesInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutRolesInput, HeroUncheckedUpdateWithoutRolesInput>
  }

  export type HeroUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUncheckedUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroCreateWithoutCardsInput = {
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutCardsInput = {
    id?: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleUncheckedCreateNestedManyWithoutHeroInput
    spellbookCards?: SpellbookCardUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutCardsInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutCardsInput, HeroUncheckedCreateWithoutCardsInput>
  }

  export type HeroUpsertWithoutCardsInput = {
    update: XOR<HeroUpdateWithoutCardsInput, HeroUncheckedUpdateWithoutCardsInput>
    create: XOR<HeroCreateWithoutCardsInput, HeroUncheckedCreateWithoutCardsInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutCardsInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutCardsInput, HeroUncheckedUpdateWithoutCardsInput>
  }

  export type HeroUpdateWithoutCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUncheckedUpdateManyWithoutHeroNestedInput
    spellbookCards?: SpellbookCardUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroCreateWithoutSpellbookCardsInput = {
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleCreateNestedManyWithoutHeroInput
    cards?: CardCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutSpellbookCardsInput = {
    id?: number
    name: string
    slug: string
    collection: $Enums.Collection
    class: $Enums.Class
    complexity: number
    attack: number
    defense: number
    initiative: number
    movement: number
    heroCardImage: string
    cardBackImage: string
    folderPath: string
    hasSpellbook?: boolean
    deckSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: HeroRoleUncheckedCreateNestedManyWithoutHeroInput
    cards?: CardUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutSpellbookCardsInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutSpellbookCardsInput, HeroUncheckedCreateWithoutSpellbookCardsInput>
  }

  export type HeroUpsertWithoutSpellbookCardsInput = {
    update: XOR<HeroUpdateWithoutSpellbookCardsInput, HeroUncheckedUpdateWithoutSpellbookCardsInput>
    create: XOR<HeroCreateWithoutSpellbookCardsInput, HeroUncheckedCreateWithoutSpellbookCardsInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutSpellbookCardsInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutSpellbookCardsInput, HeroUncheckedUpdateWithoutSpellbookCardsInput>
  }

  export type HeroUpdateWithoutSpellbookCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUpdateManyWithoutHeroNestedInput
    cards?: CardUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutSpellbookCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    collection?: EnumCollectionFieldUpdateOperationsInput | $Enums.Collection
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    complexity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    initiative?: IntFieldUpdateOperationsInput | number
    movement?: IntFieldUpdateOperationsInput | number
    heroCardImage?: StringFieldUpdateOperationsInput | string
    cardBackImage?: StringFieldUpdateOperationsInput | string
    folderPath?: StringFieldUpdateOperationsInput | string
    hasSpellbook?: BoolFieldUpdateOperationsInput | boolean
    deckSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: HeroRoleUncheckedUpdateManyWithoutHeroNestedInput
    cards?: CardUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroRoleCreateManyHeroInput = {
    id?: number
    role: $Enums.Role
    priority?: number
  }

  export type CardCreateManyHeroInput = {
    id?: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    cardLevel?: number | null
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    hasAftershock?: boolean
    cardImage: string
    createdAt?: Date | string
  }

  export type SpellbookCardCreateManyHeroInput = {
    id?: number
    spellLevel: number
    cardIndex: number
    name: string
    cardType: $Enums.CardType
    initiativeValue?: number | null
    attackValue?: number | null
    defenseValue?: number | null
    movementValue?: number | null
    rangeValue?: number | null
    effectText?: string | null
    cardImage: string
    backImage?: string | null
    createdAt?: Date | string
  }

  export type HeroRoleUpdateWithoutHeroInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type HeroRoleUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type HeroRoleUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type CardUpdateWithoutHeroInput = {
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    cardLevel?: NullableIntFieldUpdateOperationsInput | number | null
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    hasAftershock?: BoolFieldUpdateOperationsInput | boolean
    cardImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardUpdateWithoutHeroInput = {
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpellbookCardUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    spellLevel?: IntFieldUpdateOperationsInput | number
    cardIndex?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    initiativeValue?: NullableIntFieldUpdateOperationsInput | number | null
    attackValue?: NullableIntFieldUpdateOperationsInput | number | null
    defenseValue?: NullableIntFieldUpdateOperationsInput | number | null
    movementValue?: NullableIntFieldUpdateOperationsInput | number | null
    rangeValue?: NullableIntFieldUpdateOperationsInput | number | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardImage?: StringFieldUpdateOperationsInput | string
    backImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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