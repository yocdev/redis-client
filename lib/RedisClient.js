"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const RedisCommands_1 = require("./RedisCommands");
class Command {
    constructor(redisClient, key) {
        this.redisClient = redisClient;
        this.key = key;
    }
    send(command, ...args) {
        if (this.key) {
            return this.redisClient.exec(command, this.key, ...args);
        }
        else {
            return this.redisClient.exec(command, ...args);
        }
    }
}
function isMiddlewareSupportCommand(command) {
    return RedisCommands_1.HashesCommands.includes(command) ||
        RedisCommands_1.KeysCommands.includes(command) ||
        RedisCommands_1.ListsCommands.includes(command) ||
        RedisCommands_1.SetsCommands.includes(command) ||
        RedisCommands_1.SortedSetsCommands.includes(command) ||
        RedisCommands_1.StringsCommands.includes(command);
}
class RedisClient {
    constructor(options) {
        this.beforeMiddlewares = {};
        this.afterMiddlewares = {};
        this.options = options;
    }
    keys(key, options) {
        return this.newCommand(key, options);
    }
    strings(key, options) {
        return this.newCommand(key, options);
    }
    hashes(key, options) {
        return this.newCommand(key, options);
    }
    lists(key, options) {
        return this.newCommand(key, options);
    }
    sets(key, options) {
        return this.newCommand(key, options);
    }
    sortedSets(key, options) {
        return this.newCommand(key, options);
    }
    scripting() {
        return this.newCommand();
    }
    cluster(key, options) {
        return this.newCommand(key, options);
    }
    connection() {
        return this.newCommand();
    }
    geo(key, options) {
        return this.newCommand(key, options);
    }
    hyperLogLog(key, options) {
        return this.newCommand(key, options);
    }
    pubSub() {
        return this.newCommand();
    }
    server(key, options) {
        return this.newCommand(key, options);
    }
    streams(key, options) {
        return this.newCommand(key, options);
    }
    transaction(key, options) {
        return this.newCommand(key, options);
    }
    newCommand(key, options) {
        let keyStr;
        if (key) {
            keyStr = key;
            if (options) {
                Object.keys(options).forEach(name => {
                    keyStr = keyStr === null || keyStr === void 0 ? void 0 : keyStr.replace(`{${name}}`, `${options[name]}`);
                });
            }
        }
        return new Command(this, keyStr);
    }
    before(command, middleware) {
        if (!this.beforeMiddlewares[command]) {
            this.beforeMiddlewares[command] = [];
        }
        this.beforeMiddlewares[command].push(middleware);
    }
    post(command, middleware) {
        if (!this.afterMiddlewares[command]) {
            this.afterMiddlewares[command] = [];
        }
        this.afterMiddlewares[command].push(middleware);
    }
    async exec(command, ...args) {
        let newArgs = args;
        if (isMiddlewareSupportCommand(command)) {
            newArgs = await this.handleBeforeMiddlewares(command, args);
        }
        const result = await this.sendCommand(command, ...newArgs);
        let finalResult = result;
        if (isMiddlewareSupportCommand(command)) {
            finalResult = await this.handleAfterMiddlewares(command, args, result);
        }
        return finalResult;
    }
    async handleBeforeMiddlewares(command, args) {
        let execArgs = args;
        const allCommandMiddlewares = this.beforeMiddlewares['*'] || [];
        const commandMiddlewares = this.beforeMiddlewares[command] || [];
        for (const middleware of [...allCommandMiddlewares, ...commandMiddlewares]) {
            const newArgs = (await middleware(command, execArgs));
            if (newArgs) {
                execArgs = newArgs;
            }
        }
        return execArgs;
    }
    async handleAfterMiddlewares(command, args, commandResult) {
        let newCommandResult = commandResult;
        const allCommandMiddlewares = this.afterMiddlewares['*'] || [];
        const commandMiddlewares = this.afterMiddlewares[command] || [];
        for (const middleware of [...allCommandMiddlewares, ...commandMiddlewares]) {
            const result = await middleware(command, args, newCommandResult);
            if (result) {
                newCommandResult = result;
            }
        }
        return newCommandResult;
    }
}
exports.RedisClient = RedisClient;
