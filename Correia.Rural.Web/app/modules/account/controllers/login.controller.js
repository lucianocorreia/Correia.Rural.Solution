'use strict';

(function () {
    angular.module('account').controller('loginController', loginController);

    loginController.$inject = ['$location', 'accountService'];

    function loginController($location, accountService) {
        var _this = this;

        _this.loginData = {
            userName: "",
            password: ""
        };
        _this.message = "";

        _this.doLogin = _doLogin;

        function _doLogin() {
            accountService.login(_this.loginData)
                .then(function (response) {
                    $location.path('/home');
                }, function (err) {
                    _this.message = err.error_description;
                });
        };

        _this.title = "Login";
    }
})();