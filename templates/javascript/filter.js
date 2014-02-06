define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.filters.<%= classedName %>', [])
  	.filter('<%= cameledName %>', function () {
      return function (input) {
      	return '<%= cameledName %> filter: ' + input;
      };
  	});
});
