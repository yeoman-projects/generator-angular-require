require.config({
        paths: {
                angular: '../../bower_components/angular/angular'<% if (routeModule) { %>,
                angularRoute: '../../bower_components/angular-route/angular-route'<% } %><% if (cookiesModule) { %>,
                angularCookies: '../../bower_components/angular-cookies/angular-cookies'<% } %><% if (sanitizeModule) { %>,
                angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize'<% } %><% if (resourceModule) { %>,
                angularResource: '../../bower_components/angular-resource/angular-resource'<% } %>,
                angularMocks: '../../bower_components/angular-mocks/angular-mocks',
                text: '../../bower_components/requirejs-text/text'
        },
        shim: {
                'angular' : {'exports' : 'angular'}<% if (routeModule) { %>,
                'angularRoute': ['angular']<% } %><% if (cookiesModule) { %>,
                'angularCookies': ['angular']<% } %><% if (sanitizeModule) { %>,
                'angularSanitize': ['angular']<% } %><% if (resourceModule) { %>,
                'angularResource': ['angular']<% } %>,
                'angularMocks': {
                        deps:['angular'],
                        'exports':'angular.mock'
                }
        },
        priority: [
                "angular"
        ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
        'angular',
        'app'<% if (routeModule) { %>,
        'angularRoute'<% } %><% if (cookiesModule) { %>,
        'angularCookies'<% } %><% if (sanitizeModule) { %>,
        'angularSanitize'<% } %><% if (resourceModule) { %>,
        'angularResource'<% } %>
], function(angular, app<% if (routeModule) { %>, routes<% } %><% if (cookiesModule) { %>, cookies<% } %><% if (sanitizeModule) { %>, sanitize<% } %><% if (resourceModule) { %>, resource<% } %>) {
        'use strict';
        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {
                angular.resumeBootstrap([app['name']]);
        });
});