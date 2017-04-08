/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/spectre.css/spectre.min.css');
  app.import('vendor/spectre.css/spectre-exp.min.css');
  app.import('vendor/spectre.css/spectre-icons.min.css');

  return app.toTree();
};
