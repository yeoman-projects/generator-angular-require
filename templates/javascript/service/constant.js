define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.constants')
	.constant('<%= cameledName %>', 42);
});
