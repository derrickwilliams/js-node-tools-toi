(function(_, $, global) {
  'use strict';

  global.ghHttp = function(options) {
    var defaults;

    defaults = {
      headers: {
        'Authorization': 'token b236bcfe56b08c90cb2269605f51bf958166ce30'
      },
      method: 'GET'
    };

    options = _.extend(defaults, options);

    console.log('ajax options', options);

    return $.ajax(options)
      .success(function() {
        console.log('httpSuccess', arguments);
      })
      .error(function() {
        console.error('httpError', arguments);
      });
  };

}(_, jQuery, window));
