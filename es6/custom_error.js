"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var CustomError = (function () {
  function CustomError(message, innerError) {
    _classCallCheck(this, CustomError);

    this._message = message;
    this._inner = innerError;
  }

  _createClass(CustomError, {
    message: {
      get: function () {
        return "From a getter: " + this._message;
      }
    },
    fullMessage: {
      value: function fullMessage() {
        var message = [this.type, this.message];

        if (this._inner) {
          message.push(this._inner.message);
        }

        return message.join(" -> ");
      }
    }
  });

  return CustomError;
})();

var InvalidJobError = (function (_CustomError) {
  function InvalidJobError() {
    _classCallCheck(this, InvalidJobError);

    if (_CustomError != null) {
      _CustomError.apply(this, arguments);
    }
  }

  _inherits(InvalidJobError, _CustomError);

  _createClass(InvalidJobError, {
    type: {
      get: function () {
        return "InvalidJob";
      }
    }
  });

  return InvalidJobError;
})(CustomError);

var jobError = new InvalidJobError("This job is not valid!");

var jobError2 = new InvalidJobError("This job is not valid!", { message: "Invalid Job ID: blah blah" });

console.log(jobError.message);
console.log(jobError.fullMessage());

