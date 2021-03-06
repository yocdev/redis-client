"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCommands = exports.StringsCommands = exports.StreamsCommands = exports.SortedSetsCommands = exports.SetsCommands = exports.ServerCommands = exports.ScriptingCommands = exports.PubSubCommands = exports.ListsCommands = exports.KeysCommands = exports.HyperLogLogCommands = exports.HashesCommands = exports.GeoCommands = exports.ConnectionCommands = exports.ClusterCommands = void 0;
exports.ClusterCommands = [
    'CLUSTER',
    'CLUSTER BUMPEPOCH',
    'CLUSTER COUNT-FAILURE-REPORTS',
    'CLUSTER COUNTKEYSINSLOT',
    'CLUSTER DELSLOTS',
    'CLUSTER FAILOVER',
    'CLUSTER FLUSHSLOTS',
    'CLUSTER FORGET',
    'CLUSTER GETKEYSINSLOT',
    'CLUSTER INFO',
    'CLUSTER KEYSLOT',
    'CLUSTER MEET',
    'CLUSTER MYID',
    'CLUSTER NODES',
    'CLUSTER REPLICATE',
    'CLUSTER RESET',
    'CLUSTER SAVECONFIG',
    'CLUSTER SET-CONFIG-EPOCH',
    'CLUSTER SETSLOT',
    'CLUSTER SLAVES',
    'CLUSTER REPLICAS',
    'CLUSTER SLOTS',
    'READONLY',
    'READWRITE',
];
exports.ConnectionCommands = [
    'AUTH',
    'CLIENT CACHING',
    'CLIENT ID',
    'CLIENT INFO',
    'CLIENT KILL',
    'CLIENT LIST',
    'CLIENT GETNAME',
    'CLIENT GETREDIR',
    'CLIENT PAUSE',
    'CLIENT REPLY',
    'CLIENT SETNAME',
    'CLIENT TRACKING',
    'CLIENT UNBLOCK',
    'ECHO',
    'HELLO',
    'PING',
    'QUIT',
    'RESET',
    'SELECT',
];
exports.GeoCommands = [
    'GEOADD',
    'GEOHASH',
    'GEOPOS',
    'GEODIST',
    'GEORADIUS',
    'GEORADIUSBYMEMBER',
];
exports.HashesCommands = [
    'HDEL',
    'HEXISTS',
    'HGET',
    'HGETALL',
    'HINCRBY',
    'HINCRBYFLOAT',
    'HKEYS',
    'HLEN',
    'HMGET',
    'HMSET',
    'HSET',
    'HSETNX',
];
exports.HyperLogLogCommands = [
    'PFADD',
    'PFCOUNT',
    'PFMERGE',
];
exports.KeysCommands = [
    'COPY',
    'DEL',
    'DUMP',
    'EXISTS',
    'EXPIRE',
    'EXPIREAT',
    'KEYS',
    'MIGRATE',
    'MOVE',
    'OBJECT',
    'PERSIST',
    'PEXPIRE',
    'PEXPIREAT',
    'PTTL',
    'RANDOMKEY',
    'RENAME',
    'RENAMENX',
    'RESTORE',
    'SORT',
    'TOUCH',
    'TTL',
    'TYPE',
    'UNLINK',
    'WAIT',
    'SCAN',
];
exports.ListsCommands = [
    'BLPOP',
    'BRPOP',
    'BRPOPLPUSH',
    'BLMOVE',
    'LINDEX',
    'LINSERT',
    'LLEN',
    'LPOP',
    'LPOS',
    'LPUSH',
    'LPUSHX',
    'LRANGE',
    'LREM',
    'LSET',
    'LTRIM',
    'RPOP',
    'RPOPLPUSH',
    'LMOVE',
    'RPUSH',
    'RPUSHX',
];
exports.PubSubCommands = [
    'PSUBSCRIBE',
    'PUBSUB',
    'PUBLISH',
    'PUNSUBSCRIBE',
    'SUBSCRIBE',
    'UNSUBSCRIBE',
];
exports.ScriptingCommands = [
    'EVAL',
    'EVALSHA',
    'SCRIPT DEBUG',
    'SCRIPT EXISTS',
    'SCRIPT FLUSH',
    'SCRIPT KILL',
    'SCRIPT LOAD',
];
exports.ServerCommands = [
    'ACL LOAD',
    'ACL SAVE',
    'ACL LIST',
    'ACL USERS',
    'ACL GETUSER',
    'ACL SETUSER',
    'ACL DELUSER',
    'ACL CAT',
    'ACL GENPASS',
    'ACL WHOAMI',
    'ACL LOG',
    'ACL HELP',
    'BGREWRITEAOF',
    'BGSAVE',
    'COMMAND',
    'COMMAND COUNT',
    'COMMAND GETKEYS',
    'COMMAND INFO',
    'CONFIG GET',
    'CONFIG REWRITE',
    'CONFIG SET',
    'CONFIG RESETSTAT',
    'DBSIZE',
    'DEBUG OBJECT',
    'DEBUG SEGFAULT',
    'FLUSHALL',
    'FLUSHDB',
    'INFO',
    'LOLWUT',
    'LASTSAVE',
    'MEMORY DOCTOR',
    'MEMORY HELP',
    'MEMORY MALLOC-STATS',
    'MEMORY PURGE',
    'MEMORY STATS',
    'MEMORY USAGE',
    'MODULE LIST',
    'MODULE LOAD',
    'MODULE UNLOAD',
    'MONITOR',
    'ROLE',
    'SAVE',
    'SHUTDOWN',
    'SLAVEOF',
    'REPLICAOF',
    'SLOWLOG',
    'SWAPDB',
    'SYNC',
    'PSYNC',
    'TIME',
    'LATENCY DOCTOR',
    'LATENCY GRAPH',
    'LATENCY HISTORY',
    'LATENCY LATEST',
    'LATENCY RESET',
    'LATENCY HELP',
];
exports.SetsCommands = [
    'SADD',
    'SCARD',
    'SDIFF',
    'SDIFFSTORE',
    'SINTER',
    'SINTERSTORE',
    'SISMEMBER',
    'SMISMEMBER',
    'SMEMBERS',
    'SMOVE',
    'SPOP',
    'SRANDMEMBER',
    'SREM',
    'SUNION',
    'SUNIONSTORE',
    'SSCAN',
];
exports.SortedSetsCommands = [
    'BZPOPMIN',
    'BZPOPMAX',
    'ZADD',
    'ZCARD',
    'ZCOUNT',
    'ZDIFF',
    'ZDIFFSTORE',
    'ZINCRBY',
    'ZINTER',
    'ZINTERSTORE',
    'ZLEXCOUNT',
    'ZPOPMAX',
    'ZPOPMIN',
    'ZRANGE',
    'ZRANGEBYLEX',
    'ZREVRANGEBYLEX',
    'ZRANGEBYSCORE',
    'ZRANK',
    'ZREM',
    'ZREMRANGEBYLEX',
    'ZREMRANGEBYRANK',
    'ZREMRANGEBYSCORE',
    'ZREVRANGE',
    'ZREVRANGEBYSCORE',
    'ZREVRANK',
    'ZSCORE',
    'ZUNION',
    'ZMSCORE',
    'ZUNIONSTORE',
    'ZSCAN',
];
exports.StreamsCommands = [
    'XINFO',
    'XADD',
    'XTRIM',
    'XDEL',
    'XRANGE',
    'XREVRANGE',
    'XLEN',
    'XREAD',
    'XGROUP',
    'XREADGROUP GROUP',
    'XACK',
    'XCLAIM',
    'XPENDING',
];
exports.StringsCommands = [
    'APPEND',
    'BITCOUNT',
    'BITFIELD',
    'BITOP',
    'BITPOS',
    'DECR',
    'DECRBY',
    'GET',
    'GETBIT',
    'GETRANGE',
    'GETSET',
    'INCR',
    'INCRBY',
    'INCRBYFLOAT',
    'MGET',
    'MSET',
    'MSETNX',
    'PSETEX',
    'SET',
    'SETBIT',
    'SETEX',
    'SETNX',
    'SETRANGE',
    'STRALGO',
    'STRLEN',
];
exports.TransactionCommands = [
    'DISCARD',
    'EXEC',
    'MULTI',
    'UNWATCH',
    'WATCH',
];
