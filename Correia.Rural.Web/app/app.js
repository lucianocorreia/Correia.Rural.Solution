'use strict';

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function ($locationProvider) {
	    $locationProvider.hashPrefix('!');
	}
]);

angular.module(ApplicationConfiguration.applicationModuleName).config(function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationService');
});

//angular.module(ApplicationConfiguration.applicationModuleName).run(['accountService', function (accountService) {
//    accountService.fillAuthenticationData();
//}]);

//Then define the init function for starting up the application
angular.element(document).ready(function () {        
    angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});