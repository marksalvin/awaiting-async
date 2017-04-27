const test = require('ava');
const awaitingAsync = require('../src/awaiting-async');

test.skip('that function returns a promise', t => {

  const fakeGenerator = function *() {};
  const target = awaitingAsync;
  
  const actual = typeof (target(fakeGenerator).then);
  const expected = 'function';

  t.is(actual, expected,
    'function is thenable therefore a promise');

});

test.skip('that when generator has no yields it resolves', t => {
  
  t.plan(1);

  const fakeGenerator = function *() {};
  const target = awaitingAsync;
  
  target(fakeGenerator).then(result => {
    const actual = result;
    const expected = undefined;
    
    t.is(actual, expected,
      'expected value returned');
  });

});

test('that when generator has one resolved yield it resolves', t => {
 
  const fakePromise = () => new Promise((resolve, reject) => resolve());

  const fakeGenerator = function *() {
    const value = yield fakePromise();
  };
  const target = awaitingAsync;
  
  return target(fakeGenerator).then(result => {
    const actual = result;
    const expected = undefined;
    
    t.is(actual, expected,
      'expected value returned');
  });

});