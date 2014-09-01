'use strict';

(function () {
    angular.module('account').controller('loginController', loginController);

    loginController.$inject = [];

    function loginController() {
        var _this = this;

        _this.title = "Login";
    }
})();