/*jshint unused: vars */
define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name <%= scriptAppName %>
   * @description
   * # <%= scriptAppName %>
   *
   * Main module of the application.
   */
  return angular
    .module('<%= scriptAppName %>', [/*angJSDeps*/<% for (var i = 0; i < angularModules.length; i++) { %>
      '<%= angularModules[i] %>'<% if (i < angularModules.length - 1) { %>,<% } -%><% } -%>

    ])<% if (ngRoute) { %>
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    })<% } %>;
});
