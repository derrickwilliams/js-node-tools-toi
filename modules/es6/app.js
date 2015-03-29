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
System.registerModule("index.js", [], function() {
  "use strict";
  var __moduleName = "index.js";
  'use strict';
  var dw = System.get("dw.js");
  dw();
  return {};
});
System.get("index.js" + '');
