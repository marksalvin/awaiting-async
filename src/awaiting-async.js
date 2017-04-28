const asyncRunner = require('./async-runner');

const awaitingAsync = generator =>
  new Promise((resolve, reject) => {
    const it = generator();
    const { value, done } = it.next();

    if (done) return resolve(value);

    return asyncRunner(value, resolve, reject, it);
  });

module.exports = awaitingAsync;
