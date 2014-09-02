'use strict';

(function () {

	angular.module('account').factory('accountService', authenticationService);

	authenticationService.$inject = ['$http']

})();