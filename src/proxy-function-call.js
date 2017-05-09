/*
 * Proxy recursive function calls to allow for more visibility in unit tests
 */
const proxyFunctionCall = (proxiedFunction, functionArguments) =>
  proxiedFunction(...functionArguments);

module.exports = proxyFunctionCall;
