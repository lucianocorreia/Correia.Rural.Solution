'use strict';

(function () {
    angular.module('account').controller('signupController', signupController);

    signupController.$inject = ['$location', '$timeout', 'accountService'];

    function signupController($location, $timeout, accountService) {
        var _this = this;

        _this.savedSuccessfully = false;
        _this.message = "";

        _this.registration = {
            userName: "luciano",
            password: "",
            confirmPassword: ""
        };

        /**
         * Registrar usuário
         */
        _this.doSignup = function () {
            
            accountService.register(_this.registration)
               .then(function (response) {
                   _this.savedSuccessfully = true;
                   _this.message = "O usuário foi registrado com sucesso! Você vai ser redirecionado para a página de login em 2 segundos...";
                   _startTimer();
               }, function (response) {
                   var errors = [];
                   for (var key in response.data.modelState) {
                       for (i = 0; i < response.data.modelState[key].length; i++) {
                           errors.push(response.data.modelState[key][i]);
                       }
                   }
                   _this.message = "Erro ao registrar usuário: " + errors.join(' ');
               });
        };


        function _startTimer() {
            var timer = $timeout(_timeOut, 2000);
            function _timeOut() {
                $timeout.cancel(timer);
                $location.path('/login');
            }
        };

        _this.title = "Cadastrar usuário";
    }
})();