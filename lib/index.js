const runner = require('./runner');

const main = generator =>
  new Promise((resolve, reject) => {
    const it = generator();
    const { value, done } = it.next();

    if (done) return resolve(value);

    return runner({ thenable: value, resolve, reject }, it);
  });

module.exports = main;
