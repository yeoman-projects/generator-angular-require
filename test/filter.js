'use strict';

var fs = require('fs');
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('angular-require:filter', function () {
  beforeEach(function (done) {
    helpers
      .run(require.resolve('../filter'))
      .withArguments('foo')
      .on('end', done);
  });

  it('generates a new filter', function () {
    assert.file('test/spec/filters/fooSpec.js');
    assert.fileContent(
      path.join('app/scripts/filters/foo.js'),
      /filter\('foo'/
    );
  });
});
