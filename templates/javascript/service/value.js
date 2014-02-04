define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.values', [])
	.value('<%= cameledName %>', 42);
});
