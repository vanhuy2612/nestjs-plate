## Installation

```bash
$ yarn install
```
## Prerequisite
Nodejs
Yarn global
Prisma global
## Running the app

```bash
# development
$ yarn prisma generate
$ yarn run start

# watch mode
$ yarn prisma generate
$ yarn run start:dev

# production mode
$ yarn prisma generate
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

## Swagger
http://<host>:<port>/docs/

## Database
Migrate: yarn prisma db push
Sync from exist instance: yarn prisma db pull
