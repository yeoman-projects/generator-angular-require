'use strict';

var assert = require('assert');

describe('Angular-Module generator load test', function () {
  it('can be imported without blowing up', function () {
    assert(require('../app') !== undefined);
    assert(require('../constant') !== undefined);
    assert(require('../controller') !== undefined);
    assert(require('../decorator') !== undefined);
    assert(require('../directive') !== undefined);
    assert(require('../factory') !== undefined);
    assert(require('../filter') !== undefined);
    assert(require('../provider') !== undefined);
    assert(require('../route') !== undefined);
    assert(require('../service') !== undefined);
    assert(require('../value') !== undefined);
    assert(require('../view') !== undefined);
  });
});
