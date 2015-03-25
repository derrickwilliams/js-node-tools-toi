(function() {
  'use strict';

  var app = require('express.io')();
  app.http().io();

  // app.use(express.static)

  // build your realtime-web app

  app.io.route('ready', function(req) {
    req.io.emit('readyAck', {
      msg: 'boogers'
    });
  });

  app.io.route('user:retrieve', function(req) {
    console.log('user request', Object.keys(req));

    req.io.emit('user:retrieved', { name: 'Hershel', age: 1000 });
  });

  // Send the client html.
  app.get('/', function(req, res) {
      res.sendfile(__dirname + '/index.html');
  });

  app.listen(7076);

}());
