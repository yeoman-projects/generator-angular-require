var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
        angular: '../bower_components/angular/angular'<% if (routeModule) { %>,
        angularRoute: '../bower_components/angular-route/angular-route'<% } %><% if (cookiesModule) { %>,
        angularCookies: '../bower_components/angular-cookies/angular-cookies'<% } %><% if (sanitizeModule) { %>,
        angularSanitize: '../bower_components/angular-sanitize/angular-sanitize'<% } %><% if (resourceModule) { %>,
        angularResource: '../bower_components/angular-resource/angular-resource'<% } %>,
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
    },

    shim: {
        'angular' : {'exports' : 'angular'}<% if (routeModule) { %>,
        'angularRoute': ['angular']<% } %><% if (cookiesModule) { %>,
        'angularCookies': ['angular']<% } %><% if (sanitizeModule) { %>,
        'angularSanitize': ['angular']<% } %><% if (resourceModule) { %>,
        'angularResource': ['angular']<% } %>,
        'angularMocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
