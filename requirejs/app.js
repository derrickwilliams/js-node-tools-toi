(function() {

  requirejs.config({
    baseUrl: './demo_app',
    paths: {
      jquery: '../bower_components/jquery/dist/jquery.min',
      lodash: '../bower_components/lodash/lodash.min',
      assert: '../bower_components/assert/assert'
    }
  });


  requirejs(['main']);

})();
