const isPromise = require('./is-promise');
const proxyFunctionCall = require('./proxy-function-call');

const handleFulfilledPromise = (resolve, reject, it) => result => {
  const { value, done } = it.next(result);
  return done ? resolve(value) : proxyFunctionCall(runner, [value, resolve, reject, it]);
};

const handleRejectedPromise = ({ resolve, reject }, it) => error => {
  let value, done;

  try {
    const itResponse = it.throw(new Error(error));
    value = itResponse.value;
    done = itResponse.done;
  } catch (error) {
    // When error passed into generator is not caught, it will be caught here.
    return reject(error);
  }

  return done ? resolve(value) : proxyFunctionCall(runner, [value, resolve, reject, it]);
};

/**
 * A runner for stepping through generators containing yielded promises.
 * This function should not be called if the iterator is already "done".
 */
const runner = ({ thenable, resolve, reject }, it) => {
  if (!isPromise(thenable)) {
    // Only promises can be yielded by function
    return reject(`Only promises may be yielded, but "${thenable}" was yielded instead`);
  }

  thenable
    .then(handleFulfilledPromise({ resolve, reject }, it))
    .catch(handleRejectedPromise({ resolve, reject }, it));
};

module.exports = runner;
