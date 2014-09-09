'use strict';

angular.module('account').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "app/modules/account/views/login.view.html"
    });

    $routeProvider.when("/register", {
        controller: "signupController",
        templateUrl: "app/modules/account/views/register.view.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
}]);