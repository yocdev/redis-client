import {
  ClusterCommandType,
  ConnectionCommandType,
  GeoCommandType, HashesCommands,
  HashesCommandType,
  HyperLogLogCommandType, KeysCommands,
  KeysCommandType, ListsCommands,
  ListsCommandType,
  PubSubCommandType,
  ScriptingCommandType,
  ServerCommandType, SetsCommands,
  SetsCommandType, SortedSetsCommands,
  SortedSetsCommandType,
  StreamsCommandType, StringsCommands,
  StringsCommandType,
  TransactionCommandType,
} from './RedisCommands'

export type MiddlewareSupportCommandType =
  HashesCommandType |
  KeysCommandType |
  ListsCommandType |
  SetsCommandType |
  SortedSetsCommandType |
  StringsCommandType |
  '*'


export type RedisClientOption = {
  host: string
  port: number
  password?: string
}

export type BeforeMiddleware = (command: string, args: unknown[]) => Promise<unknown | undefined>
export type AfterMiddleware =
  (command: string, args: unknown[], commandResult: unknown) => Promise<unknown | undefined>

type RedisClientType = {
  exec<T>(command: string, ...args: unknown[]): Promise<T>
}

class Command<Commands> {
  private readonly redisClient: RedisClientType

  private readonly key?: string

  constructor(redisClient: RedisClientType, key?: string) {
    this.redisClient = redisClient
    this.key = key
  }

  send<T>(command: Commands, ...args: unknown[]): Promise<T> {
    if (this.key) {
      return this.redisClient.exec<T>(command as unknown as string, this.key, ...args)
    } else {
      return this.redisClient.exec<T>(command as unknown as string, ...args)
    }
  }
}

type KeyOptions = {
  [name: string]: string | number
}

function isMiddlewareSupportCommand(command: any): command is MiddlewareSupportCommandType {
  return HashesCommands.includes(command) ||
    KeysCommands.includes(command) ||
    ListsCommands.includes(command) ||
    SetsCommands.includes(command) ||
    SortedSetsCommands.includes(command) ||
    StringsCommands.includes(command)
}

export abstract class RedisClient<Keys> {
  options: RedisClientOption

  private beforeMiddlewares: {
    [command: string]: BeforeMiddleware[]
  } = {}

  private afterMiddlewares: {
    [command: string]: AfterMiddleware[]
  } = {}

  constructor(options: RedisClientOption) {
    this.options = options
  }

  abstract connect(): Promise<void>

  abstract disconnect(): Promise<void>

  protected abstract sendCommand<T>(command: string, ...args: unknown[]): Promise<T>

  keys(key?: Keys, options?: KeyOptions): Command<KeysCommandType> {
    return this.newCommand(key, options)
  }

  strings(key: Keys, options?: KeyOptions): Command<StringsCommandType> {
    return this.newCommand(key, options)
  }

  hashes(key: Keys, options?: KeyOptions): Command<HashesCommandType> {
    return this.newCommand(key, options)
  }

  lists(key: Keys, options?: KeyOptions): Command<ListsCommandType> {
    return this.newCommand(key, options)
  }

  sets(key: Keys, options?: KeyOptions): Command<SetsCommandType> {
    return this.newCommand(key, options)
  }

  sortedSets(key: Keys, options?: KeyOptions): Command<SortedSetsCommandType> {
    return this.newCommand(key, options)
  }

  scripting(): Command<ScriptingCommandType> {
    return this.newCommand()
  }

  cluster(key?: Keys, options?: KeyOptions): Command<ClusterCommandType> {
    return this.newCommand(key, options)
  }

  connection(): Command<ConnectionCommandType> {
    return this.newCommand()
  }

  geo(key: Keys, options?: KeyOptions): Command<GeoCommandType> {
    return this.newCommand(key, options)
  }

  hyperLogLog(key: Keys, options?: KeyOptions): Command<HyperLogLogCommandType> {
    return this.newCommand(key, options)
  }

  pubSub(): Command<PubSubCommandType> {
    return this.newCommand()
  }

  server(key?: Keys, options?: KeyOptions): Command<ServerCommandType> {
    return this.newCommand(key, options)
  }

  streams(key?: Keys, options?: KeyOptions): Command<StreamsCommandType> {
    return this.newCommand(key, options)
  }

  transaction(key?: Keys, options?: KeyOptions): Command<TransactionCommandType> {
    return this.newCommand(key, options)
  }

  private newCommand<Commands>(key?: Keys, options?: KeyOptions): Command<Commands> {
    let keyStr: undefined | string
    if (key) {
      keyStr = key as unknown as string
      if (options) {
        Object.keys(options).forEach(name => {
          keyStr = keyStr?.replace(`{${name}}`, `${options[name]}`)
        })
      }
    }
    return new Command<Commands>(this, keyStr)
  }

  before(command: MiddlewareSupportCommandType, middleware: BeforeMiddleware): void {
    if (!this.beforeMiddlewares[command]) {
      this.beforeMiddlewares[command] = []
    }
    this.beforeMiddlewares[command].push(middleware)
  }

  post(command: MiddlewareSupportCommandType, middleware: AfterMiddleware): void {
    if (!this.afterMiddlewares[command]) {
      this.afterMiddlewares[command] = []
    }
    this.afterMiddlewares[command].push(middleware)
  }

  async exec<T>(command: string, ...args: unknown[]): Promise<T> {
    let newArgs = args
    if (isMiddlewareSupportCommand(command)) {
      newArgs = await this.handleBeforeMiddlewares(command, args)
    }

    const result = await this.sendCommand<T>(command, ...newArgs)

    let finalResult: unknown = result
    if (isMiddlewareSupportCommand(command)) {
      finalResult = await this.handleAfterMiddlewares(command, args, result)
    }
    return finalResult as T
  }

  private async handleBeforeMiddlewares(
    command: MiddlewareSupportCommandType,
    args: unknown[],
  ): Promise<unknown[]> {
    let execArgs = args
    const allCommandMiddlewares = this.beforeMiddlewares['*'] || []
    const commandMiddlewares = this.beforeMiddlewares[command] || []
    for (const middleware of [...allCommandMiddlewares, ...commandMiddlewares]) {
      const newArgs = (await middleware(command, execArgs)) as unknown[]
      if (newArgs) {
        execArgs = newArgs
      }
    }

    return execArgs
  }

  private async handleAfterMiddlewares(
    command: MiddlewareSupportCommandType,
    args: unknown[],
    commandResult: unknown,
  ): Promise<unknown> {
    let newCommandResult = commandResult
    const allCommandMiddlewares = this.afterMiddlewares['*'] || []
    const commandMiddlewares = this.afterMiddlewares[command] || []
    for (const middleware of [...allCommandMiddlewares, ...commandMiddlewares]) {
      const result = await middleware(command, args, newCommandResult)
      if (result) {
        newCommandResult = result
      }
    }
    return newCommandResult
  }
}
