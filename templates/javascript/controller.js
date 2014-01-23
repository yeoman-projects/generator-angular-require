define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.controllers', [])
    .controller('<%= classedName %>Ctrl', function ($scope) {
      $scope.awesomeThings = [
      	'HTML5 Boilerplate',
      	'AngularJS',
      	'Karma'
      ];
  	});
});
