// ----------------------------------------------------------------------------
// RequireJS config and loading of all the Specs
// ----------------------------------------------------------------------------

require.config({
  baseUrl: '../',
  paths: {
    'mocha'         : 'node_modules/mocha/mocha',
    'chai'          : 'node_modules/chai/chai'
  }
});

define(function (require) {
  'use strict';

  require('mocha');
  require('chai');

  mocha.ui('bdd');
  mocha.reporter('html');

  require([
    'test/example/is-int-spec'
  ], function (require) {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  });
});
