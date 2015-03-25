(function() {
  'use strict';

  var
    expressIO = require('express.io'),
    app = expressIO(),
    connectedUsers = [];

  app.http().io();

  app.io.route('user:connected', addConnectedUser);

  // app.io.route('user:disconnected', removeConnectedUser);

  // Send the client html.
  app.get('/', function(req, res) {
      res.sendfile(__dirname + '/connection_counter.html');
  });

  app.listen(7076);

  function addConnectedUser(req) {
    var connectionId = new Date().getTime() + '#' + req.socket.id

    req.io.emit('connection:acknowledged', {
      id: getId(req.socket.id)
    });

    connectedUsers.push({
      id: connectionId
    });

    notifyCountUpdated();
  }

  function getId(socketId) {
    return new Date().getTime() + '#' + socketId;
  }

  // function removeConnectedUser(req) {
  //   console.log('removing connected user', arguments);
  //   req.io.emit('connection:acknowledged', { id: new Date().getTime(),  });
  // }

  function notifyCountUpdated() {
    app.io.broadcast('connection:count:updated', { count: connectedUsers.length });
  }

}());
