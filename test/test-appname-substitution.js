/*global describe, before, it, beforeEach */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Angular-RequireJS generator template mechanism', function () {
  var angular;
  var appName = 'upperCaseBug';

  beforeEach(function (done) {
    var deps = [
      '../../../app',
      '../../../controller',
      [
        helpers.createDummyGenerator(),
        'karma-require:app'
      ]
    ];
    // Ugly hack to effectively "force" the test working directory to be cleared down
    helpers.testDirectory(path.join(__dirname, './tmp'), function() {});
    
    helpers.testDirectory(path.join(__dirname, './tmp', appName), function (err) {
      if (err) {
        done(err);
      }

      angular = helpers.createGenerator('angular-require:app', deps, [appName], {
        'appPath': 'app',
        'skip-welcome-message': true,
        'skip-install': true,
        'skip-message': true
      });

      helpers.mockPrompt(angular, {
        compass: true,
        bootstrap: true,
        compassBootstrap: true,
        modules: []
      });

      done();
    });
  });

  it('should generate the same appName in every file', function (done) {
    angular.run({}, function () {
      helpers.assertFile([
        'app/scripts/app.js',
        'app/scripts/controllers/main.js',
        'app/index.html',
        'test/spec/controllers/mainSpec.js'
      ]);

      helpers.assertFileContent(
        'app/scripts/app.js',
        new RegExp('module\\(\'' + appName + 'App\'')
      );
      helpers.assertFileContent(
        'app/scripts/controllers/main.js',
        new RegExp('module\\(\'' + appName + 'App.controllers.MainCtrl\'')
      );
      helpers.assertFileContent(
        'test/spec/controllers/mainSpec.js',
        new RegExp('module\\(\'' + appName + 'App.controllers.MainCtrl\'')
      );

      helpers.assertFileContent(
        'app/index.html',
        new RegExp('ng-app=\"' + appName + 'App\"')
      );

      done();
    });
  });
});
