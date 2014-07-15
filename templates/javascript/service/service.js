define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Service in the <%= scriptAppName %>.
   */
  angular.module('<%= scriptAppName %>.services.<%= classedName %>', [])
	.service('<%= classedName %>', function <%= classedName %>() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	});
});
