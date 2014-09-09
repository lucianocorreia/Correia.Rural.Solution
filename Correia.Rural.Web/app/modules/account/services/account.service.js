'use strict';

(function () {

    angular.module('account').factory('accountService', authenticationService);

    authenticationService.$inject = ['$http', '$q', 'localStorageService'];

    function authenticationService($http, $q, localStorageService) {

        var _apiBase = ApplicationConfiguration.serviceBaseUrl;
        var _factoryObj = {};

        var _authentication = {
            isAuthenticated: false,
            userName: ""
        };

        /**
         * Salvar dados do usuário
         */
        var _register = function (accountData) {
            _logout();
            return $http.post(_apiBase + 'api/account/register', accountData).then(function (response) {
                return response;
            });
        };

        /**
         * Verificar login
         */
        var _login = function (loginData) {
            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http.post(_apiBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (response) {
                    localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

                    _authentication.isAuthenticated = true;
                    _authentication.userName = loginData.userName;

                    deferred.resolve(response);
                })
                .error(function (err, status) {
                    _logout();
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        var _logout = function () {
            localStorageService.remove('authorizationData');

            _authentication.isAuthenticated = false;
            _authentication.userName = "";
        };

        var _fillAuthenticationData = function () {
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                _authentication.isAuthenticated = true;
                _authentication.userName = authData.userName;
            }
        };

        /**
         * Factory object
         */
        _factoryObj.register = _register;
        _factoryObj.login = _login;
        _factoryObj.logout = _logout;
        _factoryObj.fillAuthenticationData = _fillAuthenticationData;
        _factoryObj.authentication = _authentication;

        return _factoryObj;
    };

})();