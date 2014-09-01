'use strict';

angular.module('core').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "app/modules/core/views/home.view.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
}]);