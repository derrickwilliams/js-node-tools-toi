window.dw = window.dw || {};

window.dw.data = (function dataObjects(dw) {
  "use strict";

  var users = [
    {
      name: 'Rick'
    },
    {
      name: 'Carol'
    },
    {
      name: 'Abraham'
    },
    {
      name: 'Glen'
    },
    {
      name: 'Maggie'
    },
  ];

  return {
    getUsers: function getUsers(params, cb) {
      console.log('getting all users');

      if (cb === undefined && typeof params === 'function') {
        cb = params;
      }

      setTimeout(function getUsersCb() {
        cb(null, users);
      }, 2000);
    },

    getUser: function getUser(name, cb) {
      var user = null, i;

      for (i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase() === name.toLowerCase()) {
            user = users[i];
            continue;
        }
      }

      setTimeout(function getUserCb() {
        cb(null, user);
      }, 1000);
    }
  };

}(window.dw));
