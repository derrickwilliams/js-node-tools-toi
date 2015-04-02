describe('widget', function() {

  it('exists', function() {
    expect(SearchWidget).toBeDefined();
    expect(typeof SearchWidget).toBe('function');
  });

  it('requires container element to initialize', function() {
    expect(function() {
      SearchWidget();
    }).toThrow();
  });

  it('adds label, text input and submit button to container', function() {
    var container = $('<div />'),
        w = SearchWidget(container);

    w.render();

    expect(container.find('label').length).toBe(1);
    expect(container.find('input').length).toBe(1);
    expect(container.find('button').length).toBe(1);
  });

  it('should emit search:submitted event when button clicked', function(done) {
    var container = $('<div />'),
        w = SearchWidget(container);

    w.render();

    container.find('input').val('somethingcrazyvalue');

    debugger

    w.on('search:submitted', function(payload) {
      expect(payload.term).toBe('somethingcrazyvalue');
      done();
    });

    container.find('button').click();
  });

});
