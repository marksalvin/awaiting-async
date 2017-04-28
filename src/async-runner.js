// TODO: need to return resolved or rejected value and write tests!
// TODO: review error handling methods for uncaught thrown errors
const asyncRunner = (thenable, resolve, reject, it) => {
  console.log('in the runner', thenable)
  thenable
    .then(result => {
      console.log('in the runner then');
      const { value, done } = it.next(result);

      return done ? resolve() : runner(value);
    })
    .catch(error => {
      let value, done;
      try {
        // TODO: I think that if it's an uncaught error it won't run this line???
        const itResponse = it.throw(new Error(error));
        value = itResponse.value;
        done = itResponse.done;
      } catch (err) {
        /**
         * Unhandled error within the generator
         * We only need to catch when passing in an error to the generator
         * Errors thrown in the generator will be caught in here anyway
         */
        return reject(err);
      }

      return done ? resolve() : runner(value);
    });
};

module.exports = asyncRunner;