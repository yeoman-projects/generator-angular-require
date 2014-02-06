define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.services.<%= classedName %>', [])
	.value('<%= cameledName %>', 42);
});
