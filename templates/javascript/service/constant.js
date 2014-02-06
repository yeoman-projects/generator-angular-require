define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.services.<%= classedName %>', [])
	.constant('<%= cameledName %>', 42);
});
