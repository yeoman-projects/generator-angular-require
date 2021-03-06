'use strict';

var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');
var fs = require('fs');

var buildRelativePath = function(fileName){
  return path.join('decorators', fileName + "Decorator");
};

var DecoratorGenerator = ScriptBase.extend({
  constructor: function(name) {
    ScriptBase.apply(this, arguments);
    this.fileName = this.name;

    util.inherits(DecoratorGenerator, ScriptBase);
  },

  askForOverwrite: function() {
    var cb = this.async();

    if (fs.existsSync(path.join(
      this.env.cwd, this.env.options.appPath,
      'scripts', buildRelativePath(this.fileName) + ".js"
    ))) {
      var prompts = [{
        type: 'confirm',
        name: 'overwriteDecorator',
        message: 'Would you like to overwrite existing decorator?',
        default: false
      }];

      this.prompt(prompts, function (props) {
        this.overwriteDecorator = props.overwriteDecorator;

        cb();
      }.bind(this));
    }
    else{
      cb();
      return;
    }
  },

  askForNewName: function() {
    var cb = this.async();

    if (this.overwriteDecorator === undefined || this.overwriteDecorator === true) {
      cb();
      return;
    }
    else {
      var prompts = [];
      prompts.push({
        name: 'decoratorName',
        message: 'Alternative name for the decorator'
      });

      this.prompt(prompts, function (props) {
        this.fileName = props.decoratorName;

        cb();
      }.bind(this));
    }
  },

  createDecoratorFiles: function() {
    this.appTemplate(
      'decorator',
      path.join('scripts', buildRelativePath(this.fileName))
    );
    this.addScriptToIndex(buildRelativePath(this.fileName));
  },

  // Re-write the main app module to account for our new dependency
  injectDependenciesToApp: function () {
    var appPath = this.config.get('appPath');

    if (typeof appPath === "undefined") {
      appPath = this.env.options.appPath;
    }

    angularUtils.injectIntoFile(
      appPath,
      'decorators/' + this.name.toLowerCase() + "Decorator",
      this.classedName + 'Decorator',
      this.scriptAppName + '.decorators.' + this.classedName
    );
  }
});

module.exports = DecoratorGenerator;
