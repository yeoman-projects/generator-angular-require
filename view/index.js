'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');

var ViewGenerator = ScriptBase.extend({
  constructor: function(name) {
    ScriptBase.apply(this, arguments);

    if (typeof this.env.options.appPath === 'undefined') {
      this.env.options.appPath = this.options.appPath;

      if (!this.env.options.appPath) {
        try {
          this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
        } catch (e) {}
      }
      this.env.options.appPath = this.env.options.appPath || 'app';
      this.options.appPath = this.env.options.appPath;
    }
  },

  createViewFiles: function() {
    this.template(
      '../common/app/views/view.html',
      path.join(
        this.env.options.appPath,
        'views',
        this.name.toLowerCase() + '.html'
      )
    );
  }
});

module.exports = ViewGenerator;
