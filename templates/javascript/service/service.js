define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.services.<%= classedName %>', [])
	.service('<%= classedName %>', function <%= classedName %>() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	});
});
