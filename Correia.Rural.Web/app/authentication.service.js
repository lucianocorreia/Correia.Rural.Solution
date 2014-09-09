'use strict';

(function () {

    angular.module(ApplicationConfiguration.applicationModuleName).factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$q', 'localStorageService'];

    function authenticationService($q, localStorageService) {
        var factoryObj = {};

        var _request = function (config) {
            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        };

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        factoryObj.request = _request;
        factoryObj.responseError = _responseError;

        return factoryObj;
    };

})();