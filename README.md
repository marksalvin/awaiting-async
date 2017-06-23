# awaiting-async · ![alt](https://travis-ci.org/marksalvin/awaiting-async.svg?branch=master "Build") [![codecov](https://codecov.io/gh/marksalvin/awaiting-async/branch/master/graph/badge.svg)](https://codecov.io/gh/marksalvin/awaiting-async)

### Note - there appears to be an issue using bundle via npm, will release a fix soon

## About

awaiting-async is an async await precursor for promise based flow control sanity.

## Build

Use Node.js v6.10.2, with Yarn installed (optional).

To installed dependencies, run:

```
yarn install
```

or

```
npm install
```

To test your changes, run:

```
yarn test
```

or

```
npm test
```

To build the bundles, run:

```
yarn build
```

or

```
npm run build
```

## Usage

```
const aa = require('awaiting-async');

aa(function * () {
  yield Promise.resolve('Some val');
});
```