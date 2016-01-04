'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = require('yeoman-test');
var assert  = require('yeoman-assert');
var fs      = require('fs');
var test    = require('./helper.js');

function generateFullProject(cb) {
  helpers.run(require.resolve('../app'))
    .withGenerators([
      require.resolve('../controller'),
      require.resolve('../route'),
      require.resolve('../view'),
      [ helpers.createDummyGenerator(), 'karma-require:app']
    ])
    .withOptions({
      'appPath': 'app',
      'skip-install': true,
      'skip-welcome-message': true,
      'skip-message': true
    })
    .withPrompts({
      compass: true,
      bootstrap: true,
      compassBootstrap: true,
      modules: ['routeModule']
    })
    .on('end', cb);
}

describe('angular-require:route', function () {
  beforeEach(function (done) {
    generateFullProject(function () {
      this.angularRequireRoute = helpers.run(require.resolve('../route'))
        .withGenerators([
          require.resolve('../controller'),
          require.resolve('../view')
        ])
        .withOptions({
          appPath: 'app'
        })
        .withArguments(['simpleroute']);

        // Hack to not clear the directory
        this.angularRequireRoute.inDirSet = true;

        done();
     }.bind(this));
  });

  it('generates default route items', function (done) {
    this.angularRequireRoute.on('end', function () {
      assert.file([
        'app/scripts/controllers/simpleroute.js',
        'test/spec/controllers/simpleroute.js',
        'app/views/simpleroute.html'
      ]);
      assert.fileContent(
        'app/scripts/app.js',
        /when\('\/simpleroute'/
      );
      done();
    });
  });

  it('generates route items with the route uri given', function (done) {
    this.angularRequireRoute
      .withOptions({
        uri: 'segment1/segment2/:parameter'
      })
      .on('end', function () {
        assert.file([
          'app/scripts/controllers/simpleroute.js',
          'test/spec/controllers/simpleroute.js',
          'app/views/simpleroute.html'
        ]);
        assert.fileContent(
          'app/scripts/app.js',
          /when\('\/segment1\/segment2\/\:parameter'/
        );
        done();
      });
  });
});
