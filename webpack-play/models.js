var format = require('util').format;

exports.Person = function Person(name) {
  return {
    name: function() {
      return format('Mr %s', name);
    }
  };
};
