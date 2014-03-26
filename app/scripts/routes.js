define(['angular', 'app'], function (angular, app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Simple', {
            templateUrl: 'base.html',
            controller: 'octoDetailCtrl'
        });
        $routeProvider.when('/octoId', {
            templateUrl: 'base.html',
            controller: 'octoDetailCtrl'
        });
        $routeProvider.otherwise({ redirectTo: '/Simple' });
    }]);

});