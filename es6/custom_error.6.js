class CustomError {
  constructor(message, innerError) {
    this._message = message;
    this._inner = innerError;
  }

  get message() {
    return `From a getter: ${this._message}`;
  }

  fullMessage() {
    var message = [this.type, this.message];

    if (this._inner) {
      message.push(this._inner.message);
    }

    return message.join(' -> ');
  }
}

class InvalidJobError extends CustomError {
  get type() {
    return 'InvalidJob';
  }
}

var jobError = new InvalidJobError('This job is not valid!');

var jobError2 = new InvalidJobError('This job is not valid!', { message: 'Invalid Job ID: blah blah'});

console.log(jobError.message);
console.log(jobError.fullMessage());
