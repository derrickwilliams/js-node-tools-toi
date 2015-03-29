(function(_, $, global) {
  'use strict';

  global.ghHttp = function(options) {
    var defaults, baseUrl = 'https://api.github.com';

    if (!/^http/.test(options.url)) {
      options.url = (/^\//.test(options.url) ? '' : '/') + options.url;
      options.url = baseUrl + options.url;
    }

    defaults = {
      headers: {
        'Authorization': 'token b236bcfe56b08c90cb2269605f51bf958166ce30'
      },
      method: 'GET'
    };

    options = _.extend(defaults, options);

    return $.ajax(options)
      //.success(function(results) {
      //  var key, urls = [];
      //
      //  $('#json').html('<pre>' + JSON.stringify(results, null, 2) + '</pre>');
      //
      //  for(key in results) {
      //    if (results.hasOwnProperty(key) && /_url$/.test(key)) {
      //      urls.push({ key: key, url: results[key]});
      //    }
      //  }
      //
      //  // display list
      //  _.each(urls, function(url) {
      //    $('#urls').append($('<div />').append($('<a />').attr('href', url.url).text(url.key)));
      //  });
      //})
      .error(function() {
        console.error('httpError', arguments);
      });
  };

}(_, jQuery, window));
