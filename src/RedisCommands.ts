export const ClusterCommands = [
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
] as const

export type ClusterCommandType = typeof ClusterCommands[number]

export const ConnectionCommands = [
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
] as const

export type ConnectionCommandType = typeof ConnectionCommands[number]

export const GeoCommands = [
  'GEOADD',
  'GEOHASH',
  'GEOPOS',
  'GEODIST',
  'GEORADIUS',
  'GEORADIUSBYMEMBER',
] as const

export type GeoCommandType = typeof GeoCommands[number]

export const HashesCommands = [
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
] as const

export type HashesCommandType = typeof HashesCommands[number]

export const HyperLogLogCommands = [
  'PFADD',
  'PFCOUNT',
  'PFMERGE',
] as const

export type HyperLogLogCommandType = typeof HyperLogLogCommands[number]

export const KeysCommands = [
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
] as const

export type KeysCommandType = typeof KeysCommands[number]

export const ListsCommands = [
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
] as const

export type ListsCommandType = typeof ListsCommands[number]

export const PubSubCommands = [
  'PSUBSCRIBE',
  'PUBSUB',
  'PUBLISH',
  'PUNSUBSCRIBE',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
] as const

export type PubSubCommandType = typeof PubSubCommands[number]

export const ScriptingCommands = [
  'EVAL',
  'EVALSHA',
  'SCRIPT DEBUG',
  'SCRIPT EXISTS',
  'SCRIPT FLUSH',
  'SCRIPT KILL',
  'SCRIPT LOAD',
] as const

export type ScriptingCommandType = typeof ScriptingCommands[number]

export const ServerCommands = [
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
] as const

export type ServerCommandType = typeof ServerCommands[number]

export const SetsCommands = [
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
] as const

export type SetsCommandType = typeof SetsCommands[number]

export const SortedSetsCommands = [
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
] as const

export type SortedSetsCommandType = typeof SortedSetsCommands[number]

export const StreamsCommands = [
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
] as const

export type StreamsCommandType = typeof StreamsCommands[number]

export const StringsCommands = [
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
] as const

export type StringsCommandType = typeof StringsCommands[number]

export const TransactionCommands = [
  'DISCARD',
  'EXEC',
  'MULTI',
  'UNWATCH',
  'WATCH',
] as const

export type TransactionCommandType = typeof TransactionCommands[number]
