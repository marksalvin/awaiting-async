'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var __cov_6vs9kZ2pmkqTYjYXj5BKOQ = (Function('return this'))();
if (!__cov_6vs9kZ2pmkqTYjYXj5BKOQ.__coverage__) { __cov_6vs9kZ2pmkqTYjYXj5BKOQ.__coverage__ = {}; }
__cov_6vs9kZ2pmkqTYjYXj5BKOQ = __cov_6vs9kZ2pmkqTYjYXj5BKOQ.__coverage__;
if (!(__cov_6vs9kZ2pmkqTYjYXj5BKOQ['/Users/mark/awaiting-async/lib/is-promise.js'])) {
   __cov_6vs9kZ2pmkqTYjYXj5BKOQ['/Users/mark/awaiting-async/lib/is-promise.js'] = {"path":"/Users/mark/awaiting-async/lib/is-promise.js","s":{"1":0,"2":0,"3":0},"b":{"1":[0,0,0,0],"2":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"isPromise","line":1,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":40}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":2}},"2":{"start":{"line":2,"column":2},"end":{"line":2,"column":166}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":28}}},"branchMap":{"1":{"line":2,"type":"binary-expr","locations":[{"start":{"line":2,"column":9},"end":{"line":2,"column":14}},{"start":{"line":2,"column":19},"end":{"line":2,"column":101}},{"start":{"line":2,"column":105},"end":{"line":2,"column":130}},{"start":{"line":2,"column":135},"end":{"line":2,"column":165}}]},"2":{"line":2,"type":"cond-expr","locations":[{"start":{"line":2,"column":49},"end":{"line":2,"column":60}},{"start":{"line":2,"column":63},"end":{"line":2,"column":87}}]}}};
}
__cov_6vs9kZ2pmkqTYjYXj5BKOQ = __cov_6vs9kZ2pmkqTYjYXj5BKOQ['/Users/mark/awaiting-async/lib/is-promise.js'];
__cov_6vs9kZ2pmkqTYjYXj5BKOQ.s['1']++;var isPromise=function isPromise(obj){__cov_6vs9kZ2pmkqTYjYXj5BKOQ.f['1']++;__cov_6vs9kZ2pmkqTYjYXj5BKOQ.s['2']++;return(__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['1'][0]++,!!obj)&&((__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['1'][1]++,(typeof obj==='undefined'?(__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['2'][0]++,'undefined'):(__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['2'][1]++,_typeof(obj)))==='object')||(__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['1'][2]++,typeof obj==='function'))&&(__cov_6vs9kZ2pmkqTYjYXj5BKOQ.b['1'][3]++,typeof obj.then==='function');};__cov_6vs9kZ2pmkqTYjYXj5BKOQ.s['3']++;var isPromise_1=isPromise;

var __cov_nbB4k60ZISqvJw7YCcGnYQ = (Function('return this'))();
if (!__cov_nbB4k60ZISqvJw7YCcGnYQ.__coverage__) { __cov_nbB4k60ZISqvJw7YCcGnYQ.__coverage__ = {}; }
__cov_nbB4k60ZISqvJw7YCcGnYQ = __cov_nbB4k60ZISqvJw7YCcGnYQ.__coverage__;
if (!(__cov_nbB4k60ZISqvJw7YCcGnYQ['/Users/mark/awaiting-async/lib/proxy-function-call.js'])) {
   __cov_nbB4k60ZISqvJw7YCcGnYQ['/Users/mark/awaiting-async/lib/proxy-function-call.js'] = {"path":"/Users/mark/awaiting-async/lib/proxy-function-call.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"proxyFunctionCall","line":4,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":87}}}},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":6,"column":2}},"2":{"start":{"line":5,"column":2},"end":{"line":5,"column":93}},"3":{"start":{"line":8,"column":0},"end":{"line":8,"column":44}}},"branchMap":{}};
}
__cov_nbB4k60ZISqvJw7YCcGnYQ = __cov_nbB4k60ZISqvJw7YCcGnYQ['/Users/mark/awaiting-async/lib/proxy-function-call.js'];
__cov_nbB4k60ZISqvJw7YCcGnYQ.s['1']++;var proxyFunctionCall=function proxyFunctionCall(proxiedFunction,functionArguments){__cov_nbB4k60ZISqvJw7YCcGnYQ.f['1']++;__cov_nbB4k60ZISqvJw7YCcGnYQ.s['2']++;return proxiedFunction.apply(undefined,toConsumableArray(functionArguments));};__cov_nbB4k60ZISqvJw7YCcGnYQ.s['3']++;var proxyFunctionCall_1=proxyFunctionCall;

var __cov_NPEhaTibK_dQy33YYPJSaA = (Function('return this'))();
if (!__cov_NPEhaTibK_dQy33YYPJSaA.__coverage__) { __cov_NPEhaTibK_dQy33YYPJSaA.__coverage__ = {}; }
__cov_NPEhaTibK_dQy33YYPJSaA = __cov_NPEhaTibK_dQy33YYPJSaA.__coverage__;
if (!(__cov_NPEhaTibK_dQy33YYPJSaA['/Users/mark/awaiting-async/lib/runner.js'])) {
   __cov_NPEhaTibK_dQy33YYPJSaA['/Users/mark/awaiting-async/lib/runner.js'] = {"path":"/Users/mark/awaiting-async/lib/runner.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"runner","line":10,"loc":{"start":{"line":10,"column":13},"end":{"line":10,"column":60}}},"2":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":34}}},"3":{"name":"(anonymous_3)","line":22,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":28}}}},"statementMap":{"1":{"start":{"line":10,"column":0},"end":{"line":39,"column":2}},"2":{"start":{"line":11,"column":2},"end":{"line":14,"column":3}},"3":{"start":{"line":13,"column":4},"end":{"line":13,"column":94}},"4":{"start":{"line":16,"column":2},"end":{"line":38,"column":5}},"5":{"start":{"line":17,"column":4},"end":{"line":19,"column":29}},"6":{"start":{"line":21,"column":4},"end":{"line":21,"column":91}},"7":{"start":{"line":23,"column":4},"end":{"line":24,"column":22}},"8":{"start":{"line":26,"column":4},"end":{"line":35,"column":5}},"9":{"start":{"line":27,"column":6},"end":{"line":27,"column":50}},"10":{"start":{"line":28,"column":6},"end":{"line":28,"column":31}},"11":{"start":{"line":29,"column":6},"end":{"line":29,"column":29}},"12":{"start":{"line":34,"column":6},"end":{"line":34,"column":27}},"13":{"start":{"line":37,"column":4},"end":{"line":37,"column":91}},"14":{"start":{"line":41,"column":0},"end":{"line":41,"column":22}}},"branchMap":{"1":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"2":{"line":21,"type":"cond-expr","locations":[{"start":{"line":21,"column":18},"end":{"line":21,"column":32}},{"start":{"line":21,"column":35},"end":{"line":21,"column":90}}]},"3":{"line":37,"type":"cond-expr","locations":[{"start":{"line":37,"column":18},"end":{"line":37,"column":32}},{"start":{"line":37,"column":35},"end":{"line":37,"column":90}}]}}};
}
__cov_NPEhaTibK_dQy33YYPJSaA = __cov_NPEhaTibK_dQy33YYPJSaA['/Users/mark/awaiting-async/lib/runner.js'];
__cov_NPEhaTibK_dQy33YYPJSaA.s['1']++;var runner=function runner(thenable,resolve,reject,it){__cov_NPEhaTibK_dQy33YYPJSaA.f['1']++;__cov_NPEhaTibK_dQy33YYPJSaA.s['2']++;if(!isPromise_1(thenable)){__cov_NPEhaTibK_dQy33YYPJSaA.b['1'][0]++;__cov_NPEhaTibK_dQy33YYPJSaA.s['3']++;return reject('Only promises may be yielded, but "'+thenable+'" was yielded instead');}else{__cov_NPEhaTibK_dQy33YYPJSaA.b['1'][1]++;}__cov_NPEhaTibK_dQy33YYPJSaA.s['4']++;thenable.then(function(result){__cov_NPEhaTibK_dQy33YYPJSaA.f['2']++;__cov_NPEhaTibK_dQy33YYPJSaA.s['5']++;var _it$next=it.next(result),value=_it$next.value,done=_it$next.done;__cov_NPEhaTibK_dQy33YYPJSaA.s['6']++;return done?(__cov_NPEhaTibK_dQy33YYPJSaA.b['2'][0]++,resolve(value)):(__cov_NPEhaTibK_dQy33YYPJSaA.b['2'][1]++,proxyFunctionCall_1(runner,[value,resolve,reject,it]));}).catch(function(error){__cov_NPEhaTibK_dQy33YYPJSaA.f['3']++;__cov_NPEhaTibK_dQy33YYPJSaA.s['7']++;var value=void 0,done=void 0;__cov_NPEhaTibK_dQy33YYPJSaA.s['8']++;try{__cov_NPEhaTibK_dQy33YYPJSaA.s['9']++;var itResponse=it.throw(new Error(error));__cov_NPEhaTibK_dQy33YYPJSaA.s['10']++;value=itResponse.value;__cov_NPEhaTibK_dQy33YYPJSaA.s['11']++;done=itResponse.done;}catch(error){__cov_NPEhaTibK_dQy33YYPJSaA.s['12']++;return reject(error);}__cov_NPEhaTibK_dQy33YYPJSaA.s['13']++;return done?(__cov_NPEhaTibK_dQy33YYPJSaA.b['3'][0]++,resolve(value)):(__cov_NPEhaTibK_dQy33YYPJSaA.b['3'][1]++,proxyFunctionCall_1(runner,[value,resolve,reject,it]));});};__cov_NPEhaTibK_dQy33YYPJSaA.s['14']++;var runner_1=runner;

var __cov_4tQUCvkTFffI$lnrIemu5w = (Function('return this'))();
if (!__cov_4tQUCvkTFffI$lnrIemu5w.__coverage__) { __cov_4tQUCvkTFffI$lnrIemu5w.__coverage__ = {}; }
__cov_4tQUCvkTFffI$lnrIemu5w = __cov_4tQUCvkTFffI$lnrIemu5w.__coverage__;
if (!(__cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'])) {
   __cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'] = {"path":"/Users/mark/awaiting-async/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"main","line":4,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":36}}},"2":{"name":"(anonymous_2)","line":5,"loc":{"start":{"line":5,"column":21},"end":{"line":5,"column":48}}}},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":16,"column":2}},"2":{"start":{"line":5,"column":2},"end":{"line":15,"column":5}},"3":{"start":{"line":6,"column":4},"end":{"line":6,"column":25}},"4":{"start":{"line":8,"column":4},"end":{"line":10,"column":29}},"5":{"start":{"line":12,"column":4},"end":{"line":12,"column":36}},"6":{"start":{"line":12,"column":14},"end":{"line":12,"column":36}},"7":{"start":{"line":14,"column":4},"end":{"line":14,"column":46}},"8":{"start":{"line":18,"column":0},"end":{"line":18,"column":17}}},"branchMap":{"1":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":4},"end":{"line":12,"column":4}},{"start":{"line":12,"column":4},"end":{"line":12,"column":4}}]}}};
}
__cov_4tQUCvkTFffI$lnrIemu5w = __cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'];
__cov_4tQUCvkTFffI$lnrIemu5w.s['1']++;var main=function main(generator){__cov_4tQUCvkTFffI$lnrIemu5w.f['1']++;__cov_4tQUCvkTFffI$lnrIemu5w.s['2']++;return new Promise(function(resolve,reject){__cov_4tQUCvkTFffI$lnrIemu5w.f['2']++;__cov_4tQUCvkTFffI$lnrIemu5w.s['3']++;var it=generator();__cov_4tQUCvkTFffI$lnrIemu5w.s['4']++;var _it$next=it.next(),value=_it$next.value,done=_it$next.done;__cov_4tQUCvkTFffI$lnrIemu5w.s['5']++;if(done){__cov_4tQUCvkTFffI$lnrIemu5w.b['1'][0]++;__cov_4tQUCvkTFffI$lnrIemu5w.s['6']++;return resolve(value);}else{__cov_4tQUCvkTFffI$lnrIemu5w.b['1'][1]++;}__cov_4tQUCvkTFffI$lnrIemu5w.s['7']++;return runner_1(value,resolve,reject,it);});};__cov_4tQUCvkTFffI$lnrIemu5w.s['8']++;var index=main;

module.exports = index;
//# sourceMappingURL=awaiting-async.cjs.map
