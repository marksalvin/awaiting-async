(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
   typeof define === 'function' && define.amd ? define(factory) :
   (factory());
}(this, (function () { 'use strict';

var __cov_4tQUCvkTFffI$lnrIemu5w = (Function('return this'))();
if (!__cov_4tQUCvkTFffI$lnrIemu5w.__coverage__) { __cov_4tQUCvkTFffI$lnrIemu5w.__coverage__ = {}; }
__cov_4tQUCvkTFffI$lnrIemu5w = __cov_4tQUCvkTFffI$lnrIemu5w.__coverage__;
if (!(__cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'])) {
   __cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'] = {"path":"/Users/mark/awaiting-async/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"main","line":3,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":36}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":48}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":33}},"2":{"start":{"line":3,"column":0},"end":{"line":15,"column":2}},"3":{"start":{"line":4,"column":2},"end":{"line":14,"column":5}},"4":{"start":{"line":5,"column":4},"end":{"line":5,"column":25}},"5":{"start":{"line":7,"column":4},"end":{"line":9,"column":29}},"6":{"start":{"line":11,"column":4},"end":{"line":11,"column":36}},"7":{"start":{"line":11,"column":14},"end":{"line":11,"column":36}},"8":{"start":{"line":13,"column":4},"end":{"line":13,"column":46}},"9":{"start":{"line":17,"column":0},"end":{"line":17,"column":22}}},"branchMap":{"1":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":4},"end":{"line":11,"column":4}},{"start":{"line":11,"column":4},"end":{"line":11,"column":4}}]}}};
}
__cov_4tQUCvkTFffI$lnrIemu5w = __cov_4tQUCvkTFffI$lnrIemu5w['/Users/mark/awaiting-async/lib/index.js'];
__cov_4tQUCvkTFffI$lnrIemu5w.s['1']++;var runner=require('./runner');__cov_4tQUCvkTFffI$lnrIemu5w.s['2']++;var main=function main(generator){__cov_4tQUCvkTFffI$lnrIemu5w.f['1']++;__cov_4tQUCvkTFffI$lnrIemu5w.s['3']++;return new Promise(function(resolve,reject){__cov_4tQUCvkTFffI$lnrIemu5w.f['2']++;__cov_4tQUCvkTFffI$lnrIemu5w.s['4']++;var it=generator();__cov_4tQUCvkTFffI$lnrIemu5w.s['5']++;var _it$next=it.next(),value=_it$next.value,done=_it$next.done;__cov_4tQUCvkTFffI$lnrIemu5w.s['6']++;if(done){__cov_4tQUCvkTFffI$lnrIemu5w.b['1'][0]++;__cov_4tQUCvkTFffI$lnrIemu5w.s['7']++;return resolve(value);}else{__cov_4tQUCvkTFffI$lnrIemu5w.b['1'][1]++;}__cov_4tQUCvkTFffI$lnrIemu5w.s['8']++;return runner(value,resolve,reject,it);});};__cov_4tQUCvkTFffI$lnrIemu5w.s['9']++;module.exports=main;

})));
//# sourceMappingURL=awaiting-async.js.map
