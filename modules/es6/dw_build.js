System.registerModule("dw.js", [], function() {
  "use strict";
  var __moduleName = "dw.js";
  var $__default = function() {
    console.log('blah!');
  };
  return {get default() {
      return $__default;
    }};
});
System.get("dw.js" + '');
