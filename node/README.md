# api server

## Why using...

- pothos: As of now, Pothos is one of the few alternatives that support TypeScript.
- graphql-yoga: It is being used as middleware for easily supporting GraphiQL and serving the schema.
- typescript: Strong typing support makes development more comfortable.
- jest: It is the most popular testing framework and is widely used in clients as well.

## development

### setup

```sh
brew install direnv
asdf install
npm i -g yarn
yarn
docker compose up -d
cp .env.sample .env
yarn prisma migrate reset
```

### run server

```sh
yarn prisma migrate deploy
yarn seed
yarn start
```

### test

```sh
yarn prisma migrate deploy
yarn seed
yarn test
```

## reference

- graphql-yoga: <https://the-guild.dev/graphql/yoga-server>
- pothos: <https://pothos-graphql.dev>
- typescript: <https://www.typescriptlang.org>
- jest: <https://jestjs.io>
