window.dw = window.dw || {};

(function(dw) {
  "use strict";

  dw.data.getUsers(function handleUsers(err, users) {
    console.log('We have users!', users);

    var userDetails = dw.data.getUser('rick', function handleUser(err, user) {
      console.log('user details', user);


      
    });

  });

}(window.dw));
