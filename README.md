# Ghostfolio API

:point_right: Node.js/Typescript library to import data through Ghostfolio. :point_left:

[![Percentage of issues still open](http://isitmaintained.com/badge/open/aussedatlo/ghostfolio-api.svg)](http://isitmaintained.com/project/aussedatlo/ghostfolio-api 'Percentage of issues still open')
[![GitHub license](https://img.shields.io/github/license/aussedatlo/ghostfolio-api.svg)](https://github.com/aussedatlo/ghostfolio-api/blob/master/LICENSE.md)
[![npm version](https://img.shields.io/npm/v/ghostfolio-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/ghostfolio-api/latest)][1]
[![npm downloads](https://img.shields.io/npm/dt/ghostfolio-api)][1]
[![GitHub contributors](https://img.shields.io/github/contributors/aussedatlo/ghostfolio-api.svg)](https://GitHub.com/aussedatlo/ghostfolio-api/graphs/contributors/)
[![last commit](https://img.shields.io/github/last-commit/aussedatlo/ghostfolio-api)][1]

[1]: https://www.npmjs.com/package/ghostfolio-api

## :package: Install

```shell
yarn add ghostfolio-api
```

## :wrench: Build

```shell
yarn build
```

## :open_book: Examples

```typescript
const ghost = GhostfolioApi('access-token');

const requestBody: ImportRequestBody = {
  activities: [
    {
      currency: 'USD',
      dataSource: 'YAHOO',
      date: '2021-09-15T00:00:00.000Z',
      fee: 19,
      quantity: 5,
      symbol: 'MSFT',
      type: 'BUY',
      unitPrice: 298.58,
    },
  ],
};

await ghost.importData(requestBody);
```

## :test_tube: Tests

```shell
yarn test    # to be implemented
```

## :wave: Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests.
Be sur to run `yarn test` to run all tests, `yarn lint` to run eslint and `yarn prettier` to run the prettier.

## :warning: Disclamer

This is an unofficial NodeJS API wrapper for the Ghostfolio application, use at your own risk.
