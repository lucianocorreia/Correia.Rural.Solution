'use strict';

angular.module('account').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "app/modules/account/views/login.view.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
}]);