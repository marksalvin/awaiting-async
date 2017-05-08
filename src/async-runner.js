const isPromise = obj =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

/**
 * A runner for stepping through generators containing yielded promises.
 * This function should not be called if the iterator is already "done".
 */
const asyncRunner = (thenable, resolve, reject, it) => {
  try {
    if (!isPromise(thenable)) {
      // Only promises can be yielded by function
      return reject(`Only promises may be yielded, but "${thenable}" was yielded instead`);
    }

    thenable
      .then(result => {
        const { value, done } = it.next(result);
        return done ? resolve(value) : asyncRunner(value, resolve, reject, it);
      })
      .catch(error => {
        let value, done;

        try {
          const itResponse = it.throw(new Error(error));
          value = itResponse.value;
          done = itResponse.done;
        } catch (error) {
          /*
           * When error passed into generator is not caught, it will be caught here. Else caught in
           * outer try catch
           */
          return reject(error);
        }

        return done ? resolve(value) : asyncRunner(value, resolve, reject, it);
      });
  } catch (error) {
    return reject(error);
  }
};

module.exports = asyncRunner;