var MyWidget = (function() {

  return {
    build: build
  };

  function build(elem) {
    var container = $('<div />'),
        label = $('<label>Search</label>')
        input = $('<input />'),
        submit = $('<button>Go!</button>');

    container.append(label, input, submit);
    elem.append(container);
  }

})();


describe('something', function() {
  it('works', function() {
    var div = $('<div />');

    MyWidget.build(div);

    debugger

  });
})
