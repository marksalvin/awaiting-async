const test = require('ava');
const awaitingAsync = require('../src/awaiting-async');

test('that function returns a promise', t => {

  const fakeGenerator = function *() {};
  const target = awaitingAsync;
  
  const actual = typeof (target(fakeGenerator).then);
  const expected = 'function';

  t.is(actual, expected,
    'function is thenable therefore a promise');

});