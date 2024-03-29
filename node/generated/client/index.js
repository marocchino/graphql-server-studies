Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync,
} = require("./runtime/library");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

const fs = require("fs");

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== "undefined" && __dirname !== "/";

// will work in most cases, ie. if the client has not been bundled
const regularDirname =
  hasDirname &&
  fs.existsSync(path.join(__dirname, "schema.prisma")) &&
  __dirname;

// if the client has been bundled, we need to look for the folders
const foundDirname =
  !regularDirname &&
  findSync(process.cwd(), ["generated/client", "client"], ["d"], ["d"], 1)[0];

const dirname = regularDirname || foundDirname || __dirname;

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x;
}

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: "id",
  name: "name",
  description: "description",
  due_on: "due_on",
});

exports.Prisma.QueryMode = makeEnum({
  default: "default",
  insensitive: "insensitive",
});

exports.Prisma.SortOrder = makeEnum({
  asc: "asc",
  desc: "desc",
});

exports.Prisma.TaskScalarFieldEnum = makeEnum({
  id: "id",
  name: "name",
  completed: "completed",
  project_id: "project_id",
  created_at: "created_at",
  updated_at: "updated_at",
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: "id",
  email: "email",
  name: "name",
});

exports.Prisma.ModelName = makeEnum({
  User: "User",
  Project: "Project",
  Task: "Task",
});

const dmmfString =
  '{"datamodel":{"enums":[],"models":[{"name":"User","dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Project","dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"due_on","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"tasks","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Task","relationName":"ProjectToTask","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Task","dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"completed","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"project_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"ProjectToTask","relationFromFields":["project_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}],"types":[]},"mappings":{"modelOperations":[{"model":"User","plural":"users","findUnique":"findUniqueUser","findUniqueOrThrow":"findUniqueUserOrThrow","findFirst":"findFirstUser","findFirstOrThrow":"findFirstUserOrThrow","findMany":"findManyUser","create":"createOneUser","createMany":"createManyUser","delete":"deleteOneUser","update":"updateOneUser","deleteMany":"deleteManyUser","updateMany":"updateManyUser","upsert":"upsertOneUser","aggregate":"aggregateUser","groupBy":"groupByUser"},{"model":"Project","plural":"projects","findUnique":"findUniqueProject","findUniqueOrThrow":"findUniqueProjectOrThrow","findFirst":"findFirstProject","findFirstOrThrow":"findFirstProjectOrThrow","findMany":"findManyProject","create":"createOneProject","createMany":"createManyProject","delete":"deleteOneProject","update":"updateOneProject","deleteMany":"deleteManyProject","updateMany":"updateManyProject","upsert":"upsertOneProject","aggregate":"aggregateProject","groupBy":"groupByProject"},{"model":"Task","plural":"tasks","findUnique":"findUniqueTask","findUniqueOrThrow":"findUniqueTaskOrThrow","findFirst":"findFirstTask","findFirstOrThrow":"findFirstTaskOrThrow","findMany":"findManyTask","create":"createOneTask","createMany":"createManyTask","delete":"deleteOneTask","update":"updateOneTask","deleteMany":"deleteManyTask","updateMany":"updateManyTask","upsert":"upsertOneTask","aggregate":"aggregateTask","groupBy":"groupByTask"}],"otherOperations":{"read":[],"write":["executeRaw","queryRaw"]}}}';
const dmmf = JSON.parse(dmmfString);
exports.Prisma.dmmf = JSON.parse(dmmfString);

/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "/Users/marocchino/Documents/graphql-server-studies/node/generated/client",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: "../../.env",
    schemaEnvPath: "../../.env",
  },
  relativePath: "../../prisma",
  clientVersion: "4.12.0",
  engineVersion: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  dataProxy: false,
};
config.dirname = dirname;
config.document = dmmf;

const { warnEnvConflicts } = require("./runtime/library");

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(
  process.cwd(),
  "generated/client/libquery_engine-darwin-arm64.dylib.node"
);
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma");
