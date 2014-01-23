define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.decorators')
    .config(function ($provide) {
      $provide.decorator('<%= cameledName %>', function ($delegate) {
          // decorate the $delegate
          return $delegate;
      });
    });
});
