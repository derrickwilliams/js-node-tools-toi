define(['assert', 'jquery', 'lodash'], function main(assert, $, _) {
  'use strict';

  buildMainContentSection();
  initContent($('.main'));

  function buildMainContentSection(){
    $('.main').html(buildTemplate('#mainWellTmpl', { msg: 'Hello There' }));
  }

  function buildTemplate(tmplSelector, data) {
    var html, tmpl;

    html = $(tmplSelector).html();
    tmpl = _.template(html);
    return tmpl(data);
  }

  function initContent(content) {
    content.find('a').on('click', function(ev) {
      console.log('click', ev);
    });
  }

});
