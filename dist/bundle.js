(() => {
  "use strict";
  var t = {
    360: t => {
      t.exports = {
        test() {
          console.log("test here!")
        }
      }
    }
  }, e = {};
  (function r(s) {
    if (e[s]) return e[s].exports;
    var o = e[s] = {exports: {}};
    return t[s](o, o.exports, r), o.exports
  })(360).test()
})();
//# sourceMappingURL=bundle.js.map
