'use strict';

// Helper para configuração dos módulos do angular
var ApplicationConfiguration = (function () {

    var _applicationModuleName = 'Correia.Rural';
    var _applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.utils', 'LocalStorageModule', 'angular-loading-bar'];
    var _serviceBaseUrl = "http://localhost:2961/";

    var _registerModule = function (moduleName, dependencies) {
        angular.module(moduleName, dependencies || []);
        angular.module(_applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: _applicationModuleName,
        applicationModuleVendorDependencies: _applicationModuleVendorDependencies,
        registerModule: _registerModule,
        serviceBaseUrl: _serviceBaseUrl
    };

})();