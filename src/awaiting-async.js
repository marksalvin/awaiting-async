let awaitingAsync = gen => {
  return new Promise((resolve, reject) => {
    function runner(thenable) {
      console.log('in the runner', thenable)
      thenable
        .then(result => {
          console.log('in the runner then');
          const { value, done } = it.next(result);

          if (done) {
            return resolve();
          } else {
            return runner(value);
          }
        })
        .catch(error => {
          let value, done;

          try {
            // TODO: I think that if it's an uncaught error it won't run this line???
            const itResponse = it.throw(new Error(error));
            value = itResponse.value;
            done = itResponse.done;
          } catch (err) {
            // Unhandled error within the generator
            // We only need to catch when passing in an error to the generator
            // Errors thrown in the generator will be caught in here anyway
            return reject(err);
          }

          if (done) {
            return resolve();
          } else {
            return runner(value);
          }
        });
    }

    // TODO: what if first call throws uncaught error???
    const it = gen();
    const { value, done } = it.next();

    if (done) {
      return resolve();
    }
    console.log(value, value.then)
    // Even if done, we still need to pass thenable result back into generator function
    runner(value);
  });
};

module.exports = awaitingAsync;
