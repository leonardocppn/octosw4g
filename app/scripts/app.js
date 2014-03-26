define([
	'angular',
	'filters/filters',
	'services/services',
	'directives/directives',
	'controllers/controllers',
	'angularRoute',
	'breeze',
	'breezeAngular',
	'breezeDirectives'
], function (angular) {
    'use strict'

    var app = angular.module('octoApp', ['ngRoute', 'octoApp.controllers', 'octoApp.filters', 'octoApp.services', 'octoApp.directives', 'breeze.angular']);

    app.run(['breeze', function (breeze) {

    }]);

    return app;
});