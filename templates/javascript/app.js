define(['angular', 'controllers/main'], function (angular, controllers) {
  'use strict';

  return angular.module('<%= scriptAppName %>', [<%= angularModules %>,'<%= scriptAppName %>.controllers'])<% if (ngRoute) { %>
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
