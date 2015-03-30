var format = require('util').format,
    _ = require('lodash'),
    Person,
    EventEmitter = require('events').EventEmitter;

exports.Person = Person;

function Person(name) {
  var self;

  self = {
    name: function () {
      return format('Mr %s', name);
    }
  };

  self = _.mixin(self, EventEmitter.prototype);

  return self;
}




