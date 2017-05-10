const test = require('tape');
const proxyquire = require('proxyquire').noCallThru();

test('that function returns a promise', t => {

  t.plan(1);

  const target = proxyquire('../lib/', {});

  const fakeGenerator = function *() {};
  
  const actual = typeof (target(fakeGenerator).then);
  const expected = 'function';

  t.equals(actual, expected,
    'function is thenable therefore a promise');

});

test('that when generator has no yields it resolves with return value from generator', t => {
  
  t.plan(1);

  const target = proxyquire('../lib/', {
    './runner': () => t.fail('Async runner should not be called'),
  });

  const fakeGenerator = function *() {
    return 'fake return value';
  };
  
  target(fakeGenerator)
    .then(result => {
      const actual = result;
      const expected = 'fake return value';
      
      t.equals(actual, expected,
        'expected value returned');
    });

});

test('that when generator has a resolved yield it calls async runner with a resolved promise value, and returns fulfilled value from async runner', t => {

  t.plan(2);

  const target = proxyquire('../lib/', {
    './runner': (thenable, resolve, reject, it) => {
      thenable
        .then(result => {
          t.equal(result, 'fake resolution reason');
          return resolve('fake fulfilled value');
        })
    },
  });

  const fakeGenerator = function *() {
    const value = yield Promise.resolve('fake resolution reason');
  };

  target(fakeGenerator)
    .then(result => {
      const actual = result;
      const expected = 'fake fulfilled value';
      
      t.is(actual, expected,
        'expected value returned');
      
    });

});

test('that when generator has a rejected yield it calls async runner with a rejected promise value, and then returns fulfilled value from async runner', t => {
 
  t.plan(2);

  const target = proxyquire('../lib/', {
    './runner': (value, resolve, reject, it) => {
      value
        .catch(error => {
          t.equals(error, 'fake rejection reason');
          return resolve('fake fulfilled value');
        });
    },
  });

  const fakeGenerator = function *() {
    const value = yield Promise.reject('fake rejection reason');
  };

  target(fakeGenerator)
    .then(result => {
      const actual = result;
      const expected = 'fake fulfilled value';
      
      t.equals(actual, expected,
        'expected value returned');
      
    });

});

test('that when generator throws an unhandled error that error is thrown out of function into catch block due to promise nature', t => {

  t.plan(1);

  const target = proxyquire('../lib/', {
    './runner': (value, resolve, reject, it) => {
      t.fail('This should not be called');
    },
  });

  const fakeGenerator = function *() {
    throw new Error('fake error reason');
  };

  target(fakeGenerator)
    .then(result => {
      t.fail('This should not be called');
    })
    .catch(error => {
      const actual = error;
      const expected = new Error('fake error reason');
      
      t.deepEquals(actual, expected,
        'expected value thrown out of function');
      
    });

});
