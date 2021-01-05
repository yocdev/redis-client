import { ClusterCommandType, ConnectionCommandType, GeoCommandType, HashesCommandType, HyperLogLogCommandType, KeysCommandType, ListsCommandType, PubSubCommandType, ScriptingCommandType, ServerCommandType, SetsCommandType, SortedSetsCommandType, StreamsCommandType, StringsCommandType, TransactionCommandType } from './RedisCommands';
export declare type MiddlewareSupportCommandType = HashesCommandType | KeysCommandType | ListsCommandType | SetsCommandType | SortedSetsCommandType | StringsCommandType | '*';
export declare type RedisClientOption = {
    host: string;
    port: number;
    password?: string;
};
export declare type BeforeMiddleware = (command: string, args: unknown[]) => Promise<unknown | undefined>;
export declare type AfterMiddleware = (command: string, args: unknown[], commandResult: unknown) => Promise<unknown | undefined>;
declare type RedisClientType = {
    exec<T>(command: string, ...args: unknown[]): Promise<T>;
};
declare class Command<Commands> {
    private readonly redisClient;
    private readonly key?;
    constructor(redisClient: RedisClientType, key?: string);
    send<T>(command: Commands, ...args: unknown[]): Promise<T>;
}
declare type KeyOptions = {
    [name: string]: string | number;
};
export declare abstract class RedisClient<Keys> {
    options: RedisClientOption;
    private beforeMiddlewares;
    private afterMiddlewares;
    constructor(options: RedisClientOption);
    abstract connect(): Promise<void>;
    abstract disconnect(): Promise<void>;
    protected abstract sendCommand<T>(command: string, ...args: unknown[]): Promise<T>;
    keys(key?: Keys, options?: KeyOptions): Command<KeysCommandType>;
    strings(key: Keys, options?: KeyOptions): Command<StringsCommandType>;
    hashes(key: Keys, options?: KeyOptions): Command<HashesCommandType>;
    lists(key: Keys, options?: KeyOptions): Command<ListsCommandType>;
    sets(key: Keys, options?: KeyOptions): Command<SetsCommandType>;
    sortedSets(key: Keys, options?: KeyOptions): Command<SortedSetsCommandType>;
    scripting(): Command<ScriptingCommandType>;
    cluster(key?: Keys, options?: KeyOptions): Command<ClusterCommandType>;
    connection(): Command<ConnectionCommandType>;
    geo(key: Keys, options?: KeyOptions): Command<GeoCommandType>;
    hyperLogLog(key: Keys, options?: KeyOptions): Command<HyperLogLogCommandType>;
    pubSub(): Command<PubSubCommandType>;
    server(key?: Keys, options?: KeyOptions): Command<ServerCommandType>;
    streams(key?: Keys, options?: KeyOptions): Command<StreamsCommandType>;
    transaction(key?: Keys, options?: KeyOptions): Command<TransactionCommandType>;
    private newCommand;
    before(command: MiddlewareSupportCommandType, middleware: BeforeMiddleware): void;
    post(command: MiddlewareSupportCommandType, middleware: AfterMiddleware): void;
    exec<T>(command: string, ...args: unknown[]): Promise<T>;
    private handleBeforeMiddlewares;
    private handleAfterMiddlewares;
}
export {};
