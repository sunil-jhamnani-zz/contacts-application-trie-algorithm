/**
 * Created by sunil.jhamnani on 5/28/16.
 */

(function () {
    'use strict';
    var app = angular.module('contactApp', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/add', {
            templateUrl: "templates/add.html",
            controller: "AddController"
        }).when('/search', {
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
        }).otherwise({
            redirectTo: '/add'
        });
    }]);

}());
