# awaiting-async · ![alt](https://travis-ci.org/marksalvin/awaiting-async.svg?branch=master "Build") [![codecov](https://codecov.io/gh/marksalvin/awaiting-async/branch/master/graph/badge.svg)](https://codecov.io/gh/marksalvin/awaiting-async)

## About

awaiting-async is an async await precursor for promise based flow control sanity.

This library is designed to be lightweight (working only with promises) and well tested making it suitable for use in anger.

## Usage

First, run:

```
yarn install awaiting-async
```

or

```
npm install awaiting-async
```

Sample code shown below:

```
const aa = require('awaiting-async');

aa(function * () {
  const result = yield Promise.resolve('Hello world!');
  console.log(result); // Hello world!
});
```

Simple! Enjoy.

(Tested and working against Node.js v6.x.x, testing against more platforms to come...)

## Contributing

PR's more than welcome, please add/amend unit tests as appropriate to go with PR.

### Build

Use latest Node.js version from 6.x.x branch (LTS), with Yarn installed (optional).

To install dependencies, run:

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
