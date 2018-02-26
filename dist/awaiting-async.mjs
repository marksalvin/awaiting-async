function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var __cov_i_FaK3mXHHGkA0o_3d$KGQ = (Function('return this'))();
if (!__cov_i_FaK3mXHHGkA0o_3d$KGQ.__coverage__) { __cov_i_FaK3mXHHGkA0o_3d$KGQ.__coverage__ = {}; }
__cov_i_FaK3mXHHGkA0o_3d$KGQ = __cov_i_FaK3mXHHGkA0o_3d$KGQ.__coverage__;
if (!(__cov_i_FaK3mXHHGkA0o_3d$KGQ['/Users/mark.salvin/Documents/git/awaiting-async/lib/is-promise.js'])) {
   __cov_i_FaK3mXHHGkA0o_3d$KGQ['/Users/mark.salvin/Documents/git/awaiting-async/lib/is-promise.js'] = {"path":"/Users/mark.salvin/Documents/git/awaiting-async/lib/is-promise.js","s":{"1":0,"2":0,"3":0},"b":{"1":[0,0,0,0],"2":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"isPromise","line":1,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":40}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":2}},"2":{"start":{"line":2,"column":2},"end":{"line":2,"column":166}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":28}}},"branchMap":{"1":{"line":2,"type":"binary-expr","locations":[{"start":{"line":2,"column":9},"end":{"line":2,"column":14}},{"start":{"line":2,"column":19},"end":{"line":2,"column":101}},{"start":{"line":2,"column":105},"end":{"line":2,"column":130}},{"start":{"line":2,"column":135},"end":{"line":2,"column":165}}]},"2":{"line":2,"type":"cond-expr","locations":[{"start":{"line":2,"column":49},"end":{"line":2,"column":60}},{"start":{"line":2,"column":63},"end":{"line":2,"column":87}}]}}};
}
__cov_i_FaK3mXHHGkA0o_3d$KGQ = __cov_i_FaK3mXHHGkA0o_3d$KGQ['/Users/mark.salvin/Documents/git/awaiting-async/lib/is-promise.js'];
__cov_i_FaK3mXHHGkA0o_3d$KGQ.s['1']++;var isPromise=function isPromise(obj){__cov_i_FaK3mXHHGkA0o_3d$KGQ.f['1']++;__cov_i_FaK3mXHHGkA0o_3d$KGQ.s['2']++;return(__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['1'][0]++,!!obj)&&((__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['1'][1]++,(typeof obj==='undefined'?(__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['2'][0]++,'undefined'):(__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['2'][1]++,_typeof(obj)))==='object')||(__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['1'][2]++,typeof obj==='function'))&&(__cov_i_FaK3mXHHGkA0o_3d$KGQ.b['1'][3]++,typeof obj.then==='function');};__cov_i_FaK3mXHHGkA0o_3d$KGQ.s['3']++;var isPromise_1=isPromise;

var __cov_Wut49uIqB1yAyMWjbDN8YA = (Function('return this'))();
if (!__cov_Wut49uIqB1yAyMWjbDN8YA.__coverage__) { __cov_Wut49uIqB1yAyMWjbDN8YA.__coverage__ = {}; }
__cov_Wut49uIqB1yAyMWjbDN8YA = __cov_Wut49uIqB1yAyMWjbDN8YA.__coverage__;
if (!(__cov_Wut49uIqB1yAyMWjbDN8YA['/Users/mark.salvin/Documents/git/awaiting-async/lib/proxy-function-call.js'])) {
   __cov_Wut49uIqB1yAyMWjbDN8YA['/Users/mark.salvin/Documents/git/awaiting-async/lib/proxy-function-call.js'] = {"path":"/Users/mark.salvin/Documents/git/awaiting-async/lib/proxy-function-call.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"proxyFunctionCall","line":4,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":87}}}},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":6,"column":2}},"2":{"start":{"line":5,"column":2},"end":{"line":5,"column":93}},"3":{"start":{"line":8,"column":0},"end":{"line":8,"column":44}}},"branchMap":{}};
}
__cov_Wut49uIqB1yAyMWjbDN8YA = __cov_Wut49uIqB1yAyMWjbDN8YA['/Users/mark.salvin/Documents/git/awaiting-async/lib/proxy-function-call.js'];
__cov_Wut49uIqB1yAyMWjbDN8YA.s['1']++;var proxyFunctionCall=function proxyFunctionCall(proxiedFunction,functionArguments){__cov_Wut49uIqB1yAyMWjbDN8YA.f['1']++;__cov_Wut49uIqB1yAyMWjbDN8YA.s['2']++;return proxiedFunction.apply(undefined,toConsumableArray(functionArguments));};__cov_Wut49uIqB1yAyMWjbDN8YA.s['3']++;var proxyFunctionCall_1=proxyFunctionCall;

var __cov_9oU2gvSsv7JvR9EeifRfzw = (Function('return this'))();
if (!__cov_9oU2gvSsv7JvR9EeifRfzw.__coverage__) { __cov_9oU2gvSsv7JvR9EeifRfzw.__coverage__ = {}; }
__cov_9oU2gvSsv7JvR9EeifRfzw = __cov_9oU2gvSsv7JvR9EeifRfzw.__coverage__;
if (!(__cov_9oU2gvSsv7JvR9EeifRfzw['/Users/mark.salvin/Documents/git/awaiting-async/lib/runner.js'])) {
   __cov_9oU2gvSsv7JvR9EeifRfzw['/Users/mark.salvin/Documents/git/awaiting-async/lib/runner.js'] = {"path":"/Users/mark.salvin/Documents/git/awaiting-async/lib/runner.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":7,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":70}}},"2":{"name":"handleFulfilledPromise","line":8,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":73}}},"3":{"name":"(anonymous_3)","line":11,"loc":{"start":{"line":11,"column":11},"end":{"line":11,"column":29}}},"4":{"name":"handleRejectedPromise","line":20,"loc":{"start":{"line":20,"column":30},"end":{"line":20,"column":72}}},"5":{"name":"(anonymous_5)","line":23,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":28}}},"6":{"name":"runner","line":44,"loc":{"start":{"line":44,"column":15},"end":{"line":44,"column":42}}}},"statementMap":{"1":{"start":{"line":7,"column":0},"end":{"line":58,"column":3}},"2":{"start":{"line":8,"column":2},"end":{"line":18,"column":4}},"3":{"start":{"line":9,"column":4},"end":{"line":10,"column":29}},"4":{"start":{"line":11,"column":4},"end":{"line":17,"column":6}},"5":{"start":{"line":12,"column":6},"end":{"line":14,"column":31}},"6":{"start":{"line":16,"column":6},"end":{"line":16,"column":124}},"7":{"start":{"line":20,"column":2},"end":{"line":38,"column":4}},"8":{"start":{"line":21,"column":4},"end":{"line":22,"column":30}},"9":{"start":{"line":23,"column":4},"end":{"line":37,"column":6}},"10":{"start":{"line":24,"column":6},"end":{"line":25,"column":24}},"11":{"start":{"line":27,"column":6},"end":{"line":34,"column":7}},"12":{"start":{"line":28,"column":8},"end":{"line":28,"column":52}},"13":{"start":{"line":29,"column":8},"end":{"line":29,"column":33}},"14":{"start":{"line":30,"column":8},"end":{"line":30,"column":31}},"15":{"start":{"line":33,"column":8},"end":{"line":33,"column":29}},"16":{"start":{"line":36,"column":6},"end":{"line":36,"column":124}},"17":{"start":{"line":44,"column":2},"end":{"line":55,"column":4}},"18":{"start":{"line":45,"column":4},"end":{"line":47,"column":30}},"19":{"start":{"line":49,"column":4},"end":{"line":52,"column":5}},"20":{"start":{"line":51,"column":6},"end":{"line":51,"column":96}},"21":{"start":{"line":54,"column":4},"end":{"line":54,"column":155}},"22":{"start":{"line":57,"column":2},"end":{"line":57,"column":26}}},"branchMap":{"1":{"line":16,"type":"cond-expr","locations":[{"start":{"line":16,"column":20},"end":{"line":16,"column":34}},{"start":{"line":16,"column":37},"end":{"line":16,"column":123}}]},"2":{"line":36,"type":"cond-expr","locations":[{"start":{"line":36,"column":20},"end":{"line":36,"column":34}},{"start":{"line":36,"column":37},"end":{"line":36,"column":123}}]},"3":{"line":49,"type":"if","locations":[{"start":{"line":49,"column":4},"end":{"line":49,"column":4}},{"start":{"line":49,"column":4},"end":{"line":49,"column":4}}]}}};
}
__cov_9oU2gvSsv7JvR9EeifRfzw = __cov_9oU2gvSsv7JvR9EeifRfzw['/Users/mark.salvin/Documents/git/awaiting-async/lib/runner.js'];
__cov_9oU2gvSsv7JvR9EeifRfzw.s['1']++;var runner_1=createCommonjsModule(function(module){__cov_9oU2gvSsv7JvR9EeifRfzw.f['1']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['2']++;var handleFulfilledPromise=function handleFulfilledPromise(_ref,it){__cov_9oU2gvSsv7JvR9EeifRfzw.f['2']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['3']++;var resolve=_ref.resolve,reject=_ref.reject;__cov_9oU2gvSsv7JvR9EeifRfzw.s['4']++;return function(result){__cov_9oU2gvSsv7JvR9EeifRfzw.f['3']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['5']++;var _it$next=it.next(result),value=_it$next.value,done=_it$next.done;__cov_9oU2gvSsv7JvR9EeifRfzw.s['6']++;return done?(__cov_9oU2gvSsv7JvR9EeifRfzw.b['1'][0]++,resolve(value)):(__cov_9oU2gvSsv7JvR9EeifRfzw.b['1'][1]++,proxyFunctionCall_1(runner,[{thenable:value,resolve:resolve,reject:reject},it]));};};__cov_9oU2gvSsv7JvR9EeifRfzw.s['7']++;var handleRejectedPromise=function handleRejectedPromise(_ref2,it){__cov_9oU2gvSsv7JvR9EeifRfzw.f['4']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['8']++;var resolve=_ref2.resolve,reject=_ref2.reject;__cov_9oU2gvSsv7JvR9EeifRfzw.s['9']++;return function(error){__cov_9oU2gvSsv7JvR9EeifRfzw.f['5']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['10']++;var value=void 0,done=void 0;__cov_9oU2gvSsv7JvR9EeifRfzw.s['11']++;try{__cov_9oU2gvSsv7JvR9EeifRfzw.s['12']++;var itResponse=it.throw(new Error(error));__cov_9oU2gvSsv7JvR9EeifRfzw.s['13']++;value=itResponse.value;__cov_9oU2gvSsv7JvR9EeifRfzw.s['14']++;done=itResponse.done;}catch(error){__cov_9oU2gvSsv7JvR9EeifRfzw.s['15']++;return reject(error);}__cov_9oU2gvSsv7JvR9EeifRfzw.s['16']++;return done?(__cov_9oU2gvSsv7JvR9EeifRfzw.b['2'][0]++,resolve(value)):(__cov_9oU2gvSsv7JvR9EeifRfzw.b['2'][1]++,proxyFunctionCall_1(runner,[{thenable:value,resolve:resolve,reject:reject},it]));};};__cov_9oU2gvSsv7JvR9EeifRfzw.s['17']++;var runner=function runner(_ref3,it){__cov_9oU2gvSsv7JvR9EeifRfzw.f['6']++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['18']++;var thenable=_ref3.thenable,resolve=_ref3.resolve,reject=_ref3.reject;__cov_9oU2gvSsv7JvR9EeifRfzw.s['19']++;if(!isPromise_1(thenable)){__cov_9oU2gvSsv7JvR9EeifRfzw.b['3'][0]++;__cov_9oU2gvSsv7JvR9EeifRfzw.s['20']++;return reject('Only promises may be yielded, but "'+thenable+'" was yielded instead');}else{__cov_9oU2gvSsv7JvR9EeifRfzw.b['3'][1]++;}__cov_9oU2gvSsv7JvR9EeifRfzw.s['21']++;thenable.then(handleFulfilledPromise({resolve:resolve,reject:reject},it)).catch(handleRejectedPromise({resolve:resolve,reject:reject},it));};__cov_9oU2gvSsv7JvR9EeifRfzw.s['22']++;module.exports=runner;});

var __cov_$YQ_0wATKGapiesPYiN97Q = (Function('return this'))();
if (!__cov_$YQ_0wATKGapiesPYiN97Q.__coverage__) { __cov_$YQ_0wATKGapiesPYiN97Q.__coverage__ = {}; }
__cov_$YQ_0wATKGapiesPYiN97Q = __cov_$YQ_0wATKGapiesPYiN97Q.__coverage__;
if (!(__cov_$YQ_0wATKGapiesPYiN97Q['/Users/mark.salvin/Documents/git/awaiting-async/lib/index.js'])) {
   __cov_$YQ_0wATKGapiesPYiN97Q['/Users/mark.salvin/Documents/git/awaiting-async/lib/index.js'] = {"path":"/Users/mark.salvin/Documents/git/awaiting-async/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":65}}},"2":{"name":"main","line":6,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":38}}},"3":{"name":"(anonymous_3)","line":7,"loc":{"start":{"line":7,"column":23},"end":{"line":7,"column":50}}}},"statementMap":{"1":{"start":{"line":5,"column":0},"end":{"line":21,"column":3}},"2":{"start":{"line":6,"column":2},"end":{"line":18,"column":4}},"3":{"start":{"line":7,"column":4},"end":{"line":17,"column":7}},"4":{"start":{"line":8,"column":6},"end":{"line":8,"column":27}},"5":{"start":{"line":10,"column":6},"end":{"line":12,"column":31}},"6":{"start":{"line":14,"column":6},"end":{"line":14,"column":38}},"7":{"start":{"line":14,"column":16},"end":{"line":14,"column":38}},"8":{"start":{"line":16,"column":6},"end":{"line":16,"column":79}},"9":{"start":{"line":20,"column":2},"end":{"line":20,"column":24}}},"branchMap":{"1":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":6},"end":{"line":14,"column":6}},{"start":{"line":14,"column":6},"end":{"line":14,"column":6}}]}}};
}
__cov_$YQ_0wATKGapiesPYiN97Q = __cov_$YQ_0wATKGapiesPYiN97Q['/Users/mark.salvin/Documents/git/awaiting-async/lib/index.js'];
__cov_$YQ_0wATKGapiesPYiN97Q.s['1']++;var lib=createCommonjsModule(function(module){__cov_$YQ_0wATKGapiesPYiN97Q.f['1']++;__cov_$YQ_0wATKGapiesPYiN97Q.s['2']++;var main=function main(generator){__cov_$YQ_0wATKGapiesPYiN97Q.f['2']++;__cov_$YQ_0wATKGapiesPYiN97Q.s['3']++;return new Promise(function(resolve,reject){__cov_$YQ_0wATKGapiesPYiN97Q.f['3']++;__cov_$YQ_0wATKGapiesPYiN97Q.s['4']++;var it=generator();__cov_$YQ_0wATKGapiesPYiN97Q.s['5']++;var _it$next=it.next(),value=_it$next.value,done=_it$next.done;__cov_$YQ_0wATKGapiesPYiN97Q.s['6']++;if(done){__cov_$YQ_0wATKGapiesPYiN97Q.b['1'][0]++;__cov_$YQ_0wATKGapiesPYiN97Q.s['7']++;return resolve(value);}else{__cov_$YQ_0wATKGapiesPYiN97Q.b['1'][1]++;}__cov_$YQ_0wATKGapiesPYiN97Q.s['8']++;return runner_1({thenable:value,resolve:resolve,reject:reject},it);});};__cov_$YQ_0wATKGapiesPYiN97Q.s['9']++;module.exports=main;});

export default lib;
//# sourceMappingURL=awaiting-async.mjs.map
