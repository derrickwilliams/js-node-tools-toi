var SearchWidget = (function() {
  'use strict';

  var tmpl =  '<div class="search-widget">' +
                '<label for="searchTerm">Search</label><br />' +
                '<input name="searchTerm" class="search-term" /><br />' +
                '<button>Go!</button>' +
              '</div>';

  return Widget;

  function Widget(el) {
    if (el === undefined) err('Container element is required');

    var self = {};

    self.render = render;
    self.emit = paperboy.mixin(self);

    return self;

    function render() {
      el.html(tmpl);
      el.find('button').on('click', handleButtonClick);
    }

    function handleButtonClick(e) {
      e.preventDefault();
      self.emit('search:submitted', {
        term: el.find('input').val()
      });
    }
  }

})();
