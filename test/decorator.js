'use strict';

var fs = require('fs');
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('angular-require:decorator', function () {
  beforeEach(function (done) {
    helpers
      .run(require.resolve('../decorator'))
      .withArguments('foo')
      .on('end', done);
  });

  it('generates a new decorator', function () {
    assert.file('test/spec/decorator/fooSpec.js');
    assert.fileContent(
      path.join('app/scripts/decorator/foo.js'),
      /directive\('foo'/
    );
  });
});
