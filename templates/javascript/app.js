/* global controllers:false */
define(['angular', 'controllers/main'], function (angular, controllers) {
  'use strict';

  return angular.module('<%= scriptAppName %>', ['<%= scriptAppName %>.controllers',<%= angularModules %>])<% if (ngRoute) { %>
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    })<% } %>;
});
