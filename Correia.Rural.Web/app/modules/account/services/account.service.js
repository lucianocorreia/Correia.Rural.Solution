'use strict';

(function () {

	angular.module('account').factory('accountService', authenticationService);

	authenticationService.$inject = ['$http', '$q', 'localStorageService'];

	function authenticationService($http, $q, localStorageService) {
        
	    var _apiBase = ApplicationConfiguration.ServiceBaseUrl;
	    var _factoryObj = {};

	    var _authentication = {
	        isAuthenticated: false,
	        userName: ""
	    };



	};

})();