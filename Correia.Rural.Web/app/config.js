'use strict';

// Helper para configuração dos módulos do angular
var ApplicationConfiguration = (function () {

    var applicationModuleName = 'Correia.Rural';
    var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.utils']

    var registerModule = function (moduleName, dependencies) {
        angular.module(moduleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };

})();